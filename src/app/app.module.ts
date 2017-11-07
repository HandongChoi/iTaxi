import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ListPage } from '../pages/list/list';
import { SelectAndSortingPage } from '../pages/select-and-sorting/select-and-sorting'
import { MakeRoomPage } from '../pages/makeRoom/makeRoom'
import { TaxiListPage } from '../pages/taxi-list/taxi-list'
import { SettingPage } from '../pages/setting/setting';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    ListPage,
    SelectAndSortingPage,
    MakeRoomPage,
    TaxiListPage,
    SettingPage,
    PersonalInfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode:'ios',
      mode:'ios'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    ListPage,
    SelectAndSortingPage,
    MakeRoomPage,
    TaxiListPage,
    SettingPage,
    PersonalInfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
