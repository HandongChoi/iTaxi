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

  departOptions: any;
  destinationOptions: any;

  spotList: Array<string> = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public datePickerProvider: DatePickerProvider, public modalCtrl: ModalController, 
              public usersService: UsersProvider, public dateServices: DateProvider) {

    this.user_id = this.usersService.getEmail();
    dateServices.setNow();

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
    if(date != undefined){
      this.selectedDate = date;
      console.log(this.makeStringFromDate(date));
      this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(date));
    }
  }

  goChatroom(room) {
    if (room['currentPeople'] >= room['capacity']) {
      if (!this.isExist(room['participants'])) {
        alert("인원이 가득 차 입장할 수 없습니다.");
        return;
      }
    } else {
      this.af.object(`/rideHistory/${this.usersService.getUID()}/${room.$key}`).set(room);
      this.navCtrl.setRoot(ChatRoomPage, {room: room});  
    }
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage);
  }

  filterDeparture(departFilter){
    if (departFilter == "All") {
      this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate));
    } else {
      this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate), {
        query: {
          orderByChild: 'departure',
          equalTo: departFilter
        }
      });
    }
  }

  filterDestination(destinationFilter){
    if (destinationFilter == "All") {
      this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate));
    } else {
      this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate), {
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
    for (let user of users) {
      if (user == this.user_id)
        return true;
    }
    return false;
  }

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