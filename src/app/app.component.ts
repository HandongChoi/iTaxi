import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { SettingPage } from '../pages/setting/setting';
import { SignupPage } from '../pages/signup/signup';
import { TaxiListPage } from '../pages/taxi-list/taxi-list';

import { AuthProvider } from '../providers/auth/auth';
import { UsersProvider } from '../providers/users/users';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FCM, NotificationData } from '@ionic-native/fcm';

import firebase from 'firebase';
import { MainPage } from '../pages/main/main';
import { Observable } from 'rxjs/Observable';

firebase.initializeApp({
  apiKey: "AIzaSyANvht7J2MNX6x47mglqfJk74yZQ9u0qUk",
  authDomain: "itaxi-54bdc.firebaseapp.com",
  databaseURL: "https://itaxi-54bdc.firebaseio.com",
  projectId: "itaxi-54bdc",
  storageBucket: "itaxi-54bdc.appspot.com",
  messagingSenderId: "208976127032"
});

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: NavController;

  rootPage: any;
  pages: Array<{title: string, component: any}>;
  dates_array: Array<any> = [];
  user_id: any;
  uid: any;

  roomData: Object = {};

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public authProvider:AuthProvider, public alertCtrl: AlertController, public af: AngularFireDatabase,
              public fcm:FCM, public userServices:UsersProvider, public loadingCtrl: LoadingController) {
    this.splashScreen.show();
    console.log("splash screen on");
    this.initializeApp();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userServices.initialize(user).then(() => {
          this.user_id = this.userServices.getName();
          this.uid = this.userServices.getUID();

          if(this.user_id != undefined && this.uid != undefined){
            
            firebase.database().ref('/rideHistory/'+this.uid).orderByChild('departure_date').limitToFirst(1)
             .on("value", data => {
                
              this.roomData = data.val();
            });

            this.rootPage = MainPage;
          }
        }).catch(error => {
          alert("An error occured!" + error);
        });
      }

      else {
        this.rootPage = LoginPage;
      }
      this.splashScreen.hide();
      console.log("splash screen out");
    });
    
    //
    // const unsubscribe = firebase.auth().onAuthStateChanged( user => {
    //
    //
    //
    //   if(!user){
    //     this.rootPage = LoginPage;
    //     unsubscribe();
    //   } else{
    //
    //     //this.uid = this.userServices.firebases.currentUser.uid;
    //
    //     this.userServices.setInfo(this.uid);
    //
    //     this.user_id = this.userServices.getName();
    //     this.rootPage = MakeRoomPage;
    //
    //     //for showing the most recent reservation list in side bar
    //     let dates: FirebaseListObservable<any[]>;
    //     let parsedUserId = this.stringParser(user.email);
    //     dates = af.list('/rideHistory/'+parsedUserId);
    //     dates.subscribe(data =>{
    //       if(this.dates_array){
    //         this.dates_array.pop();
    //         this.dates_array.push(data);
    //       }
    //       else
    //         this.dates_array.push(data);
    //     });
    //
    //     unsubscribe();
    //   }
    // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.fcm.getToken()
        .then((token:String) =>{
          console.log("The token is ", token);
        })
        .catch(error => {
          console.error(error);
        });

      this.fcm.onTokenRefresh().subscribe(
        (token:string) => console.log("New Token", token),
        error => console.error(error)
      );

      this.fcm.onNotification().subscribe(
        (data:NotificationData)=>{
          if(data.wasTapped){
            console.log("Received in background", JSON.stringify(data));
          }
          else{
            console.log("Received in foreground", JSON.stringify(data))
          }
        }, error=>{
          console.error("Error in notification", error);
        }
      )
    });
    console.log("initailizeApp at app.component.ts");
  }

  openPage(page) {
    this.navCtrl.setRoot(page.componenent, {user_id: this.user_id});
    console.log("openPage");
  }

  setUID(uid){
    this.user_id = uid;
  }

  stringParser(sentence){
    let parsedID = sentence.replace('@', '');
    parsedID = parsedID.replace('.', '');

    return parsedID;
  }

  inviteFriend(){
    alert('invite friend');
    console.log("inviteFriend() at app.componenent.ts");
  }

  leaveRoom(){
    alert('leave');
    console.log("leaveRoom() at app.componenent.ts");
  }

  setPage(page){
    this.navCtrl.setRoot(page);
    console.log(page+" set at app.component.ts");
  }

  pushPage(page){
    this.navCtrl.push(page);
    console.log(page+" push at app.component.ts");
  }

  logout(){
    this.authProvider.logoutUser();
    this.navCtrl.setRoot(LoginPage, {user_id: this.user_id});
    console.log("Logout");
  }
}
