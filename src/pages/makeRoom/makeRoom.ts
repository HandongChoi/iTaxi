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
  start2: string = "";
  arrive: string = "포항역";
  arrive2: string ="";
  start_list: Array<{start_list:string, value:string}>;
  arrive_list: Array<{arrive_list:string, value:string}>;
  swap: string ="";
  
  testDate: string = new Date().toISOString().substr(0, 16).replace('T', ' ');

  forDate: any = new Date();

  testYear: string = this.forDate.getFullYear();
  testMonth: string = this.addZ(this.forDate.getMonth()+1);
  testDay: string = this.addZ(this.forDate.getDate());

  test: string = this.testYear + "-" + this.testMonth + "-" + this.testDay;

  //nowDate: string = new Date().toISOString().substr(0, 10);

  nowDate: string = this.test;
  nowTime: string = this.addZ(this.forDate.getHours()) + ":" + this.addZ(this.forDate.getMinutes()); //이것도 slice로 구현해볼려고 하는데 안 된다.      
  
  bookingTime: string = this.nowTime;
  bookingDate: string = this.nowDate;  

  //1년치만 예약 가능하도록 만들었다.
  minYear: string = new Date().toISOString().substr(0, 10);
  maxYear: string = (this.forDate.getFullYear()+1) + "-" + this.addZ(this.forDate.getMonth()+1) + "-" + this.addZ(this.forDate.getDate());
  //getDate같은 것들은 1일을 1로 반환하기에 우리는 01로 고쳐줘야한다.(addZ의 역할.) ISOstring이 01의 형식으로 다 구성되어 있기 때문.
  
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

    this.arrive_list = [
      {arrive_list:'한동대학교', value:'한동대학교'},
      {arrive_list:'포항역', value:'포항역'},
      {arrive_list:'양덕', value:'양덕'},
      {arrive_list:'고속버스터미널', value:'고속버스터미널'},
      {arrive_list:'시외버스터미널', value:'시외버스터미널'},
      {arrive_list:'북부해수욕장', value:'북부해수욕장'},
      {arrive_list:'육거리',value:'육거리'},
      {arrive_list:'직접입력',value:this.arrive2},
    ];

    this.user_id = navParams.data.user_id; //이게 파라미터로 자꾸 받으면 중간에 데이터가 손실되지 않도록 유지시켜줘야 한다.
    this.user_id = "testing";

    console.log("min : " + this.minYear);
    console.log("max : " + this.maxYear);
    console.log("testDate : " + this.testDate);
    console.log("nowdate : " + this.nowDate);
    console.log("nowTime : " + this.nowTime);
  }

  addZ(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  showRadioAlert(){
    let alert = this.alertCtrl.create();
    if (this.bookingDate == this.nowDate && this.nowTime > this.bookingTime)
    {
      alert.setSubTitle('잘못된 시간입니다. 현재시간보다 뒤에 시간을 입력하여주세요.');
      alert.addButton({
        text: 'OK'
      })
    }

    else {
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
  
          //지금 시간 보다 전 시간으로 예약하는 경우 처리
          if((this.nowDate+this.nowTime)>(this.bookingDate+this.bookingTime)){
            console.log("nowDate : " + this.nowDate+this.nowTime);
            console.log("bookingDate : " + this.bookingDate+this.bookingTime);
            console.log("Error"); 
          }
          else{
            this.chatrooms = this.af.list('/chatrooms/' + this.nowDate);
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
    }

   

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

  startClick(){
    this.start = "한동대학교";
    this.start2 = "";
  }

  labelClick(){
    this.arrive = "한동대학교";
    this.arrive2 = "";
  }
  
  swap_position(){
    // arrive만 input 일 때,
    if (this.arrive == "직접입력" && this.start != "직접입력"){
      console.log("arrive 가 input 일 때")
      console.log("select 도착 : ",this.arrive,"input 도착 : ",this.arrive2)
      console.log("select 출발 : ",this.start,"input 출발 : ",this.start2)
      this.swap = this.start;
      this.start = "직접입력";
      this.start2 = this.arrive2
      this.arrive = this.swap;
    }

    // start만 input 일 때, 
    else if(this.start == "직접입력" && this.arrive != "직접입력"){
      console.log("start 가 input 일 때")
      console.log("select 도착 : ",this.arrive,"input 도착 : ",this.arrive2)
      console.log("select 출발 : ",this.start,"input 출발 : ",this.start2)
      this.swap = this.arrive;
      this.arrive = "직접입력"
      this.arrive2 = this.start2;
      this.start = this.swap;
    }
    
    // start, arrive 가 둘 다 input 일 때,
    else if(this.arrive == "직접입력" && this.start == "직접입력"){
      console.log("start, arrive 둘 다 input 일 때")
      console.log("select 도착 : ",this.arrive,"inpupt 도착 : ", this.arrive2)
      console.log("select 출발 : ",this.start,"input 출발 : ", this.start2)
      this.swap = this.start2;
      this.start2 = this.arrive2;
      this.arrive2 = this.swap;
    }
    // start, arrive 가 둘 다 select 일 때,
    else {
      console.log("start, arrive 가 둘 다 select 일 때")
      console.log("select 도착 : ",this.arrive,"input 도착 : ", this.arrive2)
      console.log("select 출발 : ",this.start,"input 출발 : ",this.start2)
      this.swap = this.start;
      this.start = this.arrive;
      this.arrive = this.swap; 
    }
  };
}