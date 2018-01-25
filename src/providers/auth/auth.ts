import { Injectable } from '@angular/core';
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
    }).catch( error => console.error(error) );
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
    console.log("auth Test!!");
    console.log(firebase.auth().currentUser.uid); 
    firebase.database().ref(`/userProfile/${userId}`).off(); 
    return firebase.auth().signOut();
  }

}
