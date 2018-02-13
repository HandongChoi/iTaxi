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
  transform(date: string): string {
    let slicedDate = date.slice(12);
    let splitedDate = slicedDate.split(":");
    let time = splitedDate[0] + ":" + splitedDate[1];
    return time;
  }
}
