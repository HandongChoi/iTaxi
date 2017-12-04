import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html',
})
export class TaxiListPage {

  dates: FirebaseListObservable<any[]>;
  chatrooms: FirebaseListObservable<any[]>;
  user_id: any;  
  dates_array: Array<any> = [];
  chatrooms_array: Array<any> =[];
  
  forDate: any = new Date();
  nowDate: string = new Date().toISOString().substr(0, 10);

  departOptions: any;
  destinationOptions: any;

  departFilter: string;
  arriveFilter: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    
    this.user_id = navParams.data.user_id;
    
    //기본적으로 오늘 날짜 기준으로 data 불러오기.
    this.dates = af.list('/chatrooms/'+this.nowDate);
    console.log('database load success');
    this.dates.subscribe(data =>{
      this.dates_array.push(data);
    });
    console.log('subscribe success');
    
    this.departOptions = {
      title: '출발지',
      subTitle: '원하시는 출발지를 체크해주세요.',
      mode: 'md'
    };

    this.destinationOptions = {
      title: '도착지',
      subTitle: '원하시는 도착지를 체크해주세요.',
      mode: 'md'
    };

  }

  goChatroom(date) {
    let chat_room_id_val = date.$key;
    console.log(date.$key);
    let bookingDate_val= date.depart_date;
    console.log(bookingDate_val);
    //participant array에 push
    // 참여자가 아니고, 인원 full 아니면 push
    // 참여자이면 그냥 enter
    // full 인원이면 deny  
    console.log(this.user_id)
    this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chat_room_id_val, bookingDate: bookingDate_val, user_id: this.user_id});
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage, {user_id: this.user_id});
    console.log("makeRoom function into taxi-list.tx");
  }

  clickOption(){
    console.log("What? "+this.departFilter);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiListPage');
  }

}