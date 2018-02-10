import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MakeRoomPage } from '../pages/makeRoom/makeRoom';
import { MainPage } from '../pages/main/main';
import { RideHistoryPage } from '../pages/ride-history/ride-history'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { DatePickerModule } from 'ionic2-date-picker';

import { TaxiListPageModule } from '../pages/taxi-list/taxi-list.module';
import { ChatRoomPageModule } from '../pages/chatroom/chatroom.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MainPageModule } from '../pages/main/main.module';
import { PersonalInfoPageModule } from '../pages/personal-info/personal-info.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { RideHistoryPageModule } from '../pages/ride-history/ride-history.module';
import { CarpoolListPageModule } from '../pages/carpool-list/carpool-list.module';
import { MakeCarpoolRoomPageModule } from '../pages/make-carpool-room/make-carpool-room.module';

import { FCM } from '@ionic-native/fcm';

import { DateProvider } from '../providers/date/date';
import { UsersProvider } from '../providers/users/users';
import { RoomsProvider } from '../providers/rooms/rooms';
import { PipesModule } from '../pipes/pipes.module';
import { StringProvider } from '../providers/strings/strings';
import { RidehistoryProvider } from '../providers/ridehistory/ridehistory';

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
    MakeRoomPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DatePickerModule,
    ChatRoomPageModule,
    LoginPageModule,
    TaxiListPageModule,
    PersonalInfoPageModule,
    SettingPageModule,
    SignupPageModule,
    ResetPasswordPageModule,
    RideHistoryPageModule,
    MainPageModule,
    PipesModule,
    MakeCarpoolRoomPageModule,
    CarpoolListPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MakeRoomPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FCM,
    DateProvider,
    UsersProvider,
    RoomsProvider,
    StringProvider,
    RidehistoryProvider,
    MakeCarpoolRoomPageModule,
    CarpoolListPageModule
  ]
})
export class AppModule {}
