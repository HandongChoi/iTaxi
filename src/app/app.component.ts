import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ChatRoomPage } from '../pages/chatroom/chatroom';

import { AuthProvider } from '../providers/auth/auth';
import { UsersProvider } from '../providers/users/users';
import { DateProvider } from '../providers/date/date';

import { AngularFireDatabase } from 'angularfire2/database';
import { FCM, NotificationData } from '@ionic-native/fcm';

import firebase from 'firebase';
import { MainPage } from '../pages/main/main';
import { TaxiListPage } from '../pages/taxi-list/taxi-list';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { CarpoolListPage } from '../pages/carpool-list/carpool-list';
import { MakeCarpoolRoomPage } from '../pages/make-carpool-room/make-carpool-room';
import { RideHistoryPage } from '../pages/ride-history/ride-history';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { SettingPage } from '../pages/setting/setting';

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
  user_id: any;
  user_name: string;
  uid: any;

  room: Object;

  constructor(private platform: Platform, private statusBar: StatusBar,
              private splashScreen: SplashScreen, private authProvider: AuthProvider, 
              private af: AngularFireDatabase, private fcm: FCM, 
              private userServices: UsersProvider, private dateServices: DateProvider, 
              private menuCtrl: MenuController) {

    this.splashScreen.show();
    this.initializeApp();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userServices.initialize(user).then(() => {
          this.user_name = this.userServices.getName();
          this.uid = this.userServices.getUID();

          if(this.uid != undefined) {
            af.list(`/rideHistory/${this.uid}`, ref => 
              ref.startAt(this.dateServices.getYearMonthDayWithDash()).orderByChild('departure_date')
            ).valueChanges().forEach(item => {
              console.log("App.components.ts item : " + item);
            });
            /*
            af.list('/rideHistory/' + this.uid, {
              query:{
                startAt: this.dateServices.getYearMonthDayWithDash(),
                orderByChild : 'departure_date'
              }
            }).subscribe(data => {
              data.forEach(item => {
                if (item.departure_time > this.dateServices.nowTime) {
                  this.room = item;
                  return;
                }
              })
            });
            */
            this.rootPage = MainPage;
          }
        }).catch(error => {
          alert("An error occured!" + error);
        });
      }
      else {
        this.rootPage = LoginPage;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

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
  }

  TaxiListPage() { this.navCtrl.setRoot(TaxiListPage); }
  MakeRoomPage() { this.navCtrl.setRoot(MakeRoomPage); }
  CarpoolListPage() { this.navCtrl.setRoot(CarpoolListPage); }
  MakeCarpoolRoomPage() { this.navCtrl.setRoot(MakeCarpoolRoomPage); }
  RideHistoryPage() { this.navCtrl.setRoot(RideHistoryPage); }
  PersonalInfoPage() { this.navCtrl.setRoot(PersonalInfoPage); }
  MainPage() { this.navCtrl.setRoot(MainPage); }
  SettingPage() { this.navCtrl.setRoot(SettingPage); }

  goChatroomPage(room){
    this.menuCtrl.close();
    this.navCtrl.setRoot(ChatRoomPage, {room: room});
  }

  logout(){
    this.authProvider.logoutUser();
    this.userServices.clear();
    this.navCtrl.setRoot(LoginPage);
  }
}
