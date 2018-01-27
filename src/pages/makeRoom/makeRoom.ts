import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ChatRoomPage } from '../chatroom/chatroom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

import { DatabaseQuery } from 'angularfire2/interfaces';

@Component({
  selector: 'page-make-room',
  templateUrl: 'makeRoom.html',
})

export class MakeRoomPage {
  start: Object = {key:"한동대학교", value:""};
  depart: string = "";

  arrive: Object = {key:"포항역", value:""};
  arrival: string = "";

  maxPeople: number = 4; 
  msg: string="";

  forDate: any = new Date();
  kDate: any = new Date();

  nowDate: string = this.dateServices.nowDate;
  nowTime: string = this.dateServices.nowTime;
  bookingDate: string = this.nowDate;
  bookingTime: string = this.nowTime;

  minYear: string = this.dateServices.minYear;
  maxYear: string = this.dateServices.maxYear;

  week: Array<string> = new Array('일','월','화','수','목','금','토');
  today: string = this.week[this.forDate.getDay()];
  
  chatrooms: FirebaseListObservable<any[]>;
  user_id: string; 

  spotList: Array<string> = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];;
  
  constructor(public alertCtrl: AlertController, public navParams: NavParams, public dateServices: DateProvider,
               public navCtrl:NavController, public af: AngularFireDatabase, public userServices: UsersProvider){
    this.user_id = this.userServices.getName();
  }

  showConfirmAlert(){
    this.depart = this.start['key'] != '직접입력' ? this.start['key'] : this.start['value'];
    this.arrival = this.arrive['key'] != '직접입력' ? this.arrive['key'] : this.arrive['value'];
    
    //전달할 메시지
    this.msg = "<br>" + "출발지 : " + this.depart + "<br>" + 
              "도착지 : " + this.arrival + "<br>" + 
              "출발날짜 : " + this.bookingDate + "(" + this.week[new Date(this.bookingDate).getDay()] + ")" + "<br>" + 
              "출발시간 : " + this.bookingTime + "<br>" +
              "최대탑승인원 : " + this.maxPeople + "명" + "<br>" ;
    
    //지금 시간 보다 전 시간으로 예약하는 경우 처리
    if((this.nowDate+this.nowTime)>(this.bookingDate+this.bookingTime)){
      console.log("nowDate : " + this.nowDate+this.nowTime);
      console.log("bookingDate : " + this.bookingDate+this.bookingTime);
      console.log("Error");
    } else{
      if(this.depart == this.arrival){
        let alert = this.alertCtrl.create({
          message: "출발지와 도착지를 다르게 입력하여 주세요.",
          buttons: [{
            text: '확인',
            handler: () => {
              console.log('Okay');
            }
          }]
        });
        alert.present();     
      } else{
        let alert = this.alertCtrl.create({
          title: '방만들기',
          subTitle: '방을 만드시겠습니까?',  
          message: this.msg,
          cssClass: 'custom-alrt',
          buttons: [
            { text: '취소',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            { text: '확인',
              handler: data => {
                let participants_list = [];
                participants_list.push(this.user_id);
                this.chatrooms = this.af.list('/chatrooms/' + this.bookingDate);
                let url = this.chatrooms.push(
                    { departure: this.start,
                      destination: this.arrive,
                      depart_date: this.bookingDate,
                      depart_time: this.bookingTime,
                      capacity: this.maxPeople,
                      currentPeople: 4-this.maxPeople,
                      host: this.user_id,
                      participants: participants_list,
                    }
                );
                console.log('Okay');
                this.navCtrl.setRoot(ChatRoomPage, {chat_room_id:url.key, bookingDate:this.bookingDate, user_id: this.user_id, whichPage: "makeRoom"});
              }
            }]
        });
        alert.present();
      }
    }
  }

  getKday(){
    this.today = this.week[new Date(this.bookingDate).getDay()];
  }

  startClick(){
    this.start = {key:"한동대학교", value:""};
  }

  labelClick(){
    this.arrive = {key:"포항역", value:""};
  }

  swap_position(){
    [this.start, this.arrive] = [this.arrive, this.start];
  }
    
}
