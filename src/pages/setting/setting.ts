import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { PersonalInfoPage } from '../personal-info/personal-info';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
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
