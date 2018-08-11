import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, Alert, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';

import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

import { MainPage } from '../main/main';
import { SignupPage } from '../signup/signup';
import { resolve } from 'dns';

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
              public menu: MenuController, public userServices:UsersProvider, public af: AngularFireDatabase,
              public http: Http) {
    //왼쪽 사이드바 메뉴 안 보이게 하는 역할
    this.menu.enable(false,'myMenu');

    //로그인시 제한 조건 걸어놓기
    this.loginForm = formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser():void { 
    const id = this.loginForm.value.id;
    const password = this.loginForm.value.password;

    var userInfo: Object = {
                              studentID: "",
                              phone: "",
                              email: "",
                              korName: "",
                              engName: "",
                              accountBank: "",
                              accountNumber: "",
                              devToken: "",
                              isPush: "",
                              isNoti: "",
                            } 
    var login = {"id": id, "password": password}
    this.http.post('https://8slpzkf3j9.execute-api.us-east-2.amazonaws.com/iTaxi/login',JSON.stringify(login))
    .subscribe( data => {
      this.loading.dismiss().then( () => {
        var body = JSON.parse(data['_body']);
        if (body['studentID'] == undefined){
          this.loading.dismiss().then( () => {
            const alert:Alert = this.alertCtrl.create({
            message: "ID 혹은 비밀번호가 틀렸습니다.",
            buttons: [{ text: "Ok", role: 'cancel'}]
          });
          alert.present();
          });
        } else {
          var exist = false;
          this.af.object(`/userProfile/${body['studentID']}`, { preserveSnapshot: true }).subscribe( (data) => {
            exist = data.exists();
          });
          if(exist){
            this.authProvider.loginUser(body['studentID']);        
          } else {
            userInfo['studentID'] = body['studentID'];
            userInfo['phone'] = body['phone'];
            userInfo['email'] = body['email'];
            userInfo['korName'] = body['korName'];
            userInfo['engName'] = body['engName'];
            this.navCtrl.push(SignupPage, {userInfo: userInfo});
            console.log('여기는 몇번');
          } 
        }
      })
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present(); 
    
    
    /*
    //지금 문제는 세션값 저장이라던지 앱에서 할 때 한 번 로그인 하면 계속 그 정보가 남아있게 하는 방식을 구상해야된다.
    this.authProvider.loginUser(id, password).then( authData =>  {
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
    */
  
  }
  /********* 자체 로그인 시스템을 쓸 때 아래와 같은 코드를 사용 하면 된다. ***************
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
  ***************************************************************************/
}
