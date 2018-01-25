import { Injectable } from '@angular/core';
import { Platform, Loading } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {

  email: string;
  uid: string;
  phoneNumber: string;
  name: string;
  studentID: string;

  obj: any;
  public loading:Loading;
  
  constructor(public af: AngularFireDatabase, public platform: Platform) {
    console.log('Hello UsersProvider Provider');
    
    this.uid = firebase.auth().currentUser.uid;
    this.af.object('/userProfile/'+ this.uid).subscribe(data => {
        this.email = data['email'];
        this.phoneNumber = data['phoneNumber'];
        this.name = data['name'];
        this.studentID = data['studentID'];
    });
    
  }


  //subscribe로 하면 우리가 조작 가능한 type으로 변환되어 나온다.
  getEmail(){
    console.log("getEmail Service");
    console.log(this.email);
    return this.email;    
  }

}
