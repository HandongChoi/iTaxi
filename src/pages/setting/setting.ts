import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { LoginPage } from '../login/login';
import { PersonalInfoPage } from '../personal-info/personal-info'

import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  user: Object;
  userData: FirebaseObjectObservable<any>;
  isNotiToggled: boolean;
  isPushToggled: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UsersProvider,
    public platform:Platform, public authProvider:AuthProvider, public af:AngularFireDatabase,
    public alertCtrl: AlertController) {
    this.user = this.userService.userInfo;
    this.isNotiToggled = this.user['isNoti'];
    this.isPushToggled = this.user['isPush'];
  }

  // ionViewDidLoad() { console.log('ionViewDidLoad SettingPage'); }
  NotiToggle(){ this.af.object(`/userProfile/${this.user['studentID']}`).update({ isNoti: this.isNotiToggled }); }
  PushToggle(){ this.af.object(`/userProfile/${this.user['studentID']}`).update({ isPush: this.isPushToggled }); }
  OpenInfoPage() { this.navCtrl.push(PersonalInfoPage); }

  //안쓰는 기능
  deleteUser():void {
    let alert = this.alertCtrl.create({
      title: "회원탈퇴",
      message: "정말로 탈퇴하시겠습니까?",
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: () => { 
            // console.log('Cancel'); 
          }
        },
        {
          text: '확인',
          handler: () => {
            this.userData.remove();
            this.authProvider.delete();
            let a = this.alertCtrl.create({
              title: "탈퇴 완료",
              message: "탈퇴가 완료되었습니다.",
              buttons: [
                {
                  text: 'Ok',
                  handler: () => { this.navCtrl.setRoot(LoginPage);}
                }
              ]
            });
            a.present();
          }
        }
      ]
    });
    alert.present();
  }
}
