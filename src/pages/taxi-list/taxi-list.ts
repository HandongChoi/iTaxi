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

  userExist: boolean;

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

  //data는 2018-01-01 형식으로 들어 올 것.
  showChatroom(date) {
    this.selectedDate = date;
    this.rooms = this.af.list('/chatRooms/' + this.dateServices.dateToDelimiterFormat(date));
  }

  //room은 firebase object로 들어온다.
  goChatroom(room) {
    let bookingDate= room.departureDate;
    let isExist: boolean = false;
    //목록에 있는지 없는지 여부 확인.
    this.af.object('/participants/'+room.$key).subscribe(participants=>{
      for(var user of participants){
        if(user === this.usersService.getEmail()){
          isExist = true;
        }
      }
      /////////////// 여기 뭔가 논리가 더 예쁘게 정리 될 것 같은데 나중에 시간 날 때 생각해보자 ////////////
      if(isExist === false){
        if(room['full'] == false){
          participants.push(this.usersService.getEmail());
          ///////////////////  작동하는지 확인해야된다. /////////////////// 밑에와 같은 방식으로 update되는지를 아직 잘 모른다.
          room['participants'].push(this.usersService.getEmail());
          room['currentPeople'] = parseInt(room['currentPeople'])+1;
          if(room['currentPeople'] >= room['capacity'])
            room['full']=true;
          this.navCtrl.setRoot(ChatRoomPage, {roomObj: room});
        } else{
          console.log('사람 꽉 찼다. 가라');
        }
      } else{
        //자기가 들어가 있는 방이니깐 그냥 입장.
        this.navCtrl.setRoot(ChatRoomPage, {roomObj: room});  
      } 
    });
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage);
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

  // room object가 온다. 여기 때문에 불필요하게 room 안에 participants 더 넣었음.
  isExist(participants): boolean{
    for(let user of participants){
      if(user == this.usersService.getEmail())
        return true;  
    }
    return false;
  }
}
