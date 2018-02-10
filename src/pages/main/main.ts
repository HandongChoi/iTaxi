import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  user_id: any;
  roomObservable: FirebaseListObservable<any[]>;
  roomObj: Object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
     public menu: MenuController, public userServices: UsersProvider) {

    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    this.menu=menu;
    this.menu.enable(true,'myMenu');

    //일단 지금 user의 정보를 email로 받아오고 있다.
    this.user_id = this.userServices.getEmail();
    console.log("Main user : "+this.user_id);
    this.roomObservable = af.list('/rideHistory/'+ this.userServices.getUID());
    
    this.roomObservable.$ref.orderByChild('departure_date').limitToFirst(1).on('value', data => {
      
      this.roomObj = data.val();
      console.log(this.roomObj)
    })
  }


  ioniViewDidLoad(){
    console.log("ionViewDidLoad at main.ts");
  }

  setPage(page){
    this.navCtrl.setRoot(page);
    console.log(page+" at main.ts");
  }
}
