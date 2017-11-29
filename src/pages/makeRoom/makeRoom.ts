import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ChatRoomPage } from '../chatroom/chatroom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  templateUrl: 'makeRoom.html',
})

export class MakeRoomPage {
  start: string = "한동대학교";
  start2: string = ""
  arrive: string = "포항역";
  arrive2: string ="";
  start_list: Array<{start_list:string, value:string}>;
  swap: string ="";
  
  
  forDate: any = new Date();
  nowDate: string = this.forDate.getFullYear() + "-" + (this.forDate.getMonth()+1) + "-" + this.forDate.getDate();
  nowTime: string = this.forDate.getHours() + ":" + this.forDate.getMinutes();       
  
  bookingTime: string;
  bookingDate: string; 

  //1년치만 예약 가능하도록 만들었다.
  minYear: string = this.forDate.getFullYear() + "-" + (this.forDate.getMonth()+1) + "-" + this.forDate.getDate();
  maxYear: string = (this.forDate.getFullYear()+1) + "-" + (this.forDate.getMonth()+1) + "-" + this.forDate.getDate();

  chatrooms: FirebaseListObservable<any[]>;
  user_id: string;    

  constructor(public alertCtrl: AlertController, public navParams: NavParams,
               public navCtrl:NavController, public af: AngularFireDatabase){
    this.start_list = [
      {start_list:'한동대학교', value:'한동대학교'},
      {start_list:'포항역', value:'포항역'},
      {start_list:'양덕', value:'양덕'},
      {start_list:'고속버스터미널', value:'고속버스터미널'},
      {start_list:'시외버스터미널', value:'시외버스터미널'},
      {start_list:'북부해수욕장', value:'북부해수욕장'},
      {start_list:'육거리',value:'육거리'},
      {start_list:'직접입력',value:this.start2},
    ];
    this.user_id = navParams.data.user_id;
  }

  showRadioAlert(){
    let alert = this.alertCtrl.create();
    alert.setTitle('탑승인원');
    alert.addInput({
      type: 'radio',
      label: '1명',
      value: '1',
      checked: true,
    });
    alert.addInput({
      type: 'radio',
      label: '2명',
      value: '2',
    });
    alert.addInput({
      type: 'radio',
      label: '3명',
      value: '3',
    });
    alert.addInput({
      type: 'radio',
      label: '4명',
      value: '4',
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if (this.arrive2)
            this.arrive = this.arrive2;

        let participants_list = [];
        participants_list.push(this.user_id);
        let url;

        console.log("Check : " + this.bookingTime);

        //지금 시간 보다 전 시간으로 예약하는 경우 처리
        if((this.nowDate+this.nowTime)>(this.bookingDate+this.bookingTime)){
          console.log("Error"); 
        }
        else{
          this.chatrooms = this.af.list('/chatrooms/' + this.bookingDate);
          url = this.chatrooms.push(
              {
                  departure: this.start,
                  destination: this.arrive,
                  depart_time: this.bookingTime,
                  depart_date: this.bookingDate,
                  capacity: data,
                  host: this.user_id,
                  participants: participants_list
              }
          );
        this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: url.key, user_id: this.user_id});
        }
      }
    });
    alert.present();
    console.log("showRadioAlert at makeRoom.ts");
  };

  showPeopleAlert(){
    let alert = this.alertCtrl.create({
      cssClass:'custom-alert',
      buttons:[
        {
          cssClass:"people-button",                 
        },
        {
          cssClass:"people-two-button",
        },
        {
          cssClass:"people-three-button",
        },
        {
          cssClass:"people-four-button",
        },
      ]
          
      });
      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          if (this.arrive2)
              this.arrive = this.arrive2;
  
          let participants_list = [];
          participants_list.push(this.user_id);
          let url;
          this.chatrooms = this.af.list('/chatrooms/' + this.nowDate); //이 부분 날짜 수정
  
          url = this.chatrooms.push(
              {
                  departure: this.start,
                  destination: this.arrive,
                  depart_time: this.nowTime,
                  depart_date: this.nowDate,
                  capacity: 3, //여기 해결하기.
                  host: this.user_id,
                  participants: participants_list
              }
          );
          this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: url.key, user_id: this.user_id});  
        }
      });
      alert.setTitle('탑승인원');
      alert.present();
      console.log("showPeopleAlert at makeRoom.ts");
  };

  labelClick(){
    this.arrive = "한동대학교";
  }

  swap_position(){
    if (this.arrive2){
      this.swap = this.start;
      this.start2 = this.arrive2;
      this.arrive2 = this.swap;}

    else if(this.start2){
      this.swap = this.arrive;
      this.arrive2 = this.start2;
      this.start2 = this.swap;}
    /*
    else if(this.arrive2 && this.start2){
      this.swap = this.arrive2;
      this.arrive2 = this.start2;
      this.start2 = this.arrive2;
    }*/
    this.swap = this.start;
    this.start = this.arrive;
    this.arrive = this.swap; 
  };
}