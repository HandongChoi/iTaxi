import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MakeTaxiRoomPage } from '../pages/makeTaxiRoom/makeTaxiRoom';
import { TaxiListPage } from '../pages/taxi-list/taxi-list';
import { SelectAndSortingPage } from '../pages/select-and-sorting/select-and-sorting';
import { ChatRoomPage } from '../pages/chatroom/chatroom';
import { MainPage } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: NavController;

  rootPage:any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  inviteFriend(){
    alert('invite friend');
  }

  leaveRoom(){
    alert('leave');
  }

  goTaxiListPage(){
    this.navCtrl.push(TaxiListPage, {});
  }
  
  goMakeTaxiRoomPage(){
    this.navCtrl.push(MakeTaxiRoomPage, {});
  }

  goCarpoolListPage(){
    alert('Carpool Page');
  }

  goMakeCarpoolRoomPage(){
    alert('Make Carpool Room Page');
  }

  goBoardingListPage(){
    alert('Boarding List Page');
  }

  goEditMyInfoPage(){
    alert('Edit My Info Page');
  }
}
