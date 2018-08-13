import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChatRoomPage } from '../chatroom/chatroom';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

@IonicPage()
@Component({
  selector: 'page-ride-history',
  templateUrl: 'ride-history.html',
})
export class RideHistoryPage {
  rideHistory: FirebaseListObservable<any[]>;
  history: string = "future";
  userID: string;
  taxiRooms: FirebaseListObservable<any[]>;
  carpoolRooms: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, 
              public userServices: UsersProvider, public alertCtrl: AlertController, public dateServices: DateProvider) {
    this.userID = this.userServices.userInfo['studentID'];
    this.taxiRooms = af.list('/rideHistory/' + this.userServices.userInfo['studentID'], {
      query: {
        orderByChild: 'transportType',
        equalTo: 'taxi'
      }
    });
    this.carpoolRooms = this.af.list('/rideHistory/' + this.userServices.userInfo['studentID'], {
      query: {
        orderByChild: 'transportType',
        equalTo: 'carpool'
      }
    });
    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
  }

  goChatroom(room) { this.navCtrl.push(ChatRoomPage, {room: room}); }
  
  /* 과거에 무슨 이유에서인지 썼는데 기억이 안남.
  ngOnDestroy(){ if (this.sub) this.sub.unsubscribe(); }
  */
}
