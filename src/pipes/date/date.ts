import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'DatePipe',
})
export class DatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(dates: Array<any>, args: string): Array<any> {
    let afterNow:Array<any>;
    afterNow = dates.filter(date =>
      new Date(Number(date.roomDate.split("-")[0]), Number(date.roomDate.split("-")[1]), Number(date.roomDate.split("-")[2]),
      Number(date.roomTime.split(":")[0]), Number(date.roomTime.split(":")[1]), 0) >= new Date()
    );

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
