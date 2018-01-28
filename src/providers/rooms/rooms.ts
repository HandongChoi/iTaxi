import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RoomsProvider {


  room: Object = { departure: String,
                   destination: String,
                   depart_time: String,
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
}
