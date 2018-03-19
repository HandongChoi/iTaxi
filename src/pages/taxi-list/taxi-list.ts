import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePickerProvider, DatePickerOption } from 'ionic2-date-picker';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

@IonicPage()
@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html',
})
export class TaxiListPage {

  dates: AngularFireList<any[]>;

  days: Array<Date> = [];
  nowDate: Date = new Date();
  selectedDate: Date = new Date();

  departOptions: any = {
    title: '출발지',
    subTitle: '원하시는 출발지를 체크해주세요.',
    mode: 'md'
  };
  destinationOptions: any = {
    title: '도착지',
    subTitle: '원하시는 도착지를 체크해주세요.',
    mode: 'md'
  };

  spotList: Array<string> = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리"];

  constructor(private navCtrl: NavController, private af: AngularFireDatabase,
              private datePickerProvider: DatePickerProvider, private modalCtrl: ModalController, 
              private usersService: UsersProvider, private dateServices: DateProvider) {
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

  // 쿼리를 따로따로 날리지 말고 쿼리를 날리는 함수 하나를 만들어서 하자.
  // 내생각엔 .orderByChild().equalTo().orderByChild(). ... 하면 가능할거같구
  // 고려해야하는게 날짜, 출발지, 목적지 세개니까 이거를 rwx처럼 777같은 느낌으로 할 수 있겠다
  // 이렇게 네개 고려하는거 만들면 딱 되면 좋을텐데..? 그치?
  showChatroom(date) {
    if(date != undefined){
      this.selectedDate = date;
      this.dates = this.af.list(`/chatrooms/${this.makeStringFromDate(date)}`);
    }
  }

  goChatroom(room) {
    if (room['currentPeople'] >= room['capacity']) {
      if (!this.isExist(room['participants'])) {
        alert("인원이 가득 차 입장할 수 없습니다.");
        return;
      }
    }

    this.af.object(`/rideHistory/${this.usersService.getUID()}/${room.$key}`).set(room);
    this.navCtrl.setRoot(ChatRoomPage, {room: room});
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage);
    console.log("makeRoom function into taxi-list.tx");
  }

  filterDeparture(departFilter){
    if (departFilter == "All") {
      this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate));
    }
    else {
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
    }
    else {
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