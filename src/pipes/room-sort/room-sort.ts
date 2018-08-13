import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the RoomSortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'roomSort',
})
export class RoomSortPipe implements PipeTransform {
  transform(observableRooms: FirebaseListObservable<any[]>) {
    var rooms: Array<Object> = [];
    //null이 날라오는 경우를 처리해야 해서 if구문을 넣었다.
    if(observableRooms){
      observableRooms.forEach(room => {
        rooms.push(room);
      })
      rooms.sort(this.sortByDateTime);
    }
    return rooms;
  }

  sortByDateTime(room1, room2){
    const compare1 = room1.departDate + room1.departTime;
    const compare2 = room2.departDate + room2.departTime;
    return compare1 > compare2 ? 1 : -1;
  }
}
