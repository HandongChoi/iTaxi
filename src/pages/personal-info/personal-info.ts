import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsersProvider } from '../../providers/users/users';
import { SettingPage } from '../setting/setting'
import { EmailValidator } from '../../validators/email';
import { EngNameValidator } from '../../validators/engName';
import { AccountBankValidator } from '../../validators/accountBank';
import { AccountNumberValidator } from '../../validators/accountNumber';

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {
  updateForm:FormGroup;
  userInfo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public alertCtrl: AlertController, public af:AngularFireDatabase, formBuilder:FormBuilder,
              public userService: UsersProvider) {
    this.userInfo = this.userService.userInfo;
    this.updateForm = formBuilder.group({
      engName: [this.userInfo['engName'], EngNameValidator.isValid],
      email: [this.userInfo['email'], Validators.compose([Validators.required, EmailValidator.isValid])],
      phone: [this.userInfo['phone'], Validators.required],
      accountBank: [this.userInfo['accountBank'], AccountBankValidator.isValid],
      accountNumber: [this.userInfo['accountNumber'], AccountNumberValidator.isValid]
    });
  }

  //기존것을 object.set 말고 object.update가 있을 것 같은데 찾아보자.
  updateUserInfo(){
    this.userInfo['engName'] = this.updateForm.value.engName;
    this.userInfo['email'] = this.updateForm.value.email;
    this.userInfo['phone'] = this.updateForm.value.phone;
    this.userInfo['accountBank'] = this.updateForm.value.accountBank;
    this.userInfo['accountNumber'] = this.updateForm.value.accountNumber;

    let alert = this.alertCtrl.create({
      title: "정보 수정",
      message: "정보를 수정하시겠습니까?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Change",
          handler: () => {
            this.af.object(`/userProfile/${this.userInfo['studentID']}`).update(this.userInfo);
            let alert = this.alertCtrl.create({
              title: '개인정보 수정',
              subTitle: '<br>성공적으로 변경되었습니다.<br>뒤로 돌아가주세요.',
              buttons: ['확인']
            });
            alert.present();
          }
        }
      ]
    })
    alert.present();
  }

  ionViewDidLoad() { console.log('ionViewDidLoad PersonalInfoPage'); }

  dismiss(){
    this.viewCtrl.dismiss()
    console.log('dismiss page');
  }
}
