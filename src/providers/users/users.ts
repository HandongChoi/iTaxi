import { Injectable } from '@angular/core';
import { Platform, Loading, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Promise } from 'firebase/app';

import firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersProvider {

  email: string;
  uid: string;
  phoneNumber: string;
  name: string;
  studentID: string;

  obj: any;
  loading:Loading;
  
  constructor(public af: AngularFireDatabase, public platform: Platform, public loadingCtrl:LoadingController) {
    console.log('Hello UsersProvider Provider');
       
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad UsersProvider');
  }

  test(uid){
    return new Promise(resolve => {
      this.af.object('/userProfile/'+uid).subscribe(data=>{
        console.log(data['email']);
      });
    });
  }

  setInfo(data :FirebaseObjectObservable<any>): void{
    console.log('setInfo');
    console.log(typeof data);
    this.email = data['email'];
    this.phoneNumber = data['phoneNumber'];
    this.name = data['name'];
    this.studentID = data['studentID'];
    console.log('왔냐 '+this.email);
  }

  //subscribe로 하면 우리가 조작 가능한 type으로 변환되어 나온다.
  getEmail(){
    console.log("getEmail Service : " + this.email);
    return this.email;    
  }

}
