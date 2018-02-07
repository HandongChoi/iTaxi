import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarpoolListPage } from './carpool-list';

@NgModule({
  declarations: [
    CarpoolListPage,
  ],
  imports: [
    IonicPageModule.forChild(CarpoolListPage),
  ],
})
export class CarpoolListPageModule {}
