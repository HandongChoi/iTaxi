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
  room_depart: string;
  room_dest: string;
  room_capacity: string;
  room_depart_date: string;
  room_depart_time: string;
  room_host: string;
  room_participants:  Array<string> = [];
  room_month: string;
  room_day: string;
  room_hour: string;
  room_minute:string;
  roomKey: string;

  isHost: boolean;

  displayDate: string;
  displayTime: string;

  page_info: string;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider) {

    console.log('constructor chatroom');  
      
    this.bookingDate = navParams.data.bookingDate;
    this.chat_room_id = navParams.data.chat_room_id;
    this.chat_user_id = navParams.data.user_id;
    
    af.object('/chatRooms/' + this.bookingDate + '/' + this.chat_room_id).subscribe(data=>{
      this.roomObj = data;
      //this.roomServices.setRoomInfo(data);
      //roobObj에 departureDate를 넣은 것은 코드를 좀 더 readable하게 만들기 위해서다. this.bookingDate써도 무방.
      this.displayDate = this.dateServices.getKMonthDay(this.roomObj['departureDate']);
      this.displayTime = this.roomObj['departureTime'];

      //내가 방장 주인인지 아닌지 확인
      if(this.roomObj['host'] === this.chat_user_id)
        this.isHost = true;
      else
        this.isHost = false;
    });
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
        dateKey: this.roomKey
      });

      this.chat_content = '';
    }
    else{

    }
  }

  quit(){
    let new_participants: Array<String> =[];
    console.log("quit(): ", this.room_participants);
    if(this.room_participants){
      this.room_participants.forEach(data =>{
        if(data !== this.chat_user_id)
          new_participants.push(data);
      });

      console.log(new_participants);

      if(this.chat_user_id !== this.room_participants[0]){

        this.room_object.update({
          capacity: this.room_capacity,
          depart_date: this.room_depart_date,
          depart_time: this.room_depart_time,
          departure: this.room_depart,
          destination: this.room_dest,
          host: this.room_host,
          participants: new_participants
        });

        this.rideHistory.remove();
        this.navCtrl.setRoot(TaxiListPage, {user_id: this.chat_user_id});
      }// 방장이 아닌 다른 사람이 나갈 경우
      else{
        //방장이고, 방에 사람이 없을 때
        console.log(this.room_participants);
        if(this.room_participants.length === 1){
          this.room_object.remove();
          this.rideHistory.remove();
        }
        else if(this.room_participants.length > 1){
          this.room_object.update({
            capacity: this.room_capacity,
            depart_date: this.room_depart_date,
            depart_time: this.room_depart_time,
            departure: this.room_depart,
            destination: this.room_dest,
            host: new_participants[0],
            participants: new_participants
          });

          this.rideHistory.remove();
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
