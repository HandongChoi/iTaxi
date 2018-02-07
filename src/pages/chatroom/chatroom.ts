import { Component, ViewChild } from '@angular/core';
import { NavController, Content, NavParams, Platform } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { TaxiListPage } from '../../pages/taxi-list/taxi-list';
import * as $ from 'jquery';

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

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider) {

    console.log('constructor chatroom');  
      
    this.bookingDate = navParams.data.bookingDate;
    this.chat_room_id = navParams.data.chat_room_id;
    this.chat_user_id = navParams.data.user_id;
    let whichPage = navParams.data.whichPage;

    //content로 set해두자.
    this.chats = af.list('/chats/'+ this.chat_room_id+ '/');
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


    // let parsedID = this.stringParser(this.chat_user_id)
    // console.log(parsedID);
    // // this.rideHistory = af.list('/rideHistory/'+ parsedID);
    // // console.log('hi', this.rideHistory.$ref.ref.key);
    // let count = 0;


    // this.room.forEach(data =>{
    //   console.log("시작하자");
    //   console.log(data);
    //   console.log(data[0].$value);
    //   if(count == 0){
    //     this.room_capacity = data[0].$value;
    //     this.room_depart_date = data[2].$value;
    //     this.room_depart_time = data[3].$value;
    //     this.room_depart = data[4].$value;
    //     this.room_dest = data[5].$value;
    //     this.room_host = data[6].$value;
    //     this.room_participants = data[7];

    //     this.room_month = (this.room_depart_date[5] + this.room_depart_date[6]);
    //     this.room_day= (this.room_depart_date[8] + this.room_depart_date[9]);
    //     this.room_hour= (this.room_depart_time[0] + this.room_depart_time[1]);
    //     this.room_minute=(this.room_depart_time[3]+this.room_depart_time[4]);

    //     this.roomKey = this.room.$ref.ref.parent.key;
    //     console.log(this.roomKey);
        // //내가 방장 주인인지 아닌지 확인
        // if(this.room_host === this.chat_user_id)
        //   this.isHost = true;
        // else
        //   this.isHost = false;

    //     var isExist = false;

    //     //목록에 있는지 없는지 여부 확인.
    //     for(let i = 0; i < this.room_participants.length; i++){
    //       if(this.room_participants[i] === this.chat_user_id){
    //         isExist = true;
    //         break;
    //       }
    //     }

    //     //이거는 탑승내역을 기록하는건데 탑승 내역은 방 만들때 넣자.
    //     //그리고 방을 들어갈때 탑승 내역을 넣자.(이때에는 탑승 했던건지 아닌지 확인하고 넣으면 된다.)
    //     if(whichPage === 'makeRoom'){
    //       this.rideHistory.push({
    //         roomId: this.chat_room_id,
    //         roomDate: this.room_depart_date,
    //         roomTime: this.room_depart_time,
    //         roomDepart: this.room_depart,
    //         roomDest: this.room_dest,
    //         roomCapacity: this.room_capacity,
    //         roomParticipants: this.room_participants
    //       });
    //     }

    //     //목록에 없다면 넣는 것 같다. 방에 인원 추가하고 탑승 내역도 수정하는것 같다.
    //     if(isExist === false){
    //       if(parseInt(this.room_capacity) > this.room_participants.length){
    //         this.room_participants.push(this.chat_user_id);

    //         this.room_object.update({
    //           capacity: this.room_capacity,
    //           depart_date: this.room_depart_date,
    //           depart_time: this.room_depart_time,
    //           departure: this.room_depart,
    //           destination: this.room_dest,
    //           host: this.room_host,
    //           participants: this.room_participants
    //         })
    //         this.rideHistory.push({
    //           roomId: this.chat_room_id,
    //           roomDate: this.room_depart_date,
    //           roomTime: this.room_depart_time,
    //           roomDepart: this.room_depart,
    //           roomDest: this.room_dest,
    //           roomCapacity: this.room_capacity,
    //           roomParticipants: this.room_participants
    //         });
    //       }
    //     };
    //   }
      // count++;

    // });
  }

  stringParser(sentence){
    let parsedID = sentence.replace('@', '');
    parsedID = parsedID.replace('.', '');

    return parsedID;
  }

  goBack(){
      this.navCtrl.setRoot(TaxiListPage, {user_id: this.chat_user_id});
  }

  send(){
    if(this.chat_content !== ''){
      this.chats.push({
        user_id: this.chat_user_id,
        content: this.chat_content,
        date_time: new Date().toLocaleString(),
        dateKey: this.chat_room_id
      });

      this.chat_content = '';
    }
    else{

    }
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
        this.navCtrl.setRoot(TaxiListPage, {user_id: this.chat_user_id});
      }
      //방장 다음 사람으로 옮기기
    }
  }

  ionViewDidLoad(){
    if(typeof(FCMPlugin) != 'undefined'){
      FCMPlugin.onNotification(function(data){
        if(data.wasTrapped){
          alert("background: ");
        }
        else{
          alert(data.sendername + ': ' + data.message);
        }
      });
    }
  }

  scrollBottom(){
    this.content.scrollToBottom();
  }

  show(index) {
    $(".user-name").eq(index).parent().siblings().children('.user-name').siblings().animate({width: 'hide'}, 70);
    $(".user-name").eq(index).siblings().animate({width: 'toggle'}, 70);
  }
}
