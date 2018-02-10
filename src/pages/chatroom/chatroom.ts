import { Component, ViewChild } from '@angular/core';
import { NavController, Content, NavParams, Platform } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { MainPage } from '../../pages/main/main';
import { TaxiListPage } from '../../pages/taxi-list/taxi-list';
import { CarpoolListPage } from '../../pages/carpool-list/carpool-list';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';

declare var FCMPlugin;

@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html'
})
export class ChatRoomPage {

  @ViewChild(Content) content: Content;

  chats: FirebaseListObservable<any[]>;
  rideHistory: FirebaseObjectObservable<any>;
  room_object:FirebaseObjectObservable<any>;
  room: any;

  backPage: any;
  chatContent: string;

  room_host: string;
  user_id: string;
  displayDate: string;
  displayTime: string;

  subscribe: any;
  index: number = -1;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider) {
    console.log('constructor chatroom');

    this.room = navParams.data.room;
    if (navParams.data.whichPage == "Taxi") {
      this.backPage = TaxiListPage;
      this.room_object = af.object(`/chatrooms/${this.room['departure_date']}/${this.room.$key}`);
    }
    else if (navParams.data.whichPage == "Carpool") {
      this.backPage = CarpoolListPage;
      this.room_object = af.object(`/carpoolChatrooms/${this.room['departure_date']}/${this.room.$key}`);
    }
    else {
      this.backPage = MainPage;
      alert("잘못된 경로로 접근하셨습니다.");
      navCtrl.setRoot(this.backPage);
    }

    this.chats = af.list('/chats/' + this.room_object.$ref.key);
    this.rideHistory = af.object(`/rideHistory/${this.userServices.getUID()}/${this.room_object.$ref.key}`)
    this.user_id = this.userServices.getEmail();
    
    this.roomServices.setRoomInfo(this.room);
    this.displayDate = this.dateServices.getKMonthDay(this.roomServices.room['departure_date']);
    this.displayTime = this.roomServices.room['depart_time'];
    this.room_host = this.roomServices.room['host'];

    let isExist: boolean = false;

    //목록에 있는지 없는지 여부 확인.
    for(var user of this.roomServices.room['participants']){
      if(user === this.userServices.getEmail()){
        isExist = true;
        break;
      }
    }
    
    if (isExist == false) {
      if (this.roomServices.addParticipants(this.userServices.getEmail())) {
        this.room_object.update(this.roomServices.room);
      }
      else {
        alert("인원이 마감되었습니다.");
        this.navCtrl.setRoot(this.backPage);
      }
    }
  } 

  goBack(){
    this.navCtrl.setRoot(this.backPage);
  }

  send() {
    if(this.chatContent.trim() != '') {
      firebase.database().ref('/chats/'+this.room_object.$ref.key).push({
        user_id: this.userServices.getEmail(),
        user_name: this.userServices.getName(),
        content: this.chatContent,
        date_time: new Date().toLocaleString()
      }).then(() => {
        this.chatContent = "";
      });
    }
  }

  quit(){
    let old_participants: Array<String> = this.roomServices.room['participants'];
    let new_participants: Array<String> = [];

    old_participants.forEach(user =>{
      if(user !== this.userServices.getEmail())
        new_participants.push(user);
    });

    if(this.userServices.getEmail() !== this.roomServices.room['host']) {
      // 방장이 아닌 다른 사람이 나갈 경우
      this.room_object.update({
        participants: new_participants,
        currentPeople: this.roomServices.room['currentPeople'] - 1
      });
    }
    else{
      if(this.roomServices.room['currentPeople'] <= 1) {
        //방장이고, 방에 사람이 없을 때
        this.room_object.remove();
      }
      else {
        //방장 다음 사람으로 옮기기
        this.room_object.update({
          host: new_participants[0],
          participants: new_participants,
          currentPeople: this.roomServices.room['currentPeople'] - 1
        });
      }
    }
    this.roomServices.getOut();
    this.room = this.roomServices.room;
    this.rideHistory.remove();
    this.navCtrl.setRoot(this.backPage);
  }

  ionViewDidLoad(){
    if(typeof(FCMPlugin) != 'undefined'){
      FCMPlugin.onNotification(function(data){
        if(data.wasTrapped){
          alert("background: ");
        } else{
          alert(data.sendername + ': ' + data.message);
        }
      });
    }
  }

  scrollBottom(){
    this.content.scrollToBottom();
  }

  show(index) {
    if (this.index == index) {
      this.index = -1;
    }
    else {
      this.index = index;
    }
  }
}
