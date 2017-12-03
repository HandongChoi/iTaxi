import { Component } from '@angular/core';
import { NativeStorage } from 'ionic-native';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Platform } from 'ionic-angular';
import { PersonalInfoPage } from '../personal-info/personal-info';

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

  openModal(){
    let modal = this.modalCtrl.create(PersonalInfoPage)
    modal.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '회원 탈퇴',
      message: "비밀번호를 입력하세요",
      inputs: [
        {
          name: 'password',
          placeholder: '비밀번호'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '확인',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
