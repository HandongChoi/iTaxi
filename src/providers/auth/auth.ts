import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  constructor() {
  }

  loginUser(email:string, password:string):firebase.Promise<any> { 
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
   
  signupUser(email:string, password:string):firebase.Promise<any> { 
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => { firebase.database().ref(`/userProfile/${newUser.uid}/email`)
    .set(email)
    }).catch( error => console.error(error) );
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
