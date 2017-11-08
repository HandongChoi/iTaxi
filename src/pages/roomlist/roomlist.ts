import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-roomlist',
  templateUrl: 'roomlist.html'
})
export class RoomListPage {
  selectedItem: any;
  chatrooms: FirebaseListObservable<any[]>;

  user_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    this.user_id = prompt("Input ID");
    this.chatrooms = af.list('/chatrooms');
    // shows the list of participatable rooms
  }

  goChatroom(event, chatroom) {

    let chat_room_id_val = chatroom.$key;
    
    //participant array에 push
    // 참여자가 아니고, 인원 full 아니면 push
    // 참여자이면 그냥 enter
    // full 인원이면 deny
    
   this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chat_room_id_val, user_id: this.user_id});
    console.log("goChatroom at roomlist.ts");
  }

  createRoom(){
    let cur_datetime = new Date().toLocaleString();
    let user = this.user_id;
    let participants_list = [];
    participants_list.push(user);

    this.chatrooms.push(
      {
        departure: "yang deok",
        destination: "handong univ",
        datetime: cur_datetime,
        capacity: "4",
        car: "카렌스",
        host: user,
        participants: participants_list,
        price: "1000"
      }
    );
  }

}
