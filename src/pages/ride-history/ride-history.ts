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

  userID: string;
  sub: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, 
              public userServices: UsersProvider, public alertCtrl: AlertController, public dateServices: DateProvider) {
    this.userID = this.userServices.getStudentID();
    this.rideHistory = af.list('/rideHistory/'+ this.userServices.getStudentID());

    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
  }

  goChatroom(room_object) {
    let subb;
    if (room_object.transportType == "carpool") {
      subb = this.af.object(`/carpoolChatrooms/${room_object['departDate']}/${room_object.$key}`);
    } else if (room_object.transportType == "taxi") {
      subb = this.af.object(`/taxiChatrooms/${room_object['departDate']}/${room_object.$key}`);
    }

    if (subb) {
      this.sub = subb.subscribe(data => {
        if ("departDate" in data) {
          this.navCtrl.push(ChatRoomPage, {room: room_object});
        } else {
          let alert = this.alertCtrl.create({
            message: "이미 삭제된 방입니다.",
            buttons: [{
              text: '확인',
            }]
          });
          alert.present();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
