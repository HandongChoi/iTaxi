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

  selectOptions: any;
  e1: any;
  e2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectOptions = {
    title: '목적지',
    subTitle: '원하시는 목적지를 체크해주세요.',
    mode: 'md'
    };
    console.log("Working?!?!");
  }

  IonChange(selectedValue){
    console.log("Selected:",selectedValue);
    this.e1=selectedValue;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAndSortingPage');
  }

}
