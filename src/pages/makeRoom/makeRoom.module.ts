import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeRoomPage } from './makeRoom';

@NgModule({
  declarations: [
    MakeRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeRoomPage),
  ],
  entryComponents: [MakeRoomPage]
})
export class MakeRoomPageModule {}
