import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TaxiListPage } from '../taxi-list/taxi-list';
import { PersonalInfoPage } from '../personal-info/personal-info';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  dates: FirebaseListObservable<any[]>;
  nowDate: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
  dates_array: Array<any> = [];
  days: Array<string> = [];
  selectedDate: Date;
  currentDate: Date = new Date();

  user: any;
  user_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
     public menu: MenuController, public userServices: UsersProvider) {

    //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
    this.menu=menu;
    this.menu.enable(true,'myMenu');

    //일단 지금 user의 정보를 email로 받아오고 있다.
    this.user = this.userServices.getEmail();
    console.log("Main user : "+this.user);

    // //이메일 이전것으로 pasrse 해서 탑승내역에 저장중.
    // let parsedUserId = this.stringParser(this.user);
    // this.dates = af.list('/rideHistory/'+parsedUserId);
    // this.dates.subscribe(data =>{
    //   this.dates_array.push(data);
    // });

  }

  stringParser(sentence){
    let parsedID = sentence.replace('@', '');
    parsedID = parsedID.replace('.', '');

    return parsedID;
  }

  goTaxiListPage(){
    this.navCtrl.setRoot(TaxiListPage, {user_id: this.user});
    console.log("goTaxiListPage at main.ts");
  }

  goCarpoolListPage(){
    alert('Carpool Page');
    console.log("goCarpoolListPage at main.ts");
  }

  goMyPage(){
    this.navCtrl.setRoot(PersonalInfoPage, {user_id: this.user});
    console.log("goMyPage at main.ts");
  }
}
