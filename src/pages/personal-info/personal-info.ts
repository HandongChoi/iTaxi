import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController, AlertController} from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

  dismiss(){
    this.viewCtrl.dismiss()
    console.log('dismiss page');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '개인정보 수정',
      subTitle: '개인정보가 성공적으로 변경되었습니다.',
      buttons: ['확인']
    });
    alert.present();
  }

}
