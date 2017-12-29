import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'DatePipe'
})
@Injectable()
export class DatePipe implements PipeTransform {
    transform(dates: Array<any>, args: string): Array<any> {
        let afterNow:Array<any>;
        afterNow = dates.filter(date => new Date(date.roomDate+"T"+date.roomTime+":00") >= new Date());

        afterNow.sort((a: any, b: any) => {
            if (new Date(a.roomDate+"T"+a.roomTime+":00") < new Date(b.roomDate+"T"+b.roomTime+":00")) {
              return -1;
            } else if (new Date(a.roomDate+"T"+a.roomTime+":00") > new Date(b.roomDate+"T"+b.roomTime+":00")) {
              return 1;
            } else {
              return 0;
            }
        });
        if(afterNow.length == 0)
            return afterNow;
            
        return afterNow.slice(0,1);
    }
}
