import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { RoomSortPipe } from './room-sort/room-sort';
import { RoomSortDescendingPipe } from './room-sort-descending/room-sort-descending';
@NgModule({
	declarations: [DatePipe,
    RoomSortPipe,
    RoomSortDescendingPipe],
	imports: [],
	exports: [DatePipe,
    RoomSortPipe,
    RoomSortDescendingPipe]
})
export class PipesModule {}
