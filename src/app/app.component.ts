import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, AlertController, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ChatRoomPage } from '../pages/chatroom/chatroom';

import { AuthProvider } from '../providers/auth/auth';
import { UsersProvider } from '../providers/users/users';
import { DateProvider } from '../providers/date/date';

import {StatusBar} from '@ionic-native/status-bar';
import {LocalNotifications} from '@ionic-native/local-notifications';

import { AngularFireDatabase } from 'angularfire2/database';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

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
  user_uid: any;

  room: Object;

  constructor(public platform: Platform, public splashScreen: SplashScreen, private statusBar: StatusBar, private localNotifications: LocalNotifications,
              public authProvider:AuthProvider, public alertCtrl: AlertController, public af: AngularFireDatabase, private localNotification: PhonegapLocalNotification,
              public fcm:FCM, public userServices:UsersProvider, private dateServices:DateProvider, public menuCtrl: MenuController) {

    this.splashScreen.show();
    console.log("splash screen on");
    this.initializeApp();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userServices.initialize(user).then(() => {
          this.user_id = this.userServices.getEmail();
          this.user_name = this.userServices.getName();
          this.user_uid = this.userServices.getUID();

          //현재 로직에서는 id or uid에 뭔가라도 있으면 거기서 뭐를 가져온다는건데.
          if(this.user_id != undefined && this.user_uid  != undefined) {
            af.list('/rideHistory/' + this.user_uid, {
              query:{
                startAt: this.dateServices.getYearMonthDayWithDash(),
                orderByChild : 'departureDate'
              }
            }).subscribe(data => {
              data.forEach(item => {
                if (item.departureTime >= this.dateServices.nowTime) {
                  this.room = item;
                  return;
                }
              })
            });
            this.rootPage = MainPage;
          }
        }).catch(error => {
          alert("An error occured!" + error);
        }); 
      } else {
        this.rootPage = LoginPage;
      }
      this.splashScreen.hide();
      console.log("splash screen out");
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      this.fcm.onTokenRefresh().subscribe(
        (token:string) => this.userServices.setDevToken(token),
        error => console.error(error)
      );
      //token refresh시 token을 update한다..

      this.fcm.onNotification().subscribe(
        (data:NotificationData)=>{
          this.localNotifications.on('click', () =>{
            this.af.object(data.roomURL).subscribe(room => {
              console.log("local notification", room, data.roomURL);
              this.goChatroomPage(room);
            })
          });
          if(data.wasTapped){
            this.localNotifications.schedule({
              id: 1,
              icon: 'res:/icon.png',
              title: 'iTAXI',
              text: data.message
            });
          // received in background
          }else{
            this.localNotifications.schedule({
              id: 1,
              icon: 'res:/icon.png',
              title: 'iTAXI',
              text: data.message
            });
            // received in foreground
          }
        }, error=>{
          console.error("Error in notification", error);
        }
      );
      // push message 수신 시 background, foreground에서 어떻게 할 건지 정의

      // Note: 현재 카톡에서 올때 위에 떴다가 사라지는 것을 구현하려고 하는데 이름이 뭔지.. docs에는 없는 것 같은데.. 나중에 찾아보자..

    });
    console.log("initailizeApp at app.component.ts");
  }

  setRoot(Page) { this.navCtrl.setRoot(Page); }

  goChatroomPage(room){
    this.menuCtrl.close();
    this.navCtrl.push(ChatRoomPage, {room: room});
  }

  logout(){
    this.authProvider.logoutUser();
    this.userServices.clear();
    this.navCtrl.setRoot(LoginPage);
  }
}
