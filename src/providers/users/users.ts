import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class UsersProvider {

  email: string;
  uid: string;
  phoneNumber: string;
  name: string;
  studentID: string;

  obj: any;
  
  constructor(public af: AngularFireDatabase) {
    console.log('Hello UsersProvider Provider');       
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad UsersProvider');
  }

  setInfo(uid): void{
    this.af.object('/userProfile/'+uid).subscribe(data=>{
      this.email = data['email'];
      this.phoneNumber = data['phoneNumber'];
      this.name = data['name'];
      this.studentID = data['studentID'];
    });
  }

  //subscribe로 하면 우리가 조작 가능한 type으로 변환되어 나온다.
  getEmail(){
    return this.email;    
  }

  getName(){
    return this.name;
  }

}
