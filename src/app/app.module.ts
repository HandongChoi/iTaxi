import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatRoomPage } from '../pages/chatroom/chatroom';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom'
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { RoomListPage } from '../pages/roomlist/roomlist';
import { SelectAndSortingPage } from '../pages/select-and-sorting/select-and-sorting'
import { SettingPage } from '../pages/setting/setting';
import { TaxiListPage } from '../pages/taxi-list/taxi-list'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    ChatRoomPage,
    HomePage,
    ListPage,
    MainPage,
    MakeRoomPage,
    PersonalInfoPage,
    RoomListPage,
    SelectAndSortingPage,
    SettingPage,
    TaxiListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode:'ios',
      mode:'ios'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatRoomPage,
    HomePage,
    ListPage,
    MainPage,
    MakeRoomPage,
    PersonalInfoPage,
    RoomListPage,
    SelectAndSortingPage,
    SettingPage,
    TaxiListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
