import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';

import { ModalController } from 'ionic-angular';
//import { PersonalInfoPage } from '../pages/personal-info/personal-info';

@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingPage),
  ],
})
export class SettingPageModule {
  constructor(public modalCtrl: ModalController) {
  }

  // openModal() {
  //   let modal = this.modalCtrl.create(PersonalInfoPage);
  //   modal.present();
  // }
}
