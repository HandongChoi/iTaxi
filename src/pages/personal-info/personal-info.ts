import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { MainPage } from '../main/main';
import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  public updateForm:FormGroup;

  user_object:FirebaseObjectObservable<any[]>;
  user: Object;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public alertCtrl: AlertController, public af:AngularFireDatabase, formBuilder:FormBuilder,
              public userService: UsersProvider) {

    this.user_object = this.af.object('/userProfile/' + this.userService.getUID());
    this.user_object.subscribe(data => {
      this.user = data;
    })
    this.updateForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      studentID: ['', Validators.compose([Validators.required])],
    });
  }

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
            this.user_object.update({
              name: revise_name,
              phoneNumber: revise_phoneNumber,
              studentID: revise_studentID,
            });
          }
        }
      ]
    })
    alert.present();

    console.log("Success Update");
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
    this.navCtrl.setRoot(MainPage);
  }

}
