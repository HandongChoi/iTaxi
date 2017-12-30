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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = firebase.auth().currentUser.email;
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
