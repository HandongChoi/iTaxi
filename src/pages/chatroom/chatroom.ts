import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { MainPage } from '../../pages/main/main';
import { TaxiListPage } from '../../pages/taxi-list/taxi-list';
import { CarpoolListPage } from '../../pages/carpool-list/carpool-list';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatRoomPage {

  @ViewChild(Content) content: Content;

  chats: FirebaseListObservable<any[]>;
  rideHistory: FirebaseObjectObservable<any>;
  room_object:FirebaseObjectObservable<any>;
  room: any;
  users: Array<Object> = [];

  backPage: any;
  chatContent: string;

  room_host: string;
  user_id: string;
  displayDate: string;
  displayTime: string;

  index: number = -1;

  isCarpool : boolean;

  roomKey: String;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider,
              public alertCtrl: AlertController) {
    console.log('constructor chatroom');
    
    if ("price" in navParams.data.room) { 
      this.backPage = CarpoolListPage;
      this.room = navParams.data.room;
      this.room_object = af.object(`/carpoolChatrooms/${this.room['departure_date']}/${this.room.$key}`);
      this.isCarpool = true;
    }
    else if ("host" in navParams.data.room) {
      this.backPage = TaxiListPage;
      this.room = navParams.data.room;
      this.room_object = af.object(`/chatrooms/${this.room['departure_date']}/${this.room.$key}`);
      this.isCarpool = false;
    }
    else {
      this.backPage = MainPage;
      let alert = this.alertCtrl.create({
        message: "잘못된 경로로 접근하셨습니다.",
        buttons: [{
          text: '확인',
          handler: () => {
            navCtrl.setRoot(this.backPage);
          }
        }] 
      });
      alert.present();
    }

    if (this.room_object !== undefined) {

      if(navParams.data.roomKey){
        this.roomKey = navParams.data.roomKey;
      }else{
        this.roomKey = this.room_object.$ref.key;
      }
      // 임시로 해결책..

      this.chats = af.list('/chats/' + this.roomKey);

      this.rideHistory = af.object(`/rideHistory/${this.userServices.getUID()}/${this.roomKey}`)
      this.user_id = this.userServices.getEmail();
      
      this.roomServices.setRoomInfo(this.room);
      this.displayDate = this.dateServices.getKMonthDay(this.roomServices.room['departure_date']);
      this.displayTime = this.roomServices.room['depart_time'];
      this.room_host = this.roomServices.room['host'];
  
      let isExist: boolean = false;
  
      //목록에 있는지 없는지 여부 확인.
      for(let user of this.roomServices.room['participants']){
        af.list(`/userProfile`, {
          query: {
            orderByChild: 'email',
            equalTo: user
          }
        }).subscribe(data => {
          console.log("data", data);
          this.users.push(data[0]);
          this.scrollBottom();
        });
        if(user === this.userServices.getEmail()){
          isExist = true;
        }
      }
      
      if (isExist == false) {
        if (this.roomServices.addParticipants(this.userServices.getEmail(), this.userServices.getDevToken())) {
          this.room_object.update(this.roomServices.room);
        }
        else {
          let alert = alertCtrl.create({
            message: "인원이 마감되었습니다.",
            buttons: [{text:"OK"}]
          });
          alert.present();
          this.navCtrl.setRoot(this.backPage);
        }
      }
    }
  } 

  goBack(){
    this.navCtrl.setRoot(this.backPage);
  }

  send() {

    if(this.chatContent !== '') {

      let tokenListWithoutCurrentUser = this.roomServices.room['devTokens'];
      console.log("userdevtoken", this.userServices.getDevToken())

      for (let i = 0; i < tokenListWithoutCurrentUser.length; i++)
        if(tokenListWithoutCurrentUser[i] === ""){
          tokenListWithoutCurrentUser.splice(i, 1);
        }
        // ""를 모두 제거하자..


      //나중에 수정 필요.. array를 object로?

      console.log("currentToken List", tokenListWithoutCurrentUser);

      firebase.database().ref('/chats/' + this.roomKey).push({
        user_id: this.userServices.getEmail(),
        user_name: this.userServices.getName(),
        content: this.chatContent,
        date_time: new Date().toLocaleString(),
        devTokens: tokenListWithoutCurrentUser,
        whenToDepart: this.roomServices.room['departure_date'],
        isCarpool: this.isCarpool
      }).then(() => {
        this.chatContent = "";
        this.scrollBottom();
      });
    }
  }

  quit(){
    let alert = this.alertCtrl.create({
      title: "방 나가기",
      message: "정말로 방을 나가시겠습니까?",
      buttons: [{
        text: "Cancle",
        role: "cancle"
      }, {
        text: "OK",
        handler: () => {
          let old_participants: Array<String> = this.roomServices.room['participants'];
          let new_participants: Array<String> = [];
          let new_devTokens: Array<String> = [];
      
          old_participants.forEach(user =>{
            if(user !== this.userServices.getEmail()){
              new_participants.push(user);
              new_devTokens.push(this.userServices.getDevToken());
            }
          });
      
          if(this.userServices.getEmail() !== this.roomServices.room['host']) {
            // 방장이 아닌 다른 사람이 나갈 경우
            this.room_object.update({
              participants: new_participants,
              currentPeople: this.roomServices.room['currentPeople'] - 1,
              devTokens : new_devTokens
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
                currentPeople: this.roomServices.room['currentPeople'] - 1,
                devTokens: new_devTokens
              });
            }
          }
          this.roomServices.getOut();
          this.room = this.roomServices.room;
          this.dateServices.setNow();
          console.log('아니면 여기인가?'); 
          if (this.room['departure_date'] + this.room['departure_time'] > this.dateServices.nowDate + this.dateServices.nowTime) {
            // 예약시간이 지금보다 이후이면 삭제
            // => 택시를 타고 나서는 기록이 지워지지 않음. (먹튀 예방..?)
            this.rideHistory.remove();
          }
          this.navCtrl.setRoot(this.backPage);
        }
      }]
    });
    alert.present();
  }

  ionViewDidLoad(){
    
  }

  scrollBottom(){
    this.content.scrollToBottom(300);
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

