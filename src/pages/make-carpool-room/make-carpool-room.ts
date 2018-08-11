import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ChatRoomPage } from '../chatroom/chatroom';
import { AngularFireDatabase } from 'angularfire2/database';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';

@IonicPage()
@Component({
  selector: 'page-make-carpool-room',
  templateUrl: 'make-carpool-room.html',
})
export class MakeCarpoolRoomPage {

  selectDeparture: Object = {key:"한동대학교", value:""};
  depart: string = "";

  selectDestination: Object = {key:"포항역", value:""};
  arrive: string = "";

  maxPeople: string = "4"; 
  msg: string="";

  nowDate: string = this.dateServices.nowDate;
  nowTime: string = this.dateServices.nowTime;
  today: string = this.dateServices.today; //요일 표시
  bookingDate: string = this.nowDate;
  bookingTime: string = this.nowTime;
  price: string = "0";

  min: string = this.dateServices.min;
  max: string = this.dateServices.max;

  user_id: string; 

  spotList: Array<string> = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];;

  constructor(public alertCtrl: AlertController, public navParams: NavParams, public dateServices: DateProvider,
               public navCtrl:NavController, public af: AngularFireDatabase, public userServices: UsersProvider){
    this.user_id = this.userServices.getStudentID();
    dateServices.setNow();
    console.log('constructor makeRoom');
  }

  makeRoom(){
    this.depart = this.selectDeparture['key'] != '직접입력' ? this.selectDeparture['key'] : this.selectDeparture['value'];
    this.arrive = this.selectDestination['key'] != '직접입력' ? this.selectDestination['key'] : this.selectDestination['value'];
    
    //전달할 메시지
    this.msg = "<br>" + "출발지 : " + this.depart + "<br>" + 
              "도착지 : " + this.arrive + "<br>" + 
              "출발날짜 : " + this.bookingDate + "(" + this.dateServices.getKToday(this.bookingDate) + ")" + "<br>" + 
              "출발시간 : " + this.bookingTime + "<br>" +
              "최대탑승인원 : " + this.maxPeople + "명" + "<br>" +
              "가격 : " + this.price + "원 <br>" ;
    
    //지금 시간 보다 전 시간으로 예약하는 경우 처리
    if((this.nowDate+this.nowTime)>(this.bookingDate+this.bookingTime)){
      console.log("nowDate : " + this.nowDate+this.nowTime);
      console.log("bookingDate : " + this.bookingDate+this.bookingTime);
      console.log("Error");

      let alert = this.alertCtrl.create({
        message: "출발시간을 현재시간 이후로 입력하여 주세요.",
        buttons: [{
          text: '확인',
          handler: () => {
            console.log('Okay');
          }
        }]
      });
      alert.present();
    }
    else{
      //출발지와 목적지가 같을 경우 처리
      if(this.depart == this.arrive){
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
      }
      // input type 으로 입력을 받을 때 값을 입력하지 않는 경우 처리  
      else if(this.depart=="" || this.arrive==""){
        let alert = this.alertCtrl.create({
          message: "출발지 혹은 도착지를 입력하여 주세요.",
          buttons: [{
            text: '확인',
            handler: () => {
              console.log('Okay');
            }
          }]
        });
        alert.present();
      }
      else if(this.price == "" || this.maxPeople == "" || Number(this.price) < 0 || Number(this.maxPeople) < 2) {
        let alert = this.alertCtrl.create({
          message: "가격과 최대 탑승 인원을 정확히 입력하여 주세요.",
          buttons: [{
            text: '확인',
            handler: () => {
              console.log('Okay');
            }
          }]
        });
        alert.present();
      }
      else{
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
                console.log('데이타 시작');
                console.log(data);
                let roomObj: Object = { depart: this.depart,
                                        arrive: this.arrive,
                                        departDate: this.bookingDate,
                                        departTime: this.bookingTime,
                                        capacity: this.maxPeople,
                                        currentPeople: 1,
                                        price: this.price,
                                   
                                      };
                let chatRoomUrl = this.af.list('/carpoolChatrooms/'+this.bookingDate).push(roomObj);
                this.af.object(`/rideHistory/${this.userServices.getStudentID()}/${chatRoomUrl.key}`).set(roomObj).then(() => {
                  this.navCtrl.push(ChatRoomPage, {room: roomObj, roomKey: chatRoomUrl.key});
                });
              }
            }]
        });
        alert.present();
      }
    }
  }
  setDepartureDefault(){
    this.selectDeparture = {key:"한동대학교", value:""};
  }
  setDestinationDefault(){
    this.selectDestination = {key:"포항역", value:""};
  }
  swapPlace(){
    [this.selectDeparture, this.selectDestination] = [this.selectDestination, this.selectDeparture];
  }
}
