import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

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
import { RideHistoryPage } from '../pages/ride-history/ride-history';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPageModule } from '../pages/signup/signup.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { DatePicker } from 'ionic2-date-picker';


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
    LoginPage,
    MainPage,
    MakeRoomPage,
    PersonalInfoPage,
    SettingPage,
    TaxiListPage,
    RideHistoryPage,
    DatePicker,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    SignupPageModule,
    ResetPasswordPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatRoomPage,
    HomePage,
    LoginPage,
    MainPage,
    MakeRoomPage,
    PersonalInfoPage,
    ResetPasswordPage,
    SettingPage,
    SignupPage,
    TaxiListPage,
    RideHistoryPage,
    DatePicker,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
  ]
})
export class AppModule {}
