import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { MainPage } from '../main/main';
import { UsersProvider } from '../../providers/users/users';

import { EmailValidator } from '../../validators/email';

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

                /*
    this.af.object('/userProfile/' + this.userService.getStudentID())
    .subscribe(data => {
      this.userInfo = data;
    })*/
    this.userInfo = this.userService.userInfo;
    this.updateForm = formBuilder.group({
      engName: [this.userInfo['engName'], Validators.required],
      email: [this.userInfo['email'], Validators.compose([Validators.required, EmailValidator.isValid])],
      phone: [this.userInfo['phone'], Validators.compose([Validators.required, ])],
      accountBank: [this.userInfo['accountBank'], ],
      accountNumber: [this.userInfo['accountNumber'], ]
    });
  }

  //기존것을 object.set 말고 object.update가 있을 것 같은데 찾아보자.
  updateUserInfo(){
    const revise_name:string = this.updateForm.value.name;
    const revise_phoneNumber:string = this.updateForm.value.phoneNumber;
    const revise_studentID:string = this.updateForm.value.studentID;

    let alert = this.alertCtrl.create({
      title: "정보 수정",
      message: "정보를 수정하시겠습니까?",
      buttons: [
        {
          text: "Cancle",
          role: "cancle"
        },
        {
          text: "Change",
          handler: () => {
            /*여기 지금 update란 걸로 했는데 위에서 주소값 불러오는 방법이 변수 선언으로 하는 거 말고 다른 길이 있는지
            알아보고 고치자.
            this.userInfo.update({
              name: revise_name,
              phoneNumber: revise_phoneNumber,
              studentID: revise_studentID,
            });
            let a = this.alertCtrl.create({
              title: '개인정보 수정',
              subTitle: '개인정보가 성공적으로 변경되었습니다.',
              buttons: ['확인']
            });
            a.present();
            this.navCtrl.setRoot(SettingPage);
            */
          }
        }
      ]
    })
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

  dismiss(){
    this.viewCtrl.dismiss()
    console.log('dismiss page');
  }
}
