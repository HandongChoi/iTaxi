import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  constructor() {
    
  }
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
   
  logoutUser():firebase.Promise<void> {
    const userId:string = firebase.auth().currentUser.uid;
    firebase.database().ref(`/userProfile/${userId}`).off(); 
    return firebase.auth().signOut();
  }

}
