import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatRoomPage } from '../chatroom/chatroom';
import { MakeRoomPage } from '../makeRoom/makeRoom';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TaxiListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  nowDate: string = this.forDate.getFullYear() + "-" + (this.forDate.getMonth()+1) + "-" + this.forDate.getDate();

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    //기본적으로 오늘 날짜 기준으로 data 불러오기.
    this.dates = af.list('/chatrooms/'+this.nowDate);
    this.dates.subscribe(data =>{
      this.dates_array.push(data);
    });
    //this.user_id = prompt("Input ID");
    this.user_id = "testing";
    
//    let chat_room_id_val = (this.chatrooms[0]).$key;
    //console.log("Test : " + this.chatrooms[0].$key);
  
  }

  goChatroom($event, date) {
    console.log('hi');
      this.chatrooms = this.af.list('/chatrooms/'+date);
        let chat_room_id_val = (this.chatrooms[1]).$key;
        console.log(chat_room_id_val);
        //participant array에 push
        // 참여자가 아니고, 인원 full 아니면 push
        // 참여자이면 그냥 enter
        // full 인원이면 deny
        
      this.navCtrl.setRoot(ChatRoomPage, {chat_room_id: chat_room_id_val, user_id: this.user_id});
  }

  makeRoom(){
    this.navCtrl.setRoot(MakeRoomPage, {user_id: this.user_id});
    console.log("makeRoom function into taxi-list.tx");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxiListPage');
  }

}