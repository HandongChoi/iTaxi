import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login'; 

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  isNotiToggled: boolean;
  isPushToggled: boolean;
  firestore;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public platform:Platform, public authProvider:AuthProvider) {

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

  delete_user():void {
    this.firestore = firebase.database().ref('/userProfile/'+ firebase.auth().currentUser.uid);
    this.authProvider.delete();
    this.firestore.remove();
    alert('탈퇴처리되었습니다');
    this.navCtrl.setRoot(LoginPage);
  }
}
