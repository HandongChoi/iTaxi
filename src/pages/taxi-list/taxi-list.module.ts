import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiListPage } from './taxi-list';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    TaxiListPage,
  ],
  imports: [
    IonicPageModule.forChild(TaxiListPage),
    PipesModule
  ],
})
export class TaxiListPageModule {}
