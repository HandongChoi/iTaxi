import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, AlertController, MenuController, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ChatRoomPage } from '../pages/chatroom/chatroom';

import { AuthProvider } from '../providers/auth/auth';
import { UsersProvider } from '../providers/users/users';
import { DateProvider } from '../providers/date/date';
import { RoomsProvider } from '../providers/rooms/rooms';

import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AngularFireDatabase } from 'angularfire2/database';
import { FCM, NotificationData } from '@ionic-native/fcm';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

import firebase from 'firebase';

import { MainPage } from '../pages/main/main';
import { ListPage } from '../pages/list/list';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { SettingPage } from '../pages/setting/setting';
import { RideHistoryPage } from '../pages/ride-history/ride-history';

import { OneSignal as OneSignalNative } from '@ionic-native/onesignal';
declare var OneSignal;

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
              public roomServices: RoomsProvider, public loadingCtrl:LoadingController, private oneSignalNative: OneSignalNative) {
    this.dateServices.setNow();
    this.initializeApp();

    firebase.auth().onAuthStateChanged(authData => {
      if(authData == null){
        this.rootPage = LoginPage;
      } else {
        //token setup을 여기서 하자.
        var currentUserID = authData.email.substr(0,8);
        this.userServices.initialize(currentUserID).then(() => {
          this.userName = this.userServices.userInfo['korName'];
          this.af.list('/rideHistory/' + this.userServices.userInfo['studentID'], {
            query: {
              startAt: this.dateServices.getYearMonthDayWithDash(),
              orderByChild: 'departDate',
            }
          }).subscribe(rooms => {
            this.room = rooms.sort(this.roomServices.sortByDateTime)
            .filter((room: Object) => room['departDate'] + room['departTime'] >= this.dateServices.nowDate + this.dateServices.nowTime)[0];
          });
        }).then(() => {
          this.setOneSignal(true); // true이면 addToken을 실행함
          this.rootPage = MainPage;
        })
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('cordova')) {
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(false);
        this.splashScreen.hide();

        this.oneSignalNative.startInit('f4229499-d7fe-48bd-a3d9-6b64cfcb4ce2', '762163958818');
        this.oneSignalNative.enableVibrate(true);
        this.oneSignalNative.enableSound(true);
        this.oneSignalNative.inFocusDisplaying(this.oneSignalNative.OSInFocusDisplayOption.None);
        this.oneSignalNative.handleNotificationReceived().subscribe(() => {
          // do something when notification is received
        });
        this.oneSignalNative.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        this.oneSignalNative.endInit();
      }
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
          // removeToken하는데 토큰 값을 파라미터로 넘기는 이유는 
          // removeToken할 때, userService에서 토큰을 불러오는 것이
          // 바로 아래 라인보다 늦게 실행되기 때문
          this.setOneSignal(0, this.userServices.userInfo['OneSignal']);
          this.authProvider.logoutUser().then(() => {
            this.userServices.clear();
            this.navCtrl.setRoot(LoginPage);
          });
        }
      }]
    });
    alert.present();
  }

  // 디바이스 별로 해당 기기의 OneSignal Token 값을 가져와 add/remove Token 함수 호출
  setOneSignal(isLoginOrLogout, userOneSignalTokens?){
    var oneSignalToken;
    // Native OneSignal Token
    if (this.platform.is('cordova')) {
      // console.log("This Mobile is Cordova");
      this.oneSignalNative.getIds().then(data => {
        // console.log("CORDOVA OneSignal User ID:", data['userId']);
        oneSignalToken = data['userId'];
        isLoginOrLogout == true
          ? this.addToken(this.userServices.userInfo['studentID'], oneSignalToken)
          : this.removeToken(this.userServices.userInfo['studentID'], oneSignalToken, userOneSignalTokens);
      }).catch(err => {
        console.log(err);
      });
    } else { // Web OneSignal Token
      // console.log("This Mobile is Web");
      OneSignal.getUserId().then(userId => {
        // console.log("WEB OneSignal User ID:", userId);
        oneSignalToken = userId;
        isLoginOrLogout == true
          ? this.addToken(this.userServices.userInfo['studentID'], oneSignalToken)
          : this.removeToken(this.userServices.userInfo['studentID'], oneSignalToken, userOneSignalTokens);
      }).catch(err => {
        console.log(err);
      });
    }
  }
  addToken(studentID, oneSignalToken: string) {
    let tokens: string[] = [];
    if (this.userServices.userInfo['OneSignal'] == null) {
      tokens.push(oneSignalToken);
    }
    else {
      for(let i =0; i < this.userServices.userInfo['OneSignal'].length; i++) {
        tokens.push(this.userServices.userInfo['OneSignal'][i]);
      }
      // 현재 유저의 OneSignal 토큰 값에, 해당 기기의 token 값이 있을 때만 push
      tokens.indexOf(oneSignalToken) == -1 ? tokens.push(oneSignalToken) : {}
    }
    this.af.object(`/userProfile/${studentID}`).update({
      OneSignal : tokens,
    }).catch(err => {
      console.log(err);
    })
  }
  removeToken(studentID, oneSignalToken: string, userOneSignalTokens) {
    let tokens: string[] = [];
    if (userOneSignalTokens == null) {
      // 토큰이 없는 사람의 로그아웃, 혹시나 버그가 있을 수도 있어서 예외(?)처리해놨음
    }
    else {
      for(let i =0; i < userOneSignalTokens.length; i++) {
        tokens.push(userOneSignalTokens[i]);
      }
      // 현재 유저의 OneSignal 토큰 값에, 해당 기기의 token 값이 있을 때만 push
      tokens.indexOf(oneSignalToken) == -1 ? {} : tokens.splice(tokens.indexOf(oneSignalToken), 1)
    }
    this.af.object(`/userProfile/${studentID}`).update({
      OneSignal : tokens,
    }).catch(err => {
      console.log(err);
    })
  }
}
