import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ChatRoomPage } from '../chatroom/chatroom';
import { AngularFireDatabase } from 'angularfire2/database';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

@IonicPage()
@Component({
  selector: 'page-make-room',
  templateUrl: 'makeRoom.html',
})

export class MakeRoomPage {
  
  selectDeparture: Object = {key:"한동대학교", value:""};
  depart: string = "";
  selectDestination: Object = {key:"포항역", value:""};
  arrive: string = "";
  maxPeople: string = "4";
  price: string = "0"; 
  msg: string="";

  nowDate: string = this.dateServices.nowDate;
  nowTime: string = this.dateServices.nowTime;
  today: string = this.dateServices.today; //요일 표시
  bookingDate: string = this.nowDate;
  bookingTime: string = this.nowTime;

  min: string = this.dateServices.min;
  max: string = this.dateServices.max;

  userID: string;
  transportType: string;

  spotList: Array<string> = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];;

  constructor(public alertCtrl: AlertController, public navParams: NavParams, public dateServices: DateProvider,
               public navCtrl:NavController, public af: AngularFireDatabase, public userServices: UsersProvider){
    this.dateServices.setNow();
    this.userID = this.userServices.userInfo['studentID'];
    this.transportType = this.navParams.data.transportType;
  }

  makeRoom(){
    this.depart = this.selectDeparture['key'] != '직접입력' ? this.selectDeparture['key'] : this.selectDeparture['value'];
    this.arrive = this.selectDestination['key'] != '직접입력' ? this.selectDestination['key'] : this.selectDestination['value'];
    
    //전달할 메시지
    this.msg = "<br>출발지 : " + this.depart + "<br>" + 
              "도착지 : " + this.arrive + "<br>" + 
              "출발날짜 : " + this.bookingDate + "(" + this.dateServices.getKToday(this.bookingDate) + ")" + "<br>" + 
              "출발시간 : " + this.bookingTime + "<br>" +
              "탑승모집인원 : " + this.maxPeople + "명" + "<br>" ;
    
    //지금 시간 보다 전 시간으로 예약하는 경우 처리
    if((this.nowDate+this.nowTime)>(this.bookingDate+this.bookingTime)){
      let alert = this.alertCtrl.create({
        message: "출발시간을 현재시간 이후로 입력하여 주세요.",
        buttons: [{
          text: '확인',
          handler: () => {}
        }]
      });
      alert.present();
    }else{
      //출발지와 목적지가 같을 경우 처리
      if(this.depart == this.arrive){
        let alert = this.alertCtrl.create({
          message: "출발지와 도착지를 다르게 입력하여 주세요.",
          buttons: [{
            text: '확인',
            handler: () => {}
          }]
        });
        alert.present();
      //input type 으로 입력을 받을 때 값을 입력하지 않는 경우 처리  
      }else if(this.depart=="" || this.arrive==""){
        let alert = this.alertCtrl.create({
          message: "출발지 혹은 도착지를 입력하여 주세요.",
          buttons: [{
            text: '확인',
            handler: () => {}
          }]
        });
        alert.present();
      }else{
        let alert = this.alertCtrl.create({
          title: '방만들기',
          subTitle: '아래 내용이 맞습니까?',  
          message: this.msg,
          cssClass: 'custom-alrt',
          buttons: [
            { text: '취소',
              role: 'cancel',
              handler: () => {}
            },
            { text: '확인',
              handler: () => {
                let room: Object = { depart: this.depart,
                                     arrive: this.arrive,
                                     departDate: this.bookingDate,
                                     departTime: this.bookingTime,
                                     capacity: this.maxPeople,
                                     currentPeople: 1,
                                     hostName: this.userServices.userInfo['korName'],
                                     host: this.userID,
                                     transportType: this.transportType,
                                     participants: [this.userID],
                                     devTokens:[this.userServices.userInfo['devToken']]
                                   };

                let chatRoomUrl = this.af.list(`/${room['transportType']}Chatrooms/${this.bookingDate}`).push(room);
                this.af.object(`/rideHistory/${this.userServices.userInfo['studentID']}/${chatRoomUrl.key}`).set(room);
                this.navCtrl.setRoot(ChatRoomPage, {room: room, roomKey: chatRoomUrl.key});
              }
           }]  
       });
      alert.present();
    }
    }
  }
  setDepartureDefault(){ this.selectDeparture = {key:"한동대학교", value:""}; }
  setDestinationDefault(){ this.selectDestination = {key:"포항역", value:""}; }
  swapPlace(){ [this.selectDeparture, this.selectDestination] = [this.selectDestination, this.selectDeparture]; }
  setPeople(num) { this.maxPeople = String(num+1); }
}
