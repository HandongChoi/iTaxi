import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MakeTaxiRoomPage } from '../pages/makeTaxiRoom/makeTaxiRoom';
import {TaxiListPage} from '../pages/taxi-list/taxi-list';
import { SelectAndSortingPage } from '../pages/select-and-sorting/select-and-sorting';
import { ChatRoomPage } from '../pages/chatroom/chatroom';
import {MainPage} from '../pages/main/main';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import { Dialogs } from '@ionic-native/dialogs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyANvht7J2MNX6x47mglqfJk74yZQ9u0qUk",
  authDomain: "itaxi-54bdc.firebaseapp.com",
  databaseURL: "https://itaxi-54bdc.firebaseio.com",
  projectId: "itaxi-54bdc",
  storageBucket: "",
  messagingSenderId: "208976127032"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectAndSortingPage,
    ChatRoomPage,
    TaxiListPage,
    MakeTaxiRoomPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectAndSortingPage,
    ChatRoomPage,
    TaxiListPage,
    MakeTaxiRoomPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
//    Dialogs,  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
