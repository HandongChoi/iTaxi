import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectAndSortingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-and-sorting',
  templateUrl: 'select-and-sorting.html',
})
export class SelectAndSortingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAndSortingPage');
  }

}
