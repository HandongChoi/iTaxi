import { Component, ViewChild } from '@angular/core';
import { NavController, Content, NavParams, Platform } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { TaxiListPage } from '../../pages/taxi-list/taxi-list';

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
  room: FirebaseListObservable<any[]>;
  rideHistory: FirebaseListObservable<any[]>;
  room_object:FirebaseObjectObservable<any[]>;

  chat_user_id: any;
  chat_content: any;
  chat_room_id: any;
  bookingDate: string;

  roomObj: Object;
  room_host: string;
  room_participants:  Array<string> = [];

  isHost: boolean;

  displayDate: string;
  displayTime: string;

  page_info: string;

  subscribe: any;
  index: number = -1;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider) {
    console.log('constructor chatroom'); 
    //chatRoom을 올 수 있는 방법은 탑승내역, 챗방 만들때, 리스트에서 올 수 있다. 항상 roomObj를 넘길 수 있도록 하자.  
    this.roomObj = navParams.data.roomObj;
    this.chat_user_id = this.userServices.getEmail();
    
    //////////////////////////// chatroom key가 안 되서 지금 send()작업 못 하는 중 ///////////////////////////////
    /////////////////////////// 이것부터 고치고 다른 작업하시오. ////////////////////////////////////////////
    console.log('constructor chatroom');  
      
    this.bookingDate = navParams.data.bookingDate;
    this.chat_room_id = navParams.data.chat_room_id;
    this.chat_user_id = navParams.data.user_id;

    console.log(this.roomObj)

    //content로 set해두자.
    this.chats = af.list('/chats/'+ this.chat_room_id);
    this.room_object = af.object('/chatrooms/' + this.bookingDate + '/' + this.chat_room_id);

    this.subscribe = this.room_object.subscribe(data=>{
      this.roomObj = data;
      this.roomServices.setRoomInfo(data);
      this.displayDate = this.dateServices.getKMonthDay(this.bookingDate);
      this.displayTime = this.roomServices.room['depart_time'];
      this.room_host = this.roomServices.room['host'];

      let isExist: boolean = false;

      //목록에 있는지 없는지 여부 확인.
      for(var user of this.roomServices.room['participants']){
        console.log('유저다');
        console.log(user);
        if(user === this.chat_user_id){
          isExist = true;
          console.log("True? : "+isExist);        
        }
      }

      console.log(this.chat_user_id);
      
      if (isExist == false) {
        if (this.roomServices.addParticipants(this.chat_user_id)) {
          this.room_object.update(this.roomServices.room);
        }
        else {
          console.log("사람이 꽉 차버렸어");
          this.navCtrl.setRoot(TaxiListPage);
        }
      }

      console.log("here?");
    });
  } 

  goBack(){
      this.navCtrl.setRoot(TaxiListPage);
  }

  send(chatContent: string): string{
    if(chatContent != ''){
      console.log("test in chatroom.ts : ", this.roomObj);
      firebase.database().ref('/chats/'+this.room_object.$ref.key).push({
        user_id: this.chat_user_id,
        content: chatContent,
        date_time: new Date().toLocaleString(),
        dateKey: this.chat_room_id
      });
    }
    else{

    }
    //이게 되는지 한 번 보자.
    
    return '';
  }

  quit(){
    this.subscribe.unsubscribe();
    let old_participants: Array<String> = this.roomServices.room['participants'];
    let new_participants: Array<String> =[];
    console.log("quit(): ", old_participants);
    if(old_participants){
      old_participants.forEach(data =>{
        if(data !== this.chat_user_id)
          new_participants.push(data);
      });

      console.log(new_participants);

      if(this.chat_user_id !== this.room_host){

        this.room_object.update({
          participants: new_participants,
          currentPeople: this.roomServices.room['currentPeople'] - 1
        });

        //this.rideHistory.remove();
        this.navCtrl.setRoot(TaxiListPage, {user_id: this.chat_user_id});
      }// 방장이 아닌 다른 사람이 나갈 경우
      else{
        //방장이고, 방에 사람이 없을 때
        console.log("delete room: ", this.roomServices.room);
        if(this.roomServices.room['currentPeople'] === 1){
          this.room_object.remove();
          //this.rideHistory.remove();
        }
        else if(this.roomServices.room['currentPeople'] > 1){
          this.room_object.update({
            host: new_participants[0],
            participants: new_participants,
            currentPeople: this.roomServices.room['currentPeople'] - 1
          });

          //this.rideHistory.remove();
        }
        this.navCtrl.setRoot(TaxiListPage);
      }
      //방장 다음 사람으로 옮기기
    }
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
