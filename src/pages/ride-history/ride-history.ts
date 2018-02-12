import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChatRoomPage } from '../chatroom/chatroom';

import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-ride-history',
  templateUrl: 'ride-history.html',
})
export class RideHistoryPage {

  rideHistory: FirebaseListObservable<any[]>;

  user_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, 
              public userServices: UsersProvider, public alertCtrl: AlertController) {

    this.user_id = this.userServices.getEmail();
    this.rideHistory = af.list('/rideHistory/'+ this.userServices.getUID() + '/');
  }

  goChatroom(room_object) {
    this.af.object(`/rideHistory/${room_object['departure_date']}/${room_object.$key}`).subscribe(data => {
      if (data.$value) {
        this.navCtrl.setRoot(ChatRoomPage, {room: room_object});
      }
      else {
        let alert = this.alertCtrl.create({
          message: "이미 삭제된 방입니다.",
          buttons: [{
            text: '확인',
          }]
        });
        alert.present();
      }
    })
  }
}
