import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaxiListPage } from '../taxi-list/taxi-list';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  user: any;
  user_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = firebase.auth().currentUser;
    this.user_id = this.user.email;
    console.log("Main user : "+this.user_id);
  }

  openTaxiList() {
    //manages the stack
    this.navCtrl.setRoot(TaxiListPage, {user_id: this.user_id});
    console.log("openTaxiList at main.ts");
  }

  goTaxiListPage(){
    this.navCtrl.setRoot(TaxiListPage, {user_id: this.user_id});
    console.log("goTaxiListPage at main.ts");
  }

  goCarpoolListPage(){
    alert('Carpool Page');
    console.log("goCarpoolListPage at main.ts");
  }

  goMyPage(){
    alert('MyPage');
    console.log("goMyPage at main.ts");
  }
}
