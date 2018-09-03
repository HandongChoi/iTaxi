import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, AlertController, MenuController, Loading, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ChatRoomPage } from '../pages/chatroom/chatroom';

import { AuthProvider } from '../providers/auth/auth';
import { UsersProvider } from '../providers/users/users';
import { DateProvider } from '../providers/date/date';
import { RoomsProvider } from '../providers/rooms/rooms';

import {StatusBar} from '@ionic-native/status-bar';
import {LocalNotifications} from '@ionic-native/local-notifications';

import { AngularFireDatabase } from 'angularfire2/database';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

import firebase from 'firebase';

import { MainPage } from '../pages/main/main';
import { ListPage } from '../pages/list/list';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { SettingPage } from '../pages/setting/setting';
import { RideHistoryPage } from '../pages/ride-history/ride-history';

firebase.initializeApp({
  apiKey: "AIzaSyAUzjyDEOkbfvh3hU_t4wR4p3jXNq5lz3A",
  authDomain: "itaxipublic.firebaseapp.com",
  databaseURL: "https://itaxipublic.firebaseio.com",
  projectId: "itaxipublic",
  storageBucket: "",
  messagingSenderId: "762163958818"
});

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: NavController;

  rootPage: any;
  userID: any;
  userName: string;
  userUID: any;
  transportType: string;

  room: any;

  constructor(public platform: Platform, public splashScreen: SplashScreen, private statusBar: StatusBar, private localNotifications: LocalNotifications,
              public authProvider:AuthProvider, public alertCtrl: AlertController, public af: AngularFireDatabase, private localNotification: PhonegapLocalNotification,
              public fcm:FCM, public userServices:UsersProvider, private dateServices:DateProvider, public menuCtrl: MenuController,
              public roomServices: RoomsProvider, public loadingCtrl:LoadingController) {
    this.dateServices.setNow();
    this.splashScreen.show();
    this.initializeApp();
    firebase.auth().onAuthStateChanged( authData => {  
      if(authData == null){
        this.rootPage = LoginPage;
      } else {
        //token setup을 여기서 하자.
        var currentUserID = authData.email.substr(0,8);
        var loading: Loading;
        this.userServices.initialize(currentUserID).then( () => {
          this.userName = this.userServices.userInfo['korName'];
          this.af.list('/rideHistory/' + this.userServices.userInfo['studentID'], {
            query: {
              startAt: this.dateServices.getYearMonthDayWithDash(),
              orderByChild: 'departDate',
            }
          }).subscribe( rooms => {
            this.room = rooms.sort(this.roomServices.sortByDateTime)
            .filter((room: Object) => room['departDate'] + room['departTime'] >= this.dateServices.nowDate + this.dateServices.nowTime)[0];
          })
        }).then( () => {
          loading.dismiss();
          this.rootPage = MainPage;
        })
        loading = this.loadingCtrl.create();
        loading.present();
      }
      this.splashScreen.hide();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      /*
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
      */
    });
  }

  setRoot(Page) { this.navCtrl.setRoot(Page); }

  goChatroomPage(room){
    this.menuCtrl.close();
    this.navCtrl.push(ChatRoomPage, {room: room});
  }

  takeTaxi() { this.navCtrl.push(ListPage, {transportType: 'taxi'}); }
  makeTaxi() { this.navCtrl.push(MakeRoomPage, {transportType: 'taxi'}); }

  takeCarpool() { this.navCtrl.push(ListPage, {transportType: 'carpool'}); }
  makeCarpool() { this.navCtrl.push(MakeRoomPage, {transportType: 'carpool'}); }

  goRideHistoryPage() { this.navCtrl.push(RideHistoryPage) }
  goSettingPage() { this.navCtrl.push(SettingPage) };

  logout(){
    let alert = this.alertCtrl.create({
      title: "로그아웃",
      message: "로그아웃 하시겠습니까?",
      buttons: [{
        text: "Cancel",
        role: "cancel"
      }, {
        text: "OK",
        handler: () => {
          this.authProvider.logoutUser().then( () => {
            this.userServices.clear();
            this.navCtrl.setRoot(LoginPage);
          });
        }
      }]
    });
    alert.present();
  }
}
