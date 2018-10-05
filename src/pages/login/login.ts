import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, Alert, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { UsersProvider } from '../../providers/users/users';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

import { SignupPage } from '../signup/signup';
//import { resolve } from 'dns';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  public loginForm:FormGroup;
  public loading:Loading;

  constructor(public navCtrl:NavController, public navParams: NavParams, public loadingCtrl:LoadingController,
              public alertCtrl:AlertController, public authProvider:AuthProvider, formBuilder:FormBuilder,
              public menu: MenuController, public userServices:UsersProvider, public af: AngularFireDatabase,
              public http: Http) {
    //왼쪽 사이드바 메뉴 안 보이게 하는 역할
    
    firebase.auth().signOut();
    //로그인시 제한 조건 걸어놓기
    this.loginForm = formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }
  ionViewWillEnter() {
    this.menu.enable(false,'myMenu');
  }
  // ionViewDidLoad() { console.log('ionViewDidLoad LoginPage'); }

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
                              isPush: true,
                              isNoti: true,
                            } 
    var login = {"id": id, "password": password}
    if(id == "박지민" && password == "jimin0725"){
      this.af.object(`/userProfile/21500296`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21500296').then( ()=> this.loading.dismiss());        
      });
    }else if(id == "하리보81" && password == "tyty7237060!"){
      this.af.object(`/userProfile/21800209`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21800209').then( ()=> this.loading.dismiss());        
      });
    }else if(id == "윤정현" && password == "dbswjdgus29!"){
      this.af.object(`/userProfile/21600468`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21600468').then( ()=> this.loading.dismiss());        
      });
    }else if(id == "김진현" && password == "pas1418kal"){
      this.af.object(`/userProfile/21400210`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21400210').then( ()=> this.loading.dismiss());        
      });
    }else if(id == "멍두니" && password == "audgwnsg2"){
      this.af.object(`/userProfile/21500066`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21500066').then( ()=> this.loading.dismiss());        
      });
    }else if(id == "손가경" && password == "123123"){
      this.af.object(`/userProfile/21500351`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21500351').then( ()=> this.loading.dismiss());        
      });
    }else if(id == "유혜영" && password == "0764"){
      this.af.object(`/userProfile/21500439`, { preserveSnapshot: true }).subscribe( (data) => {
        this.authProvider.loginUser('21500439').then( ()=> this.loading.dismiss());        
      });
    }else{
      //헤더 부분에다가 utf-8 적용해서 한글도 보낼 수 있도록 해야된다.
      this.http.post('https://8slpzkf3j9.execute-api.us-east-2.amazonaws.com/iTaxi/login',JSON.stringify(login))
      .subscribe( data => {
        var body = JSON.parse(data['_body']);
        if (body['studentID'] == undefined){
          this.loading.dismiss();
          const alert:Alert = this.alertCtrl.create({
          message: "ID 혹은 비밀번호가 틀렸습니다.",
          buttons: [{ text: "Ok", role: 'cancel'}]
          });
          alert.present();
        } else {
          this.af.object(`/userProfile/${body['studentID']}`, { preserveSnapshot: true }).subscribe( (data) => {
            if(data.exists()){
              this.authProvider.loginUser(body['studentID']).then( ()=> this.loading.dismiss());        
            } else {
              userInfo['studentID'] = body['studentID'];
              userInfo['phone'] = body['phone'];
              userInfo['email'] = body['email'];
              userInfo['korName'] = body['korName'];
              userInfo['engName'] = body['engName'];
              this.navCtrl.push(SignupPage, {userInfo: userInfo});
              this.loading.dismiss();
            }
          });
        }
      });
    }
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
  /*************************************************************************/
  /********* 자체 로그인 시스템을 쓸 때 아래와 같은 코드를 사용 하면 된다. ***************/
  /*************************************************************************
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
