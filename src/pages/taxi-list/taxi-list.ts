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

  dates: FirebaseListObservable<any[]>;
  user_id: any;

  days: Array<Date> = [];
  nowDate: Date = new Date();
  selectedDate: Date = new Date();

  spotList: Array<string> = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public datePickerProvider: DatePickerProvider, public modalCtrl: ModalController, 
              public usersService: UsersProvider, public dateServices: DateProvider) {

    this.user_id = this.usersService.getEmail();
    // todayLocal : Sun Jan 28 2018 15:23:12 GMT+0900 형식으로 현재 한국 시간으로 나온다.
    for(let i = 0; i < 5; i++){
      let todayLocal = new Date();
      todayLocal.setDate(todayLocal.getDate() + i);
      this.days.push(todayLocal);
    }
    //기본적으로 오늘 날짜 기준으로 data 불러오기.
    this.showChatroom(this.nowDate);
  }

  showCalendar() {
    var now = new Date();
    let datePickerOption: DatePickerOption = {
      minimumDate: now,
      maximumDate: new Date(now.getFullYear(), now.getMonth()+1, now.getDate())
    }
    const dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
    dateSelected.subscribe(date => {this.showChatroom(date);});
  }

  showChatroom(date) {
    this.selectedDate = date;
    this.dates = this.af.list('/chatRooms/' + this.dateServices.dateToDelimiterFormat(date));
  }

  goChatroom(room) {
    let chatRoomKey = room.$key;
    let bookingDate= room.depart_date;

    //participant array에 push
    // 참여자가 아니고, 인원 full 아니면 push
    // 참여자이면 그냥 enter
    // full 인원이면 deny
    this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chatRoomKey, bookingDate: bookingDate, user_id: this.user_id});
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage, {user_id: this.user_id});
    console.log("makeRoom function into taxi-list.tx");
  }

  filterDeparture(departFilter){
    if (departFilter == "All") {
      this.dates = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate));
    } else {
      this.dates = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate), {
        query: {
          orderByChild: 'departure',
          equalTo: departFilter
        }
      });
    }
  }

  filterDestination(destinationFilter){
    if (destinationFilter == "All") {
      this.dates = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate));
    } else {
      this.dates = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate), {
        query: {
          orderByChild: 'destination',
          equalTo: destinationFilter
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiListPage');
  }

  isExist(users: Array<any>): boolean {
    for(let user of users){
      if(user == this.usersService.getUID())
        return true;  
    }
    return false;

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].uid == this.user_id)
    //     return true;
    // }
    // return false;
  }
}
