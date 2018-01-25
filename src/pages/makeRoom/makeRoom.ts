import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ChatRoomPage } from '../chatroom/chatroom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-make-room',
  templateUrl: 'makeRoom.html',
})

export class MakeRoomPage {
  start: string = "한동대학교";
  start2: string = "";
  depart: string = "";

  arrive: string = "포항역";
  arrive2: string ="";
  arrival: string = "";

  start_list: Array<{start_list:string, value:string}>;
  arrive_list: Array<{arrive_list:string, value:string}>;

  swap: string ="";

  maxPeople: string = "4"; 

  msg: string="";

  forDate: any = new Date();
  kDate: any = new Date();

  testYear: string = this.forDate.getFullYear();
  testMonth: string = this.addZ(this.forDate.getMonth()+1);
  testDay: string = this.addZ(this.forDate.getDate());

  test: string = this.testYear + "-" + this.testMonth + "-" + this.testDay;

  //이전 방식에서 해가 바뀔 때 null 오류가 발생하여 수정.
  //nowDate: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
  nowDate: string = this.test;
  nowTime: string = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);      
  
  bookingDate: string = this.nowDate;
  bookingTime: string = this.nowTime; 

  //1년치만 예약 가능하도록 만들었다. 이전 방식에서 해가 바뀔 때 null 오류가 발생하여 수정.
  //minYear: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
  minYear: string = this.test;
  maxYear: string = (parseInt(this.minYear.substr(0,4))+1)+this.minYear.substr(4,this.minYear.length);

  week: Array<string> = new Array('일','월','화','수','목','금','토');
  today: string = this.week[this.forDate.getDay()];
  
  chatrooms: FirebaseListObservable<any[]>;
  user_id: string; 

  
  constructor(public alertCtrl: AlertController, public navParams: NavParams,
               public navCtrl:NavController, public af: AngularFireDatabase){
    this.start_list = [
      {start_list:'한동대학교', value:'한동대학교'},
      {start_list:'포항역', value:'포항역'},
      {start_list:'양덕', value:'양덕',},
      {start_list:'고속버스터미널', value:'고속버스터미널'},
      {start_list:'시외버스터미널', value:'시외버스터미널'},
      {start_list:'북부해수욕장', value:'북부해수욕장'},
      {start_list:'육거리',value:'육거리' },
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

    // this.spotList = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];
    
    this.user_id = navParams.data.user_id; //이게 파라미터로 자꾸 받으면 중간에 데이터가 손실되지 않도록 유지시켜줘야 한다.
  }

  addZ(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  showConfirmAlert(){
    if (this.arrive2 && this.start2)
    {
      this.depart = this.start2;
      this.arrival = this.arrive2;
      //this.arrive = this.arrive2;
      //this.start = this.start2;
    }
    else if (this.arrive2 && !this.start2)
      this.arrival = this.arrive2;
      //this.arrive = this.arrive2;
    else if (this.start2 && !this.arrive2)
      this.depart = this.start2;
      //this.start = this.start2;
    else{
      this.depart = this.start;
      this.arrival = this.arrive;
    }
    
    //전달할 메시지
    this.msg = "<br>" + "출발지 : " + this.depart + "<br>" + 
              "도착지 : " + this.arrival + "<br>" + 
              "출발날짜 : " + this.bookingDate + "(" + this.week[new Date(this.bookingDate).getDay()] + ")" + "<br>" + 
              "출발시간 : " + this.bookingTime + "<br>" +
              "최대탑승인원 : " + this.maxPeople + "명" + "<br>" ;

    if (this.start == this.arrive || this.start == this.arrive2 || this.start2 == this.arrive)
    {
      console.log("출발1 / 출발2 / 도착1 / 도착 2 ",this.start,this.start2,this.arrive,this.arrive2);
      let alert = this.alertCtrl.create({
        message: "출발지와 도착지를 다르게 입력하여 주세요.",
        buttons: [{
          text: '확인',
          handler: () => {
            console.log('Okay');
          }
        }
        ]
      });
      alert.present(); 
      /*
      if (this.arrive2 && this.start2){
        this.arrive ="직접입력";
        this.start ="직접입력";
      }
      else if (this.arrive2) {
        this.arrive ="직접입력";
      }
      else if (this.start2) {
        this.start ="직접입력";
      }
      */
    }

    else if(this.start2 && this.arrive2 && this.start2 == this.arrive2) {
      console.log("출발1 / 출발2 / 도착1 / 도착 2 ",this.start,this.start2,this.arrive,this.arrive2);
      let alert = this.alertCtrl.create({
        message: "출발지와 도착지를 다르게 입력하여 주세요.",
        buttons: [{
          text: '확인',
          handler: () => {
            console.log('Okay');
          }
        }
        ]
      });
      alert.present(); 
    }

    else{
      let alert = this.alertCtrl.create({
        //title: '방만들기',
        subTitle: '방을 만드시겠습니까?',  
        message: this.msg,
        cssClass: 'custom-alrt',
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '확인',
            handler: () => {
              console.log('Okay');
            }
          }
        ]
      });
      alert.present();
    }
                
    
  }

  showRadioAlert(){
    let alert = this.alertCtrl.create();
    alert.setTitle('최대탑승인원');
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
            this.chatrooms = this.af.list('/chatrooms/' + this.bookingDate);
            url = this.chatrooms.push(
                {
                    departure: this.start,
                    destination: this.arrive,
                    depart_date: this.bookingDate,
                    depart_time: this.bookingTime,
                    capacity: data,
                    currentPeople: 4-data,
                    host: this.user_id,
                    participants: participants_list,
                }
            );
            this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: url.key, bookingDate:this.bookingDate, user_id: this.user_id, whichPage: "makeRoom"});
          }
        }
      });
    }

    
   

    alert.present();
    console.log("showRadioAlert at makeRoom.ts");

  };

  getKday(){
    this.today = this.week[new Date(this.bookingDate).getDay()];
  }


  showTestAlert(){
    if (this.arrive2 && this.start2)
    {
      this.arrive = this.arrive2;
      this.start = this.start2;
    }
    else if (this.arrive2 && !this.start2)
      this.arrive = this.arrive2;
    else if (this.start2 && !this.arrive2)
      this.start = this.start2;

    console.log("출발지 : ",this.start);
    console.log("도착지 : ",this.arrive);
    console.log("출발날짜 : ",this.bookingDate);
    console.log("출발시간 : ",this.bookingTime);
    console.log("오늘 요일 : " , this.week[this.forDate.getDay()]);
    console.log("최대탑승인원 : ",this.maxPeople);
  }

  startClick(){
    this.start = "한동대학교";
    this.start2 = "";
  }

  labelClick(){
    this.arrive = "포항역";
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