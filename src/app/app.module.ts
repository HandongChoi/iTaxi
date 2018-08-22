import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { DatePickerModule } from 'ionic2-date-picker';

import { ListPageModule } from '../pages/list/list.module';
import { ChatRoomPageModule } from '../pages/chatroom/chatroom.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MainPageModule } from '../pages/main/main.module';
import { PersonalInfoPageModule } from '../pages/personal-info/personal-info.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { MakeRoomPageModule } from '../pages/makeRoom/makeRoom.module'
import { SignupPageModule } from '../pages/signup/signup.module';
import { RideHistoryPageModule } from '../pages/ride-history/ride-history.module';
import { FCM } from '@ionic-native/fcm';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { DateProvider } from '../providers/date/date';
import { UsersProvider } from '../providers/users/users';
import { RoomsProvider } from '../providers/rooms/rooms';

import { PipesModule } from '../pipes/pipes.module'

export const firebaseConfig = {
  apiKey: "AIzaSyAUzjyDEOkbfvh3hU_t4wR4p3jXNq5lz3A",
  authDomain: "itaxipublic.firebaseapp.com",
  databaseURL: "https://itaxipublic.firebaseio.com",
  projectId: "itaxipublic",
  storageBucket: "",
  messagingSenderId: "762163958818"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
      mode: 'md',
      pageTransition: 'md-transition', // 안드로이드 화면전환이 렉이 덜 걸리는 듯
      // backButtonIcon: 'md-arrow-back',
      // backButtonText: '',
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DatePickerModule,
    ChatRoomPageModule,
    LoginPageModule,
    ListPageModule,
    PersonalInfoPageModule,
    SettingPageModule,
    SignupPageModule,
    RideHistoryPageModule,
    MainPageModule,
    MakeRoomPageModule,
    HttpModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    LocalNotifications,
    PhonegapLocalNotification
  ]
})
export class AppModule {}
