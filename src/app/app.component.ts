import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform, AlertController, MenuController, Loading, LoadingController, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ChatRoomPage } from '../pages/chatroom/chatroom';

import { AuthProvider } from '../providers/auth/auth';
import { UsersProvider } from '../providers/users/users';
import { DateProvider } from '../providers/date/date';
import { RoomsProvider } from '../providers/rooms/rooms';

import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabase } from 'angularfire2/database';

import firebase from 'firebase';

import { MainPage } from '../pages/main/main';
import { ListPage } from '../pages/list/list';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { BugReportPage } from '../pages/bug-report/bug-report';

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

  public counter = 0;

  constructor(public platform: Platform, public splashScreen: SplashScreen, private statusBar: StatusBar,
              public authProvider:AuthProvider, public alertCtrl: AlertController, public af: AngularFireDatabase,
              public userServices:UsersProvider, private dateServices:DateProvider, public menuCtrl: MenuController,
              public roomServices: RoomsProvider, public loadingCtrl:LoadingController, private oneSignalNative: OneSignalNative,
              public toastCtrl: ToastController) {
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
          }).subscribe(rooms => {
            this.room = rooms.sort(this.roomServices.sortByDateTime)
            .filter((room: Object) => room['departDate'] + room['departTime'] >= this.dateServices.nowDate + this.dateServices.nowTime)[0];
          });
        }).then(() => {
          this.setOneSignal(true); // true이면 addToken을 실행함
          loading.dismiss();
          this.rootPage = MainPage;
        })
        loading = this.loadingCtrl.create();
        loading.present();
      }
    });
  }

  ionViewWillEnter() { this.dateServices.setNow(); }

  initializeApp() {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          this.platform.exitApp();
        }
      }, 0)
      if (this.platform.is('cordova')) {
        this.statusBar.overlaysWebView(false);
        this.oneSignalNative.startInit('f4229499-d7fe-48bd-a3d9-6b64cfcb4ce2', '762163958818');
        this.oneSignalNative.enableVibrate(true);
        this.oneSignalNative.enableSound(true);
        this.oneSignalNative.inFocusDisplaying(this.oneSignalNative.OSInFocusDisplayOption.None);
        this.oneSignalNative.endInit();
      }
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
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "끝내시려면 종료버튼을 한번 더 눌러주세요",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  setRoot(Page) { this.navCtrl.setRoot(Page); }
  goChatroomPage(room){
    this.menuCtrl.close();
    this.navCtrl.push(ChatRoomPage, {room: room});
  }

  takeTaxi() { this.navCtrl.setRoot(ListPage, {transportType: 'taxi'}); }
  makeTaxi() { this.navCtrl.setRoot(MakeRoomPage, {transportType: 'taxi'}); }

  takeCarpool() { this.navCtrl.setRoot(ListPage, {transportType: 'carpool'}); }
  makeCarpool() { this.navCtrl.setRoot(MakeRoomPage, {transportType: 'carpool'}); }

  goBugReportPage() { this.navCtrl.push(BugReportPage) }

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
