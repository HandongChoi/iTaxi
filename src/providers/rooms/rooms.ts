import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RoomsProvider {


  room: Object = { departure: String,
                   destination: String,
                   departure_date: String,
                   departure_time: String,
                   capacity: Number,
                   currentPeople: Number,
                   host: String,
                   participants: Array,
                 }

  constructor() {
    console.log('Hello RoomsProvider Provider');
  }

  setRoomInfo(obj: Object){
    console.log(this.room === obj);
    console.log(this.room == obj);
    this.room = obj;
    console.log(this.room);
    console.log(obj);
    console.log('정보 좀 볼께');
    console.log(this.room === obj);
    console.log(this.room == obj);
  }

  addParticipants(user): boolean {
    console.log("여긴가");
    let parts = this.room['participants'];
    if (this.room['currentPeople'] < this.room['capacity']) {
      parts.push(user);
      this.room['participants'] = parts;
      this.room['currentPeople']++;
      return true;
    }
    else {
      return false;
    }
  }
}
