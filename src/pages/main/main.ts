import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaxiListPage } from '../taxi-list/taxi-list';
import { PersonalInfoPage } from '../personal-info/personal-info';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  user: any;
  user_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    let userInfo = firebase.auth().currentUser;
    this.user = firebase.auth().currentUser.uid;
    this.user_id = userInfo.email;
    console.log("Main user : "+this.user);
    console.log("Main user_id :"+this.user_id);
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
    this.navCtrl.setRoot(PersonalInfoPage, {user_id: this.user_id});
    console.log("goMyPage at main.ts");
  }
}
