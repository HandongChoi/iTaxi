import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SelectAndSortingPage } from '../pages/select-and-sorting/select-and-sorting'
import { MakeRoomPage } from '../pages/makeRoom/makeRoom'
import { TaxiListPage } from '../pages/taxi-list/taxi-list'
import { SettingPage } from '../pages/setting/setting';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { ChatRoomPage } from '../pages/chatroom/chatroom';

import {FCM, NotificationData} from '@ionic-native/fcm';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: NavController;

  rootPage: any = TaxiListPage;

  pages: Array<{title: string, component: any}>;

  private homePage;
  private mainPage;
  private taxiListPage;
  private settingPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public fcm:FCM) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Select testing', component: SelectAndSortingPage},
      { title: 'MakeRoom', component: MakeRoomPage},
      { title: 'TaxiList', component: TaxiListPage},
      { title: 'Setting', component: SettingPage},
    ];

    this.homePage = HomePage;
    this.mainPage = MainPage;
    this.taxiListPage = TaxiListPage;
    this.settingPage = SettingPage;
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

  goEditMyInfoPage(){
    alert('Edit My Info Page');
    console.log("goEditMyInfoPage() at app.componenent.ts");
  }

  goMainPage(){
    this.navCtrl.setRoot(MainPage);
    console.log("goMainPage() at app.componenent.ts");
  }
}
