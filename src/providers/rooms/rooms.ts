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
                   hostName: String,
                   participants: Array,
                   devTokens: Array,
                 }
                 //hostName을 넣은 이유는 makeRoom에 있어서 일단 넣었다.

  constructor() {
    console.log('Hello RoomsProvider Provider');
  }

  setRoomInfo(obj: Object){
    this.room = obj;
  }

  addParticipants(user, userToken): boolean {
    let parts = this.room['participants'];
    let tokenList = this.room['devTokens'];
    if (this.room['currentPeople'] < this.room['capacity']) {
      parts.push(user);
      tokenList.push(userToken);
      this.room['participants'] = parts;
      this.room['devTokens'] = tokenList;
      this.room['currentPeople']++;
      return true;
    }
    else {
      return false;
    }
  }

  getOut() {
    this.room['currentPeople']--;
  }
}
