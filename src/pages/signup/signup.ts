import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { MainPage } from '../main/main';
import { LoginPage } from '../login/login';

import { AngularFireDatabase } from 'angularfire2/database';

declare var FCMPlugin;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  procedure: string = "terms";
  public signupForm:FormGroup;
  public loading:Loading;

  firestore;

  constructor(public navCtrl:NavController, public navParams: NavParams, public authProvider:AuthProvider, public loadingCtrl:LoadingController,
    public alertCtrl:AlertController, formBuilder:FormBuilder) {
      this.procedure = 'terms';
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      name: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      studentID: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    });
  }

  signupUser():void {
    if(!this.signupForm.valid){
      console.log(`Need to complete the form: ${this.signupForm.value}`);
    } else {
      const email:string = this.signupForm.value.email;
      const password:string = this.signupForm.value.password;
      const name:string = this.signupForm.value.name;
      const phoneNumber:string = this.signupForm.value.phoneNumber;
      const studentID:string = this.signupForm.value.studentID;

      this.authProvider.signupUser(email, password, name, phoneNumber, studentID).then( user => {
        this.loading.dismiss().then( () => {
          this.authProvider.loginUser(email, password).then( user => {
            this.loading.dismiss().then( () => {
              this.firestore = firebase.database().ref('/userProfile/'+ firebase.auth().currentUser.uid);

              if(typeof(FCMPlugin) != 'undefined'){
                this.tokenSetup().then((token) => {
                  this.storetoken(token);
                  this.navCtrl.setRoot(MainPage, {user_id: email});
                });
              }
              this.navCtrl.setRoot(MainPage, {user_id: email});
            });
          }, error => {
            this.loading.dismiss().then( () => {
              const alert:Alert = this.alertCtrl.create({
               message: error.message,
               buttons: [{ text: "Ok", role: 'cancel'}]
              });
              alert.present()
            });
          });
        });
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

  goLoginPage(){
    this.navCtrl.setRoot(MainPage);
    console.log("goLoginPage at signup.ts");
  }

  storetoken(t){
    this.firestore.update({
      email: firebase.auth().currentUser.email,
      devtoken:t
    }).then(()=>{
      alert('Token Stored');
      this.navCtrl.setRoot(MainPage);
    }).catch(()=>{
      alert('Token not sotred');
    });
  }

  tokenSetup(){
    var promise = new Promise((resolve, reject) => {
      FCMPlugin.getToken(function(token){
        resolve(token);
      }, (err)=>{
      reject(err);
      });
    });

    return promise;
  }

}
