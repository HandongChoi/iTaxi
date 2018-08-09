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
  departure: string = "";
  selectDestination: Object = {key:"포항역", value:""};
  destination: string = "";
  maxPeople: string = "4"; 
  msg: string="";

  nowDate: string = this.dateServices.nowDate;
  nowTime: string = this.dateServices.nowTime;
  today: string = this.dateServices.today; //요일 표시
  bookingDate: string = this.nowDate;
  bookingTime: string = this.nowTime;

  min: string = this.dateServices.min;
  max: string = this.dateServices.max;

  userID: string; 

  spotList: Array<string> = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];;

  constructor(public alertCtrl: AlertController, public navParams: NavParams, public dateServices: DateProvider,
               public navCtrl:NavController, public af: AngularFireDatabase, public userServices: UsersProvider){
    this.userID = this.userServices.getEmail();
    dateServices.setNow();
  }

  makeRoom(){
    this.departure = this.selectDeparture['key'] != '직접입력' ? this.selectDeparture['key'] : this.selectDeparture['value'];
    this.destination = this.selectDestination['key'] != '직접입력' ? this.selectDestination['key'] : this.selectDestination['value'];
    
    //전달할 메시지
    this.msg = "<br>출발지 : " + this.departure + "<br>" + 
              "도착지 : " + this.destination + "<br>" + 
              "출발날짜 : " + this.bookingDate + "(" + this.dateServices.getKToday(this.bookingDate) + ")" + "<br>" + 
              "출발시간 : " + this.bookingTime + "<br>" +
              "탑승허용인원 : " + this.maxPeople + "명" + "<br>" ;
    
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
      if(this.departure == this.destination){
        let alert = this.alertCtrl.create({
          message: "출발지와 도착지를 다르게 입력하여 주세요.",
          buttons: [{
            text: '확인',
            handler: () => {}
          }]
        });
        alert.present();
      //input type 으로 입력을 받을 때 값을 입력하지 않는 경우 처리  
      }else if(this.departure=="" || this.destination==""){
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
              handler: data => {
                let room: Object = { departure: this.departure,
                                        destination: this.destination,
                                        departureDate: this.bookingDate,
                                        departureTime: this.bookingTime,
                                        capacity: this.maxPeople,
                                        currentPeople: 1,
                                        hostName: this.userServices.getName(),
                                        host: this.userID,
                                        participants: [this.userID],
                                        devTokens:[this.userServices.getDevToken()]
                                      };
                                      // object이기 때문에 address가 전달되지 않는다는 문제가 생김
                
                                      //af list와 object의 차이가 뭐길래 따로 설정했지?
                                      //내가 봤을 때에는 밑에 Url에 대한 것도 object set으로 다 정해야 되지 않나?
                                      //list는 말 그대로 list기준으로 작동하는 것 같은데.
                let chatRoomUrl = this.af.list('/chatrooms/'+this.bookingDate).push(room);
                console.log(chatRoomUrl);
                let test = this.af.object(`/rideHistory/${this.userServices.getUID()}/${chatRoomUrl.key}`).set(room);
                this.navCtrl.setRoot(ChatRoomPage, {room: room, roomKey: chatRoomUrl.key});
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
  setPeople(num) {
    this.maxPeople = String(num);
  }
}
