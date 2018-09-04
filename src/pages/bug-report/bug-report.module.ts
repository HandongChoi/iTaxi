import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BugReportPage } from './bug-report';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BugReportPage,
  ],
  imports: [
    IonicPageModule.forChild(BugReportPage),
    PipesModule
  ],
})
export class BugReportPageModule {}
