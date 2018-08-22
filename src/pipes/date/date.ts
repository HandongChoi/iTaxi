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
    console.log(date);
    // 챗팅 메시지가 1분이내에 연속되면 날짜를 보이지 않도록 함
    // if (date=="isContinuousMessage") return " ";
    if (date.includes("[continuousMessage]")) return " ";
    /**
     * 들어오는 데이터 형식 'ko-KR' : 2018. 8. 22. 오후 5:29:30
     */
    let slicedDate = date.slice(12);
    let splitedDate = slicedDate.split(":");
    let time = splitedDate[0] + ":" + splitedDate[1];
    return time;
  }
}
