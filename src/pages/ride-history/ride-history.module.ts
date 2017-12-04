import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideHistoryPage } from './ride-history';

@NgModule({
  declarations: [
    RideHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(RideHistoryPage),
  ],
})
export class RideHistoryPageModule {}
