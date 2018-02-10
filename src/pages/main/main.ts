import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import {ChatRoomPage} from '../../pages/chatroom/chatroom';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  user_id: any;
  roomObj: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
     public menu: MenuController, public userServices: UsersProvider, private dateServices: DateProvider) {

    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    this.menu=menu;
    this.menu.enable(true,'myMenu');

    //일단 지금 user의 정보를 email로 받아오고 있다.
    this.user_id = this.userServices.getEmail();
    console.log("Main user : "+this.user_id);
    this.roomObj = af.list('/rideHistory/' + this.userServices.getUID(), {
      query:{
        startAt: this.dateServices.getYearMonthDayWithDash(),
        orderByChild : 'departure_date'
      }
    });
  }


  ioniViewDidLoad(){
    console.log("ionViewDidLoad at main.ts");
  }

  setPage(page){
    this.navCtrl.setRoot(page);
  }

  goChatroomPage(room){
    this.navCtrl.setRoot(ChatRoomPage, {chat_room_id:room.$key, bookingDate:room.departure_date, user_id: this.user_id, roomObj: room});
  }
}
