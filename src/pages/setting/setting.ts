import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login'; 

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  user: any;
  userData: FirebaseObjectObservable<any>;
  isNotiToggled: boolean;
  isPushToggled: boolean;
  firestore;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public platform:Platform, public authProvider:AuthProvider, public af:AngularFireDatabase) {
    let user_id = firebase.auth().currentUser.uid;
    this.userData = af.object(`/userProfile/${user_id}`);
    this.userData.subscribe(data => {
      this.user = data;
      this.isNotiToggled = data.isNoti;
      this.isPushToggled = data.isPush;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  NotiToggle(){
    this.userData.update({ isNoti: this.isNotiToggled });
  }

  PushToggle(){
    this.userData.update({ isPush: this.isPushToggled });
  }

  delete_user():void {
    this.firestore = firebase.database().ref('/userProfile/'+ firebase.auth().currentUser.uid);
    this.authProvider.delete();
    this.firestore.remove();
    alert('탈퇴처리되었습니다');
    this.navCtrl.setRoot(LoginPage);
  }
}
