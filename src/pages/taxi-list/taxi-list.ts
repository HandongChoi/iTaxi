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
    this.dates = af.list('/chatrooms/'+"2017-11-30");
    
    this.dates.subscribe(data =>{
      this.dates_array.push(data);
    });

    console.log("?! : "+this.dates_array);
    
    //여기까지가 모든 date들의 object를 다 가져온 것이다.
    //this.user_id = prompt("Input ID");
    this.user_id = "testing";

    //현재 날짜에 관한 chatroom들 정보 모두 가져오기.
    this.chatrooms = this.af.list('/chatrooms/'+this.nowDate);
    console.log(this.chatrooms);

    this.chatrooms.subscribe(data =>{
      this.chatrooms_array.push(data);  
    });

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