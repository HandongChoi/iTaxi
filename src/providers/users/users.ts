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

  
  constructor(public af: AngularFireDatabase) {
    console.log('Hello UsersProvider Provider');       
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad UsersProvider');
  }

  setInfo(uid): void{
    //subscribe로 하면 observable한 것을 받아와서 data를 통해 접근가능하게 만들어준다. 안 쓰면 observable object라서 컨트롤 안됨.
    this.af.object('/userProfile/'+uid).subscribe(data=>{
      this.email = data['email'];
      this.phoneNumber = data['phoneNumber'];
      this.name = data['name'];
      this.studentID = data['studentID'];
    });
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
