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
  sub: any;
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

  goChatroom(room) {
    //여기서 헷갈리는게 라이드 히스토리의 룸과 본래 채팅방이 다를텐데 그거 어떻게 처리하지... 생각해보자..
    //당장 생각나는 로직은 여기서는 룸에 대한 정보를 담고 채팅방에 들어갈때는 원본 채팅방으로 간다.
    //아니면 여기 정보도 냅두면서 방 정보가 바뀔 때에는 항상 라이드 히스토리도 동일하게 바꾸는 로직 생가하자.
    this.navCtrl.push(ChatRoomPage, {room: room});
  }
  
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
