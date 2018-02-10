import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StringProvider{

    stringParser(sentence){
        let parsedID = sentence.replace('@', '');
        parsedID = parsedID.replace('.', '');

        return parsedID;
    }
}