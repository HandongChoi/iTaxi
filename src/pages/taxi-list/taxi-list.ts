import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';

@IonicPage()
@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html',
})
export class TaxiListPage {
  rooms: FirebaseListObservable<Object[]>;
  userID: string;
  transportType: string;

  days: Array<string> = []; //2018-03-02 형식으로 받아 놓을것이다.
  selectedDate: string;
  nowDate: string;
  nowTime: string = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);

  departOptions: any;
  arriveOptions: any;

  spotList: Array<string> = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public datePickerProvider: DatePickerProvider, public modalCtrl: ModalController,  
              public userServices: UsersProvider, public dateServices: DateProvider, public roomServices: RoomsProvider) {
    this.dateServices.setNow();
    this.userID = this.userServices.userInfo['studentID'];
    this.transportType = this.navParams.data.transportType;
    this.nowDate = this.dateServices.nowDate;
    for(let i = 1; i < 5; i++){
      let temp = new Date(this.nowDate);
      temp.setDate(temp.getDate() + i);
      this.days.push(this.dateServices.makeStringFromDate(temp));
    }
    //오늘 날짜 기준으로 data 불러오기.
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

  //input으로 2018-02-01 형식을 기대한다.
  showChatroom(date) {
    this.selectedDate = date;
    this.rooms = this.roomServices.getChatRooms(date, this.transportType);
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
    } else{ // 참여중
      this.navCtrl.push(ChatRoomPage, {room: room});
    }
  }

  makeRoom(){ this.navCtrl.setRoot(MakeRoomPage, {transportType: this.transportType}); }

  filterDeparture(departFilter){
    if (departFilter == "All") {
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType);
    } else {
      let query = {
        orderByChild: 'depart',
        equalTo: departFilter
      }
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType, query);
    }
  }

  filterDestination(arriveFilter){
    if (arriveFilter == "All") {
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType);
    } else {
      let query = {
        orderByChild: 'arrive',
        equalTo: arriveFilter
      }
      this.rooms = this.roomServices.getChatRooms(this.selectedDate, this.transportType, query);
    }
  }

  ionViewDidLoad() { console.log('ionViewDidLoad TaxiListPage'); }
  isEntered(participants: Array<any>): boolean { return participants.indexOf(this.userID) != -1 ? true : false }
  isAvailable(room): boolean { return room.currentPeople < room.capacity ? true : false; }
}