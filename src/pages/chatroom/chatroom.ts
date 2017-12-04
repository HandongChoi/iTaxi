import { Component, ViewChild } from '@angular/core';
import { NavController, Content, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { TaxiListPage } from '../../pages/taxi-list/taxi-list';

declare var FCMPlugin;

@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html'
})
export class ChatRoomPage {

  @ViewChild(Content) content: Content;
  
  chats: FirebaseListObservable<any[]>;
  room: FirebaseListObservable<any[]>;
  room_object:FirebaseObjectObservable<any[]>;
  
  chat_user_id: any;
  chat_content: any;
  chat_room_id: any;
  bookingDate: String;

  room_depart: String;
  room_dest: String;
  room_capacity: String;
  room_depart_date: String;
  room_depart_time: String;
  room_host: String;
  room_participants:  Array<String> = [];

  page_info: String;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams) {

    this.bookingDate = navParams.data.bookingDate;
    this.chat_room_id = navParams.data.chat_room_id;
    this.chat_user_id = navParams.data.user_id;
    
    console.log('/chatrooms/' + this.bookingDate + '/' + this.chat_room_id);
    this.room = af.list('/chatrooms/' + this.bookingDate + '/' + this.chat_room_id);
    this.chats = af.list(('/chats/'+ this.chat_room_id));
    this.room_object = af.object('/chatrooms/' + this.bookingDate + '/' + this.chat_room_id);
    this.room.forEach(data =>{

      this.room_capacity = data[0].$value;
      this.room_depart_date = data[1].$value;
      this.room_depart_time = data[2].$value;
      this.room_depart = data[3].$value;
      this.room_dest = data[4].$value;
      this.room_host = data[5].$value;
      this.room_participants = data[6];
      
    });
  }

  goBack(){
      this.navCtrl.setRoot(TaxiListPage);
  }

  send(){
    if(this.chat_content !== ''){
      this.chats.push({
        user_id: this.chat_user_id,
        content: this.chat_content,
        date_time: new Date().toLocaleString()
      });

      this.chat_content = '';
    }
    else{

    }
  }

  quit(){
    let new_participants: Array<String> =[];
    console.log(this.chat_user_id, this.room_participants);

    this.room_participants.forEach(data =>{
      if(data !== this.chat_user_id)
        new_participants.push(data);
    });

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
    }// 방장이 아닌 다른 사람이 나갈 경우
    else{
      //방장이고, 방에 사람이 없을 때
      if(this.room_participants.length == 1)
        this.room_object.remove();
      
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
      }
      this.navCtrl.setRoot(TaxiListPage);
    }
    //방장 다음 사람으로 옮기기
  }

  ionViewDidLoad(){
    FCMPlugin.onNotification(function(data){
      if(data.wasTrapped){
        alert("background: ");
      }
      else{
        alert("foreground: ");
      }
    });
  }

  scrollBottom(){
    this.content.scrollToBottom();
  }
}
