import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Content } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChatRoomPage } from '../../pages/chatroom/chatroom';
import { ListPage } from '../../pages/list/list';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

import { RoomsProvider } from '../../providers/rooms/rooms'

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  @ViewChild(Content) content: Content;
  rooms: FirebaseListObservable<Object[]>;
  nowDate: string;
  nowTime: string;
  public counter = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public menu: MenuController, public userServices: UsersProvider, private dateServices: DateProvider,
              public roomServices: RoomsProvider, public loadingCtrl:LoadingController) {
    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    
  }

  ionViewWillEnter() {
    this.dateServices.setNow();
    this.nowDate = this.dateServices.nowDate;
    this.nowTime = this.dateServices.nowTime;
    this.rooms = this.af.list('/rideHistory/' + this.userServices.userInfo['studentID'], {
      query:{
        startAt: this.dateServices.getYearMonthDayWithDash(),
        orderByChild : 'departDate'
      }
    })
    this.content.resize();
    this.menu.enable(true,'myMenu');
  }

  // ionViewDidLoad(){ console.log("ionViewDidLoad at main.ts"); }
  takeTaxi() { this.navCtrl.push(ListPage, {transportType: 'taxi'}); }
  takeCarpool() { this.navCtrl.push(ListPage, {transportType: 'carpool'}); }
  goChatroomPage(room){ this.navCtrl.push(ChatRoomPage, {room: room}); }
  
}

