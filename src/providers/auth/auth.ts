import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  constructor() {
    
  }
  loginUser(email:string, password:string):firebase.Promise<any> { 
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
   
  signupUser(email:string, password:string, name:string, phoneNumber:string, studentID:string):firebase.Promise<any> { 
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => { 
      firebase.database().ref(`/userProfile/${newUser.uid}/email`).set(email);
      firebase.database().ref(`/userProfile/${newUser.uid}/studentID`).set(studentID);
      firebase.database().ref(`/userProfile/${newUser.uid}/phoneNumber`).set(phoneNumber);
      firebase.database().ref(`/userProfile/${newUser.uid}/devtoken`).set("");
      firebase.database().ref(`/userProfile/${newUser.uid}/name`).set(name);
      firebase.database().ref(`/userProfile/${newUser.uid}/isPush`).set(true);
      firebase.database().ref(`/userProfile/${newUser.uid}/isNoti`).set(true);
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
