import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class UsersProvider {

  //user 정보는 민감하기 때문에 혹시라도 밖에서 접근하는 일이 없도록 geter, seter방식으로 해둔다.

  private email: string;
  private uid: string;
  private phoneNumber: string;
  private name: string;
  private studentID: string;
  private state: boolean = false;

  constructor(public af: AngularFireDatabase, public loadingCtrl: LoadingController) {
    console.log('Hello UsersProvider Provider');
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad UsersProvider');
  }

  initialize() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged( user => {
        if (user) {
          this.state = true;
          this.uid = user.uid
          this.af.object('/userProfile/' + this.uid).subscribe(data=>{
            this.email = data['email'];
            this.phoneNumber = data['phoneNumber'];
            this.name = data['name'];
            this.studentID = data['studentID'];
            resolve();
          });
          console.log("User Login!");
        }
        else {
          this.state = false;
          console.log("User Logout!");
          resolve();
        }
      });
    });
  }
  clear(){
    this.email='';
    this.uid='';
    this.phoneNumber='';
    this.name='';
    this.studentID='';
  }
  isActivate() {
    if (this.state == true) return true;
    else return false;
  }
  getEmail(){
    return this.email;
  }
  getName(){
    return this.name;
  }
  getUID(){
    return this.uid;
  }

}
