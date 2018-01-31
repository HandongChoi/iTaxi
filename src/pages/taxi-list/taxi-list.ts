import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { ChatRoomPageModule } from '../chatroom/chatroom.module';

@IonicPage()
@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html',
})
export class TaxiListPage {

  rooms: FirebaseListObservable<any[]>;
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
    this.rooms = this.af.list('/chatRooms/' + this.dateServices.dateToDelimiterFormat(date));
  }

  goChatroom(room) {
    let chatRoomKey = room.$key;
    let bookingDate= room.departureDate;
    let isExist: boolean = false;
    //목록에 있는지 없는지 여부 확인.
    for(var user of room['participants']){
      if(user === this.user_id){
        isExist = true;
      }
    }
    if(isExist === false){
      if(parseInt(room['capacity']) > room['participants'].length){
       room['participants'].push(this.usersService.getUID());
        
        //지금 고민인 것은 탑승 내역에 사람이 들어갔다는 걸 넣어야 되는데 넣고 나서
        //다른 사람들을의 데이터를 어떻게 업데이트 시키냐에 대한 고민을 하는 중.
        // this.rideHistory.push({
        //   roomId: this.chat_room_id,
        //   roomDate: this.room_depart_date,
        //   roomTime: this.room_depart_time,
        //   roomDepart: this.room_depart,
        //   roomDest: this.room_dest,
        //   roomCapacity: this.room_capacity,
        //   roomParticipants: this.room_participants
        // });

        //나중에 카멜 기법으로 싹 다 바꾸자.
        this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chatRoomKey, bookingDate: bookingDate});
      }
      else{
        console.log('사람 꽉 찼다. 가라');
      }
    }
    else{
      this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chatRoomKey, bookingDate: bookingDate});  
    }
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage, {user_id: this.user_id});
    console.log("makeRoom function into taxi-list.tx");
  }

  filterDeparture(departFilter){
    if (departFilter == "All") {
      this.rooms = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate));
    } else {
      this.rooms = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate), {
        query: {
          orderByChild: 'departure',
          equalTo: departFilter
        }
      });
    }
  }

  filterDestination(destinationFilter){
    if (destinationFilter == "All") {
      this.rooms = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate));
    } else {
      this.rooms = this.af.list('/chatRooms/'+ this.dateServices.dateToDelimiterFormat(this.selectedDate), {
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
  }
}
