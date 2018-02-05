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
  selectDeparture: Object = {key:"한동대학교", value:""};
  departure: string = "";

  selectDestination: Object = {key:"포항역", value:""};
  destination: string = "";

  maxPeople: number = 4; 
  msg: string="";

  nowDate: string = this.dateServices.nowDate;
  nowTime: string = this.dateServices.nowTime;
  today: string = this.dateServices.today; //요일 표시
  bookingDate: string = this.nowDate;
  bookingTime: string = this.nowTime;

  min: string = this.dateServices.min;
  max: string = this.dateServices.max;

  user_id: string; 

  spotList: Array<string> = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];;
  
  constructor(public alertCtrl: AlertController, public navParams: NavParams, public dateServices: DateProvider,
               public navCtrl:NavController, public af: AngularFireDatabase, public userServices: UsersProvider){
    this.user_id = this.userServices.getName();
    console.log('constructor makeRoom');
  }

  makeRoom(){
    this.departure = this.selectDeparture['key'] != '직접입력' ? this.selectDeparture['key'] : this.selectDeparture['value'];
    this.destination = this.selectDestination['key'] != '직접입력' ? this.selectDestination['key'] : this.selectDestination['value'];
    
    //전달할 메시지
    this.msg = "<br>" + "출발지 : " + this.departure + "<br>" + 
              "도착지 : " + this.destination + "<br>" + 
              "출발날짜 : " + this.bookingDate + "(" + this.dateServices.getKToday(this.bookingDate) + ")" + "<br>" + 
              "출발시간 : " + this.bookingTime + "<br>" +
              "최대탑승인원 : " + this.maxPeople + "명" + "<br>" ;
    
    //지금 시간 보다 전 시간으로 예약하는 경우 처리
    if((this.nowDate+this.nowTime)>(this.bookingDate+this.bookingTime)){
      let alert = this.alertCtrl.create({
        message: "현재 시간 이후로 예약해 주시기 바랍니다.",
        buttons: [{
          text: '확인'
        }]
      });
      alert.present(); 
    } else{
      //출발지와 목적지가 같을 경우 처리
      if(this.departure == this.destination){
        let alert = this.alertCtrl.create({
          message: "출발지와 도착지를 다르게 입력하여 주세요.",
          buttons: [{
            text: '확인'
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
              handler: () => {
                let roomObj: Object = { departure: this.departure,
                                        destination: this.destination,
                                        departureDate: this.bookingDate,
                                        departureTime: this.bookingTime,
                                        capacity: this.maxPeople,
                                        currentPeople: 1,
                                        host: this.userServices.getEmail(),
                                        participants: [this.userServices.getEmail()],
                                        full: false,
                                      };
                // firebase 들어갈때에는 '.', '#', '$', '[', ']' 가 못들어감으로 UID로 전부 넣는걸로 한다. 나머지는 읽기 좋게 이메일로.
                let chatRoomUrl = firebase.database().ref('/chatRooms/'+this.bookingDate).push(roomObj);
                firebase.database().ref('/rideHistory/'+this.userServices.getUID()+'/'+chatRoomUrl.key).set(roomObj);
                firebase.database().ref('/participants/'+chatRoomUrl.key).set([this.userServices.getEmail()]);
                this.navCtrl.setRoot(ChatRoomPage, {roomObj: roomObj, user_id: this.user_id});
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
