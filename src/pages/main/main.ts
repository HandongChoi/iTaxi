import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { ChatRoomPage } from '../../pages/chatroom/chatroom';
import { TaxiListPage } from '../../pages/taxi-list/taxi-list';
import { CarpoolListPage } from '../../pages/carpool-list/carpool-list';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

declare var FCMPlugin;

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {

  user_id: any;
  roomObj: Array<Object> = [];
  
  constructor(private navCtrl: NavController, private af: AngularFireDatabase,
              private menu: MenuController, private userServices: UsersProvider,
              private dateServices: DateProvider) {
    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    menu.enable(true,'myMenu');
    dateServices.setNow();

    af.list(`/rideHistory/${this.userServices.getUID()}`, ref => 
      ref.orderByChild('departure_date').startAt(dateServices.getYearMonthDayWithDash())
    ).valueChanges().forEach(item => {
      console.log("Main.ts item: " + item);
    });

    /*
    this.af.list('/rideHistory/' + this.userServices.getUID(), {
      query:{
        startAt: this.dateServices.getYearMonthDayWithDash(),
        orderByChild : 'departure_date'
      }
    }).subscribe(data => {
      data.forEach(item => {
        if (item.departure_time > this.dateServices.nowTime) {
          console.log("asd", item)
          this.roomObj.unshift(item);
        }
      })
    });
    */
  }

  TaxiListPage() { this.navCtrl.setRoot(TaxiListPage); }
  CarpoolListPage() { this.navCtrl.setRoot(CarpoolListPage); }

  goChatroomPage(room){
    this.navCtrl.setRoot(ChatRoomPage, {room: room});
  }
}
