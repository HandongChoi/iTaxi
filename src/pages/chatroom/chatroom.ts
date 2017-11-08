import { Component, ViewChild } from '@angular/core';
import { NavController, Content, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html'
})
export class ChatRoomPage {
  @ViewChild(Content) content: Content;

  chats: FirebaseListObservable<any[]>;
  room: FirebaseListObservable<any[]>;

  chat_user_id: any;
  chat_content: any;
  chat_room_id: any;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, 
              public navParams: NavParams) {

    this.chat_room_id = navParams.data.chat_room_id;
    this.chat_user_id = navParams.data.user_id;

    this.chats = af.list(('/chats/'+ this.chat_room_id));
  }

  send(){
    if(this.chat_content != ''){
      this.chats.push({
        user_id: this.chat_user_id,
        content: this.chat_content,
        date_time: new Date().toLocaleString()
      });

      this.chat_content = '';
    }
    else{
      alert("Please input any text!");
    }
    console.log("send at chatroom.ts");
  }

  quit(){
    //this.chats.remove()
    alert('방에서 나가셨습니다.');
    console.log("quit at chatroom.ts");
  }

  scrollBottom(){
    this.content.scrollToBottom();
    console.log("scroolBottom at chatroom.ts");
  }
}
