import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChatRoomPage } from '../chatroom/chatroom';

import { UsersProvider } from '../../providers/users/users';
import { StringProvider } from '../../providers/strings/strings';

@IonicPage()
@Component({
  selector: 'page-ride-history',
  templateUrl: 'ride-history.html',
})
export class RideHistoryPage {

  rideHistory: FirebaseListObservable<any[]>;

  user_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, 
              public userServices: UsersProvider, private stringProvider: StringProvider) {

    this.user_id = this.userServices.getEmail();
    this.rideHistory = af.list('/rideHistory/'+ this.userServices.getUID() + '/');
  }

  goChatroom(room_object) {
    this.navCtrl.setRoot(ChatRoomPage, {roomObj: room_object, bookingDate: room_object.departure_date, user_id: this.user_id, chat_room_id: room_object.$key});
  }
}
