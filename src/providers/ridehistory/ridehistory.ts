import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {UsersProvider} from '../../providers/users/users';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class RidehistoryProvider{

    rideHistory: FirebaseListObservable<any[]>;

    constructor(private userServices: UsersProvider, private af: AngularFireDatabase){
        
        this.rideHistory = af.list('/rideHistory/'+ this.userServices.getUID());
    }

    getDepartSoonRoom(): Promise<object> {
        return new Promise((resolve, reject) => { 
            this.rideHistory.$ref.ref.orderByChild('departure_date').on('child_added', data =>{
                resolve(data);
            });
        });
    }


}