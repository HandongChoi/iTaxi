import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  constructor(public af: AngularFireDatabase) {}
  
  loginUser(studentID:string):firebase.Promise<any> { 
    return firebase.auth().signInWithEmailAndPassword(studentID + '@handong.edu', 'HandongCRA1004');
  }
   
  signupUser(studentID:string):firebase.Promise<any> { 
    return firebase.auth().createUserWithEmailAndPassword(studentID + '@handong.edu', 'HandongCRA1004')
    .then( newUser => { 
      firebase.database().ref(`/UID/${newUser.uid}/studentID`).set(studentID);                
    }).catch( error => {
      let alertCtrl: AlertController;
      let alert = alertCtrl.create({
        title: "회원가입 에러",
        message: "회원가입 도중 에러가 발생했습니다. 관리자에게 문의해주시기 바랍니다. 에러: " + error,
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  logoutUser():firebase.Promise<void> {
    const UID:string = firebase.auth().currentUser.uid;
    this.af.object(`/UID/${UID}`).subscribe( data => {
      let userID = data.studentID;
      firebase.database().ref(`/userProfile/${userID}`).off();
    })
    return firebase.auth().signOut();
  }
  
  //아래 두개의 함수는 지금 버전에서는 쓰지 않는다. 히즈넷으로 작동하기 때문에 밑의 함수가 필요가 없다.
  delete(){
    var user = firebase.auth().currentUser;
    user.delete().then(function() {
      // User deleted.
    }).catch(function(error) {
      // An error happened.
    });
  }

  resetPassword(email:string):firebase.Promise<void> { 
    return firebase.auth().sendPasswordResetEmail(email);
  }
}
