import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

@IonicPage()
@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html',
})
export class TaxiListPage {
  rooms: FirebaseListObservable<any[]>;
  userID: any;
  transportType: string;

  days: Array<Date> = [];
  selectedDate: Date = new Date();
  nowDate: Date = new Date();
  nowTime: string = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);

  departOptions: any;
  arriveOptions: any;

  spotList: Array<string> = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public datePickerProvider: DatePickerProvider, public modalCtrl: ModalController, 
              public userServices: UsersProvider, public dateServices: DateProvider) {

    this.userID = this.userServices.userInfo['studentID'];
    this.transportType = this.navParams.data.transportType;
    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
    
    for(let i = 1; i < 5; i++){
      let temp = new Date(this.nowDate.getTime());
      temp.setDate(temp.getDate() + i);
      this.days.push(temp);
    }

    //기본적으로 오늘 날짜 기준으로 data 불러오기.
    this.showChatroom(this.nowDate);
  }

  showCalendar() {
    var now = new Date();
    let datePickerOption: DatePickerOption = {
      minimumDate: now,
      maximumDate: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
    }

    const dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
    dateSelected.subscribe(date => {this.showChatroom(date);});
  }

  showChatroom(date) {
    this.selectedDate = date;
    this.rooms = this.getRooms(date, this.transportType);
  }

  goChatroom(room) {
    if (!this.isEntered(room['participants'])) { //처음 참여
      let members = room['participants'];
      let tokenList = room['devTokens'];
      members.push(this.userID);
      tokenList.push(this.userServices.userInfo['devToken']);
      room['participants'] = members;
      room['devTokens'] = tokenList;
      room['currentPeople']++;
      this.af.object(`/rideHistory/${this.userServices.userInfo['studentID']}/${room.$key}`).set(room);
      this.navCtrl.push(ChatRoomPage, {room: room});  
    } else{ // 참여중
      this.navCtrl.push(ChatRoomPage, {room: room});
    }
  }

  makeRoom(){ this.navCtrl.setRoot(MakeRoomPage, {transportType: this.transportType}); }

  filterDeparture(departFilter){
    if (departFilter == "All") {
      this.rooms = this.getRooms(this.selectedDate, this.transportType);
    } else {
      let query = {
        orderByChild: 'depart',
        equalTo: departFilter
      }
      this.rooms = this.getRooms(this.selectedDate, this.transportType, query);
    }
  }

  filterDestination(arriveFilter){
    if (arriveFilter == "All") {
      this.rooms = this.getRooms(this.selectedDate, this.transportType);
    } else {
      let query = {
        orderByChild: 'arrive',
        equalTo: arriveFilter
      }
      this.rooms = this.getRooms(this.selectedDate, this.transportType, query);
    }
  }

  ionViewDidLoad() { console.log('ionViewDidLoad TaxiListPage'); }

  getRooms(date, transportType, queryMsg?){
    return queryMsg ? this.af.list(`/${transportType}Chatrooms/${this.makeStringFromDate(date)}`, {
                      query: queryMsg }) 
                    : this.af.list(`/${transportType}Chatrooms/${this.makeStringFromDate(date)}`); 
  }

  isEntered(participants: Array<any>): boolean { return participants.indexOf(this.userID) != -1 ? true : false }
  isAvailable(room): boolean { return room.currentPeople < room.capacity ? true : false; }

  private makeStringFromDate(date: Date): string {
    var d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}