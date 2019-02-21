import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Content, Platform} from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @ViewChild(Content) content: Content;
  rooms: FirebaseListObservable<Object[]>;
  userID: string;
  transportType: string;

  days: Array<string> = []; //2018-03-02 형식으로 받아 놓을것이다.
  selectedDate: string;
  nowDate: string;
  nowTime: string = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);

  departOptions: string;
  arriveOptions: string;

  emptyData: boolean = false;

  spotList: Array<string> = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "하나로마트", "E1", "그랜드할인마트", "장흥초등학교", "세차장" ,"커피유야", "북부해수욕장", "육거리", "직접입력"];;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public datePickerProvider: DatePickerProvider, public modalCtrl: ModalController,  
              public userServices: UsersProvider, public dateServices: DateProvider, public roomServices: RoomsProvider,
              public alertCtrl: AlertController, public platform : Platform) {
    
    let backAction = platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
    }, 2)
  }

  ionViewWillEnter() {
    this.userID = this.userServices.userInfo['studentID'];
    this.transportType = this.navParams.data.transportType;
    this.days = [];
    this.departOptions = "All";
    this.arriveOptions = "All";
    this.dateServices.setNow();
    this.nowDate = this.dateServices.nowDate;
    for(let i = 1; i < 5; i++){
      let temp = new Date(this.nowDate);
      temp.setDate(temp.getDate() + i);
      this.days.push(this.dateServices.makeStringFromDate(temp));
    }
    //오늘 날짜 기준으로 data 불러오기.
    this.showChatroom(this.nowDate);
    this.content.resize();
  }

  showCalendar() {
    var now = new Date();
    let datePickerOption: DatePickerOption = {
      minimumDate: now,
      maximumDate: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
    }
    const dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
    dateSelected.subscribe(date => {
      this.showChatroom(this.dateServices.makeStringFromDate(date));
    });
  }

  //input: 2018-02-01 형식
  showChatroom(date) {
    this.selectedDate = date;
    this.rooms = this.roomServices.getChatRooms(date, this.transportType);
    this.filter();
    this.rooms.subscribe((response) => {
      this.emptyData = response.length == 0 ? true : false;
    });
  }

  goChatroom(room) {
    if (!this.isEntered(room['participants'])) { //처음 참여
      var modalPage = this.modalCtrl.create('ModalPage', {room: room});
      modalPage.onDidDismiss(data => {
        if(data){
          let members:Array<any> = room['participants'];
          members.push(this.userID);
          room['participants'] = members;
          room['currentPeople']++;
          
          // room['carrierS'] += data['carrierS'];
          // room['carrierL'] += data['carrierL']; 

          //ver1.x과 ver2.0에서 에러날 것에 관한 디펜스 코드. 앱 업데이트가 된다면 위에 주석처리한걸 풀고 이걸 지워야된다.
          room['carrierS'] = isNaN(room['carrierS']) ? data['carrierS'] : room['carrierS'] + data['carrierS'] 
          room['carrierL'] = isNaN(room['carrierL']) ? data['carrierL'] : room['carrierL'] + data['carrierL'] 

          //들어가는 방 정보 업데이트
          this.af.object(`/${room.transportType}Chatrooms/${room.departDate}/${room.$key}`).set(room);
          //타고 있던 사람들 rideHistory 업데이트
          members.forEach(studentID => {
            if(this.userID == studentID){
              this.af.object(`/rideHistory/${studentID}/${room.$key}`).set(room);
              this.af.object(`/rideHistory/${studentID}/${room.$key}`).update({carrierS: data['carrierS'], carrierL: data['carrierL']});
            } else{
              this.af.object(`/rideHistory/${studentID}/${room.$key}`).update({participants: room['participants'], currentPeople: room['currentPeople']});
            }          
          });
          this.navCtrl.push(ChatRoomPage, {room: room, isFirst: true});
          }
      });
      modalPage.present();
    } else{ // 참여중
      this.navCtrl.push(ChatRoomPage, {room: room});
    }
  }

  makeRoom(){ this.navCtrl.push(MakeRoomPage, {transportType: this.transportType}); }

  filter(){
    if(this.departOptions == "All" && this.arriveOptions == "All"){
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType);
    }else if(this.departOptions == "All"){
      let query = {
        orderByChild: 'arrive',
        equalTo: this.arriveOptions
      }
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType, query);
    }else if(this.arriveOptions == "All"){
      let query = {
        orderByChild: 'depart',
        equalTo: this.departOptions
      }
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType, query);
    }else{
      let query = {
        orderByChild: 'fromTo',
        equalTo: this.departOptions + '>' + this.arriveOptions
      }
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType, query);
    }
  }
  
  isEntered(participants: Array<any>): boolean { return participants.indexOf(this.userID) != -1 ? true : false }
  isAvailable(room): boolean { return room.currentPeople < room.capacity ? true : false; }
}