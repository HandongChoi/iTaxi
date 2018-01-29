import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class UsersProvider {

  private email: string;
  private uid: string;
  private phoneNumber: string;
  private name: string;
  private studentID: string;
  private state: boolean = false;

  constructor(public af: AngularFireDatabase, public loadingCtrl: LoadingController) {
    let loading = loadingCtrl.create();
    loading.present();
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.state = true;
        this.uid = user.uid
        this.af.object('/userProfile/' + this.uid).subscribe(data=>{
          this.email = data['email'];
          this.phoneNumber = data['phoneNumber'];
          this.name = data['name'];
          this.studentID = data['studentID'];
        });
        loading.dismiss().then(() => {
          
        });
        console.log("User Login!");
      }
      else {
        this.state = false;
        loading.dismiss();
        console.log("User Logout!");
      }
    });
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
