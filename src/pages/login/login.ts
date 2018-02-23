import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, Alert, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';

import { AngularFireDatabase } from 'angularfire2/database';

import { MainPage } from '../main/main';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  public loginForm:FormGroup;
  public loading:Loading;

 //+ firestore: any;

  constructor(public navCtrl:NavController, public navParams: NavParams, public loadingCtrl:LoadingController,
              public alertCtrl:AlertController, public authProvider:AuthProvider, formBuilder:FormBuilder,
              public menu: MenuController, public userServices:UsersProvider, public af: AngularFireDatabase) {

    console.log('push test');

    //왼쪽 사이드바 메뉴 안 보이게 하는 역할
    this.menu.enable(false,'myMenu');

    //로그인시 제한 조건 걸어놓기
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser():void {
    if(!this.loginForm.valid){
      console.log(`Form isn't valid yet, value: ${this.loginForm.value}`);
    }else{
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      
      this.authProvider.loginUser(email, password).then( authData =>  {
        this.loading.dismiss().then( () => {
          this.userServices.initialize(authData).then(()=>{
            this.navCtrl.setRoot(MainPage)
          });
        });
      }, error => {
        this.loading.dismiss().then( () => {
            const alert:Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel'}]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  signUp() { this.navCtrl.setRoot(SignupPage); }
  password() { this.navCtrl.setRoot(ResetPasswordPage); }
}
