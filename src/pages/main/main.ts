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

  rooms: Array<Object> = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public menu: MenuController, public userServices: UsersProvider, private dateServices: DateProvider) {
    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    this.menu.enable(true,'myMenu');
    //token setup
    this.storetoken();
    this.dateServices.setNow();
    
    //main에서 토큰 저장하고 유저 정보를 완전 다 초기화하자.

    //app.component.ts에서의 로직과 동일하다. 로직을 그 날 기준보다는 기준 자체 모두 보여주고 D-x를 붙여도 좋을 것 같다.
    /*
    this.af.list('/rideHistory/' + this.userServices.getStudentID(), {
      query:{
        startAt: this.dateServices.getYearMonthDayWithDash(),
        orderByChild : 'departDate'
      }
    }).subscribe(data => {
      //출발 날짜 기준으로 내가 탈 티켓들이 쭉 나온다. 만약에 모든 시간 상관없이 보려면 if문 제거하면된다.
      data.forEach(room => {
        if (room.departTime > this.dateServices.nowTime) {
          this.rooms.unshift(room);
        }
      })
    });
    */
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad at main.ts");
  }

  takeTaxi() { this.navCtrl.setRoot(TaxiListPage, {transportType: 'taxi'}); }
  takeCarpool() { this.navCtrl.setRoot(TaxiListPage, {transportType: 'carpool'}); }

  goChatroomPage(room){ this.navCtrl.push(ChatRoomPage, {room: room}); }

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
