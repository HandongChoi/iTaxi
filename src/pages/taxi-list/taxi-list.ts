import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePicker, DatePickerOption } from 'ionic2-date-picker';

@IonicPage()
@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html',
  providers: [ DatePicker ],
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
  public datePicker: DatePicker) {

    this.user_id = navParams.data.user_id;

    for(let i = 0; i < 5; i++){
      let temp = new Date(this.nowDate.getTime());
      temp.setDate(temp.getDate() + i);
      this.days.push(temp);
    }

    //기본적으로 오늘 날짜 기준으로 data 불러오기.
    this.showChatroom(this.nowDate);

    this.departOptions = {
      title: '출발지',
      subTitle: '원하시는 출발지를 체크해주세요.',
      mode: 'md'
    };

    this.destinationOptions = {
      title: '도착지',
      subTitle: '원하시는 도착지를 체크해주세요.',
      mode: 'md'
    };

    this.datePicker = new DatePicker(<any>this.datePicker.modalCtrl, <any>this.datePicker.viewCtrl);
    this.datePicker.onDateSelected.subscribe((date) => { this.showChatroom(date);} );
  }

  showCalendar() {
    let datePickerOption: DatePickerOption = {
      minimumDate: new Date(),
    }
    this.datePicker.showCalendar(datePickerOption);
  }

  showChatroom(date) {
    this.selectedDate = date;
    this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(date));
  }

  goChatroom(date) {
    let chat_room_id_val = date.$key;
    let bookingDate_val= date.depart_date;
    //participant array에 push
    // 참여자가 아니고, 인원 full 아니면 push
    // 참여자이면 그냥 enter
    // full 인원이면 deny
    this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chat_room_id_val, bookingDate: bookingDate_val, user_id: this.user_id});
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage, {user_id: this.user_id});
    console.log("makeRoom function into taxi-list.tx");
  }

  filterDeparture(departFilter){
    this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate), {
      query: {
        orderByChild: 'departure',
        equalTo: departFilter
      }
    });
  }

  filterDestination(destinationFilter){
    console.log("Des: "+destinationFilter);
    this.dates = this.af.list('/chatrooms/'+ this.makeStringFromDate(this.selectedDate), {
      query: {
        orderByChild: 'destination',
        equalTo: destinationFilter
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiListPage');
  }

  isExist(users: Array<string>): boolean {
    for (let i = 0; i < users.length; i++) {
      if (users[i].uid == this.user_id)
        return true;
    }
    return false;
  }

  private makeStringFromDate(date: Date): string {
    return date.toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
  }

}
