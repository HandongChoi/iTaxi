import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { DatePickerModule } from 'ionic2-date-picker';

import { TaxiListPageModule } from '../pages/taxi-list/taxi-list.module';
import { ChatRoomPageModule } from '../pages/chatroom/chatroom.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MainPageModule } from '../pages/main/main.module';
import { PersonalInfoPageModule } from '../pages/personal-info/personal-info.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { MakeRoomPageModule } from '../pages/makeRoom/makeRoom.module'
import { SignupPageModule } from '../pages/signup/signup.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { RideHistoryPageModule } from '../pages/ride-history/ride-history.module';
import { CarpoolListPageModule } from '../pages/carpool-list/carpool-list.module';
import { MakeCarpoolRoomPageModule } from '../pages/make-carpool-room/make-carpool-room.module';

import { FCM } from '@ionic-native/fcm';
import { StatusBar } from '@ionic-native/status-bar';

import { DateProvider } from '../providers/date/date';
import { UsersProvider } from '../providers/users/users';
import { RoomsProvider } from '../providers/rooms/rooms';
import { StringProvider } from '../providers/strings/strings';

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
    MakeCarpoolRoomPageModule,
    CarpoolListPageModule,
    MakeRoomPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FCM,
    StatusBar,
    DateProvider,
    UsersProvider,
    RoomsProvider,
    StringProvider,
    LocalNotifications,
    PhonegapLocalNotification
  ]
})
export class AppModule {}
