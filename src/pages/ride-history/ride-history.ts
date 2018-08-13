import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChatRoomPage } from '../chatroom/chatroom';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms'

@IonicPage()
@Component({
  selector: 'page-ride-history',
  templateUrl: 'ride-history.html',
})
export class RideHistoryPage {
  rideHistory: FirebaseListObservable<Object[]>;
  history: string = "future";
  userID: string;
  taxiRooms: FirebaseListObservable<any[]>;
  carpoolRooms: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, 
              public userServices: UsersProvider, public alertCtrl: AlertController, public dateServices: DateProvider,
              public roomServices: RoomsProvider,) {
    this.dateServices.setNow();
    this.userID = this.userServices.userInfo['studentID'];
    this.taxiRooms = this.roomServices.getRideHistoryRooms('taxi');
    this.carpoolRooms = this.roomServices.getRideHistoryRooms('carpool');
  }

  goChatroom(room) { this.navCtrl.push(ChatRoomPage, {room: room}); }
  
  /* 과거에 무슨 이유에서인지 썼는데 기억이 안남.
  ngOnDestroy(){ if (this.sub) this.sub.unsubscribe(); }
  */
}
