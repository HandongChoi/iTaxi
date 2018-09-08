import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {

  public userInfo: Object = {
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
    OneSignal: [],
  }

  constructor(public af: AngularFireDatabase, public loadingCtrl: LoadingController) {
    console.log('Hello UsersProvider Provider');
  }

  ionViewDidLoad(){ console.log('ionViewDidLoad UsersProvider'); }
  
  initialize(userID) {
    return new Promise((resolve, reject) => {
      this.af.object('/userProfile/' + userID).subscribe(data => {
        this.userInfo = data;
        this.userInfo['devToken'] = 'TempTodken';
        this.af.object('/userProfile/' + userID).update(this.userInfo);
        resolve();
      }, error=> {
        console.log("userService initialize error!");
        reject(error);
      });
    });
  }
  
  clear(){
    this.userInfo = {
      studentID: "",
      phone: "",
      email: "",
      korName: "",
      engName: "",
      accountBank: "",
      accountNumber: "",
      devToken: "ddf",
      OneSignal: [],
    }
  }
  setDevToken(token){ this.userInfo['devToken'] = token; }
}
