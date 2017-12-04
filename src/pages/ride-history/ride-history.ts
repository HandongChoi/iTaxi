import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {ChatRoomPage} from '../chatroom/chatroom';

/**
 * Generated class for the RideHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride-history',
  templateUrl: 'ride-history.html',
})
export class RideHistoryPage {
  
  rideHistory: FirebaseListObservable<any[]>;
  
  user_id: string;
  nowDate: string = new Date().toISOString().substr(0, 10);
  chatroomData: Array<any[]> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.user_id = this.navParams.data.user_id;
    console.log(this.user_id);
    this.rideHistory = af.list('/rideHistory/'+ this.stringParser(this.user_id));

    this.rideHistory.$ref.orderByChild('roomDate').on('child_added', data =>{
        this.chatroomData.push(data.val());
      /*let chatroom = this.af.list('/chatrooms/' + data.val().roomDate + '/' + data.val().roomId);

      chatroom.subscribe(chatroomData => {
        this.chatroomData = chatroomData;
        console.log(this.chatroomData);
      });
      */

      console.log(this.chatroomData);
    });
  }

  stringParser(sentence){
    let parsedID = sentence.replace('@', '');
    parsedID = parsedID.replace('.', '');
    
    return parsedID;
  }

  goChatroom(chatroomDatum_temp) {
    let chat_room_id_val = chatroomDatum_temp.roomId;
    let bookingDate_val= chatroomDatum_temp.roomDate;

    //participant array에 push
    // 참여자가 아니고, 인원 full 아니면 push
    // 참여자이면 그냥 enter
    // full 인원이면 deny  
    
    
    this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chat_room_id_val, bookingDate: bookingDate_val, user_id: this.user_id});
  }
}
