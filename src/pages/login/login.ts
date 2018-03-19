import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, Alert, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';

import { MainPage } from '../main/main';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  public loginForm: FormGroup;

  constructor(private navCtrl: NavController, public formBuilder: FormBuilder,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController, 
              private authProvider: AuthProvider, private menu: MenuController, 
              private userServices: UsersProvider) {

    //왼쪽 사이드바 메뉴 안 보이게 하는 역할
    this.menu.enable(false,'myMenu');

    //로그인시 제한 조건 걸어놓기
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      let alert = this.alertCtrl.create({
        title: "Failed",
        message: `Form isn't valid yet, value: ${this.loginForm.value}`,
        buttons: [{text: "OK", role: "cancle"}]
      });
    }
    else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      let loading: Loading;
      
      this.authProvider.loginUser(email, password).then(authData =>  {
        this.userServices.initialize(authData).then(() => {
          loading.dismiss().then(() => {
            this.navCtrl.setRoot(MainPage);
          });
        });
      }, error => {
        loading.dismiss().then( () => {
          const alert: Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel'}]
          });
          alert.present();
        });
      });

      loading = this.loadingCtrl.create();
      loading.present();
    }
  }

  signUp() { this.navCtrl.setRoot(SignupPage); }
  password() { this.navCtrl.setRoot(ResetPasswordPage); }
}
