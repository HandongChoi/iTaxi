import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { RoomSortPipe } from './room-sort/room-sort';
@NgModule({
	declarations: [DatePipe,
    RoomSortPipe],
	imports: [],
	exports: [DatePipe,
    RoomSortPipe]
})
export class PipesModule {}
