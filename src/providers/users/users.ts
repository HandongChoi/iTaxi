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

  constructor(public af: AngularFireDatabase, public loadingCtrl: LoadingController) {
    console.log('Hello UsersProvider Provider');
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad UsersProvider');
  }

  initialize(user) {
    return new Promise((resolve, reject) => {
      this.uid = user.uid;
      this.af.object('/userProfile/' + this.uid).subscribe(data=>{
        this.email = data['email'];
        this.phoneNumber = data['phoneNumber'];
        this.name = data['name'];
        this.studentID = data['studentID'];
        resolve();
      }, error=> {
        console.log("userService initialize error!");
        reject(error);
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
  
  getEmail(){
    return this.email;
  }

  getName(){
    return this.name;
  }
  
  getUID(){
    return this.uid;
  }

  getStudentID() {
    return this.studentID;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

}
