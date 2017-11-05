import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TaxiListPage } from '../taxi-list/taxi-list';

/**
 * Generated class for the TaxiListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTaxiListPage(){
    this.navCtrl.push(TaxiListPage, {});
  }

  goCarpoolListPage(){
    alert('Carpool Page');
  }

  goMyPage(){
    alert('MyPage');
  }
}
