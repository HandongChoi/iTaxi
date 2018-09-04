import { Injectable } from '@angular/core';
import { DateProvider } from '../../providers/date/date';
import { UsersProvider } from '../../providers/users/users';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomsProvider {
  rooms : Array<Object> = [];

  constructor(public dateServices: DateProvider, public af: AngularFireDatabase,
              public userServices: UsersProvider) {
    console.log('Hello RoomsProvider Provider'); 
  }

  getChatRooms(date, transportType, queryMsg?){
    return queryMsg ? this.af.list(`/${transportType}Chatrooms/${date}`, {query: queryMsg }) 
                                 : this.af.list(`/${transportType}Chatrooms/${date}`); 
  }

  getRideHistoryRooms(transportType){
    return this.af.list('/rideHistory/' + this.userServices.userInfo['studentID'], {
              query: {
                orderByChild: 'transportType',
                equalTo: `${transportType}`
              }
            })
  }

  sortByDateTime(room1, room2){
    const compare1 = room1.departDate + room1.departTime;
    const compare2 = room2.departDate + room2.departTime;
    return compare1 > compare2 ? 1 : -1;
  }
}
