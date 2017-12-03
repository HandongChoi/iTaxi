import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChatRoomPage } from '../pages/chatroom/chatroom';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SettingPage } from '../pages/setting/setting';
import { SignupPage } from '../pages/signup/signup';
import { TaxiListPage } from '../pages/taxi-list/taxi-list';

import { AuthProvider } from '../providers/auth/auth';

import firebase from 'firebase';

firebase.initializeApp({ 
  apiKey: "AIzaSyANvht7J2MNX6x47mglqfJk74yZQ9u0qUk",
  authDomain: "itaxi-54bdc.firebaseapp.com",
  databaseURL: "https://itaxi-54bdc.firebaseio.com",
  projectId: "itaxi-54bdc",
  storageBucket: "itaxi-54bdc.appspot.com",
  messagingSenderId: "208976127032"
});

import {FCM, NotificationData} from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: NavController;

  rootPage: any;
  pages: Array<{title: string, component: any}>;

  user_email: any;

  private homePage;
  private mainPage;
  private taxiListPage;
  private settingPage;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public authProvider:AuthProvider, public fcm:FCM) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'MakeRoom', component: MakeRoomPage},
      { title: 'TaxiList', component: TaxiListPage},
      { title: 'Setting', component: SettingPage},
      { title: 'SignupPage', component: SignupPage},
    ];

    this.homePage = HomePage;
    this.mainPage = MainPage;
    this.taxiListPage = TaxiListPage;
    this.settingPage = SettingPage;
    
    const unsubscribe = firebase.auth().onAuthStateChanged( user => { 
      if(!user){
        this.rootPage = LoginPage;
        unsubscribe();
      } else{
        this.rootPage = MainPage; unsubscribe();
        this.user_email = user.email;
        console.log("user_id : " + this.user_email);
      }
    });
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.navCtrl.setRoot(page.component);
    this.navCtrl.setRoot(page);
    console.log("openPage");
  }

  inviteFriend(){
    alert('invite friend');
    console.log("inviteFriend() at app.componenent.ts");
  }

  leaveRoom(){
    alert('leave');
    console.log("leaveRoom() at app.componenent.ts");
  }

  goSettingPage(){
    this.navCtrl.setRoot(SettingPage);
    console.log("goTaxiListPage() at app.componenent.ts");
  }

  goTaxiListPage(){
    this.navCtrl.setRoot(TaxiListPage);
    console.log("goTaxiListPage() at app.componenent.ts");
  }

  goMakeTaxiRoomPage(){
    this.navCtrl.setRoot(MakeRoomPage);
    console.log("goMakeTaxiRoomPage() at app.componenent.ts");
  }

  goCarpoolListPage(){
    alert('Carpool Page');
    console.log("goCarpoolListPage() at app.componenent.ts");
  }

  goMakeCarpoolRoomPage(){
    alert('Make Carpool Room Page');
    console.log("goMakeCarpoolRoomPage() at app.componenent.ts");
  }

  goBoardingListPage(){
    alert('Boarding List Page');
    console.log("goBoardingListPage() at app.componenent.ts");
  }

  goPersonalInfoPage(){
    this.navCtrl.setRoot(PersonalInfoPage);
    console.log("goPersonalInfoPage() at app.componenent.ts");
  }

  goMainPage(){
    this.navCtrl.setRoot(MainPage);
    console.log("goMainPage() at app.componenent.ts");
  }

  logout(){
    this.authProvider.logoutUser();
    this.navCtrl.setRoot(LoginPage);
    console.log("Logout");
  }
}
