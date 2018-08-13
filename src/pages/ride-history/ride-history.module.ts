import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideHistoryPage } from './ride-history';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    RideHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(RideHistoryPage),
    PipesModule
  ],
})
export class RideHistoryPageModule {}
