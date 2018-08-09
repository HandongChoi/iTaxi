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
  rideHistoryObject: FirebaseObjectObservable<any>;
  roomObject:FirebaseObjectObservable<any>;
  room: any;
  users: Array<Object> = [];

  backPage: any;
  chatContent: string;

  roomHost: string;
  userID: string;
  displayDate: string;
  displayTime: string;

  index: number = -1;
  isCarpool : boolean;
  roomKey: String;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider,
              public alertCtrl: AlertController) {
    //이거는 차라리 방을 만들때 안에 isTaxi 나 Transport로 둬서 Taxi, Carpool, default로 구분지어도 될 것 같다.
    if ("price" in navParams.data.room) { 
      this.backPage = CarpoolListPage;
      this.room = navParams.data.room;
      this.roomObject = af.object(`/carpoolChatrooms/${this.room['departureDate']}/${this.room.$key}`);
      this.isCarpool = true;
    } else if ("host" in navParams.data.room) {
      this.backPage = TaxiListPage;
      this.room = navParams.data.room;
      this.roomObject = af.object(`/chatrooms/${this.room['departureDate']}/${this.room.$key}`);
      this.isCarpool = false;
    } else {
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

    //room key를 설정함으로써 채팅방 데이터를 가져오는 행위.
    if (this.roomObject !== undefined) {
      if(navParams.data.roomKey){
        this.roomKey = navParams.data.roomKey;
      } else {
        this.roomKey = this.roomObject.$ref.key;
      }
      // 임시로 해결책..

      //모든 chat을 가져온것.
      this.chats = af.list('/chats/' + this.roomKey);

      this.rideHistoryObject = af.object(`/rideHistory/${this.userServices.getUID()}/${this.roomKey}`)
      this.userID = this.userServices.getEmail();
      
      //그냥 바로 room을 쓰지 왜 setRoomInfo를 통해서 roomService를 쓸까?
      this.roomServices.setRoomInfo(this.room);
      //이거는 그 채팅방에 들어가면 위에 보이는 Date와 Time에 관해서 보여주는거다.
      this.displayDate = this.dateServices.getKMonthDay(this.roomServices.room['departureDate']);
      this.displayTime = this.roomServices.room['depart_time'];
      //roomHost는 왜 필요하지?
      this.roomHost = this.roomServices.room['host'];
  
      let isExist: boolean = false;
  
      //접속한 user가 그 채팅방의 목록에 있는지 없는지 여부 확인.
      for(let user of this.roomServices.room['participants']){
        af.list(`/userProfile`, {
          query: {
            orderByChild: 'email',
            equalTo: user
          }
        }).subscribe(data => {
          //이거는 뭐하는건지 모르겠다?
          console.log("data", data);
          this.users.push(data[0]);
          //이거는 스크롤을 가장 밑으로 옮기는걸까? 채팅방에 이게 필요할 것 같다. 맞으면 다른 곳에도 적용해보자.
          this.scrollBottom();
        });
        if(user === this.userServices.getEmail()){
          isExist = true;
        }
      }
      
      //새로운 사람이 들어오는 상황.
      if (isExist == false) {
        //새로운 사람이 들어 갈 수 있는 상황.
        if (this.roomServices.addParticipants(this.userServices.getEmail(), this.userServices.getDevToken())) {
          this.roomObject.update(this.roomServices.room);
        } else {
          let alert = alertCtrl.create({
            message: "인원이 마감되었습니다.",
            buttons: [{text:"OK"}]
          });
          alert.present();
          this.navCtrl.setRoot(this.backPage);
        }
      }
    }

    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
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
        userID: this.userServices.getEmail(),
        user_name: this.userServices.getName(),
        content: this.chatContent,
        date_time: new Date().toLocaleString(),
        devTokens: tokenListWithoutCurrentUser,
        whenToDepart: this.roomServices.room['departureDate'],
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
      
          //이전 사용자들을 정보들을 새로운 곳에 다 넣는다.
          old_participants.forEach(user =>{
            if(user !== this.userServices.getEmail()){
              new_participants.push(user);
              new_devTokens.push(this.userServices.getDevToken());
            }
          });
      
          if(this.userServices.getEmail() !== this.roomServices.room['host']) {
            // 방장이 아닌 다른 사람이 나갈 경우
            this.roomObject.update({
              participants: new_participants,
              currentPeople: this.roomServices.room['currentPeople'] - 1,
              devTokens : new_devTokens
            });
          } else {
            if(this.roomServices.room['currentPeople'] <= 1) {
              //방장이고, 방에 사람이 없을 때
              this.roomObject.remove();
            } else {
              //방장 다음 사람으로 옮기기
              this.roomObject.update({
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
          // 예약시간이 지금보다 이후이면 삭제
          if (this.room['departureDate'] + this.room['departureTime'] > this.dateServices.nowDate + this.dateServices.nowTime) {
            this.rideHistoryObject.remove();
          }
          this.navCtrl.setRoot(this.backPage);
        }
      }]
    });
    alert.present();
  }

  payment(){
    //room에서 사람수 빼낸다.
    //클릭한 유저 계좌번호 빼낸다.
    //input으로 돈 받아낸다.
    //나눠서 채팅방에 출력한다.
  }

  ionViewDidLoad(){
    console.log("chatroom loaded");
  }

  scrollBottom(){
    this.content.scrollToBottom(300);
  }

  show(index) {
    if (this.index == index) {
      this.index = -1;
    } else {
      this.index = index;
    }
  }
}

