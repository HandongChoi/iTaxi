import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatRoomPage } from './chatroom';

@NgModule({
  declarations: [
    ChatRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatRoomPage),
  ],
})
export class ChatRoomPageModule {}
