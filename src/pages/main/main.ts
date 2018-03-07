import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public menu: MenuController, public userServices: UsersProvider, private dateServices: DateProvider) {
    console.log("constructure Main");
    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    this.menu.enable(true,'myMenu');

    this.storetoken();
    //token setup

    //일단 지금 user의 정보를 email로 받아오고 있다.
    this.user_id = this.userServices.getEmail();
    this.dateServices.setNow();
    console.log("Main user : "+this.user_id);
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
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad at main.ts");
  }

  TaxiListPage() { this.navCtrl.setRoot(TaxiListPage); }
  CarpoolListPage() { this.navCtrl.setRoot(CarpoolListPage); }

  goChatroomPage(room){
    this.navCtrl.setRoot(ChatRoomPage, {room: room});
  }

  storetoken(){
    this.tokenSetup().then((token) => { 
      this.userServices.setDevToken(token);
    });
  }
  
  tokenSetup(){
    var promise = new Promise((resolve, reject)=>{
      if(typeof(FCMPlugin) !== 'undefined'){
        FCMPlugin.getToken(function(token){
          resolve(token);
        }, (err)=>{
          reject(err);
        });
      }
    });
    return promise;
  }
}
