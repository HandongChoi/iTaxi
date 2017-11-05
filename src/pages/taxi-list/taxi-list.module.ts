import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiListPage } from './taxi-list';

@NgModule({
  declarations: [
    TaxiListPage,
  ],
  imports: [
    IonicPageModule.forChild(TaxiListPage),
  ],
})
export class TaxiListPageModule {}
