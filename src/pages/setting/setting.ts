import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { NativeStorage } from 'ionic-native';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  isNotiToggled: boolean;
  isPushToggled: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform) {
    this.platform.ready().then(() =>{
      NativeStorage.getItem('notification').then(data =>{
        console.log(this.isNotiToggled);
        this.isNotiToggled = data;
      });

      NativeStorage.getItem('push').then(data =>{
        console.log(this.isPushToggled);
        this.isPushToggled = data;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  NotiToggle(){
    NativeStorage.setItem('notification', this.isNotiToggled);
  }

  PushToggle(){
    NativeStorage.setItem('push', this.isPushToggled);
  }
}
