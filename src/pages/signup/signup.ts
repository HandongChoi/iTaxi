import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { PhoneValidator } from '../../validators/phone';
import { StudentIDValidator } from '../../validators/studentID';
import { MainPage } from '../main/main';
import { LoginPage } from '../login/login';

import { AbstractControl } from '@angular/forms/src/model';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  procedure: string = "terms";
  public signupForm:FormGroup;
  public loading:Loading;

  termsFlag: boolean = false;
  infoFlag: boolean = true;
  completeFlag: boolean = true;

  constructor(public navCtrl:NavController, public navParams: NavParams, public authProvider:AuthProvider, 
    public loadingCtrl:LoadingController, public alertCtrl:AlertController, formBuilder:FormBuilder) {
      this.procedure = 'terms';
      this.signupForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        password2: ['', Validators.compose([Validators.required, this.equalTo('password')])],
        name: ['', Validators.compose([Validators.minLength(2), Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required, PhoneValidator.isValid])],
        studentID: ['', Validators.compose([Validators.required, StudentIDValidator.isValid])]
      });
  }

  private equalTo(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let input = control.value;
      let isValid = control.root.value[field_name] === input;
      
      if (!isValid)
        return { 'equalTo': {isValid} }
      else
        return null;
    };
  }

  signupUser() {
    if(!this.signupForm.valid){
      console.log(`Need to complete the form: ${this.signupForm.value}`);
    } else {
      const email:string = this.signupForm.value.email;
      const password:string = this.signupForm.value.password;
      const name:string = this.signupForm.value.name;
      const phoneNumber:string = this.signupForm.value.phoneNumber;
      const studentID:string = this.signupForm.value.studentID;

      this.authProvider.signupUser(email, password, name, phoneNumber, studentID).then( user => {
        this.loading.dismiss('Loading');
      }, error => {
        this.loading.dismiss().then( () => {
          const alert:Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: "cancel" }]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  TermFlagUp(){
    this.procedure='term';
    this.termsFlag=false;
    this.infoFlag=true;
    this.completeFlag=true;
  }

  InfoFlagUp(){
    this.procedure='info';
    this.termsFlag=true;
    this.infoFlag=false;
    this.completeFlag=true;
  }

  CompleteFlagUp(){
    this.signupUser();
    this.procedure='complete';
    this.termsFlag=true;
    this.infoFlag=true;
    this.completeFlag=false;
    
  }

  setPage(page){
    this.navCtrl.setRoot(page);
    console.log(page+" at singup.ts");
  }
}
