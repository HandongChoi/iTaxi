import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatRoomPage } from './chatroom';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChatRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatRoomPage),
    PipesModule
  ],
})
export class ChatRoomPageModule {}
