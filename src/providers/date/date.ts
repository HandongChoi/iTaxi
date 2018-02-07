import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DateProvider {
  
  //provider의 맹점을 찾았다.
  //만약에 이게 챗팅 같은거 할 때 이거 호출되고 나중 시간이 필요하면 어떻게 할꺼야?
  //함수 다시 짤 생각해야된다. 현재 시간으로 setTime(now Date())만들 준비 해야 될듯.

  //한국 시간 기준(ISO 아님)으로 2018-1-1이 아닌 2018-01-01형식.
  private delimiter: string = '-';
  public nowYear: string = new Date().getFullYear().toString();
  public nowMonth: string = this.addZ(new Date().getMonth()+1);
  public nowDay: string = this.addZ(new Date().getDate());
  public nowDate: string = [this.nowYear, this.nowMonth, this.nowDay].join(this.delimiter);
  //12시간 방식이 아닌 24시간 방식으로 변환하고 19:01:39에서 초 단위 제거.
  public nowTime: string = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);      
  
  //방 만들시 min, max값 만들어주기
  public min: string = this.nowDate;
  public max: string = [parseInt(this.nowYear)+1, this.nowMonth, this.nowDay].join(this.delimiter);

  //한글 요일 만들어주기
  private week: Array<string> = new Array('일','월','화','수','목','금','토');
  public today: string = this.week[new Date().getDay()];
  
  constructor() {
    console.log('Hello DateProvider Provider');
  }
  addZ(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  //input: 2018-1-23, output: 화
  getKToday(bookingDate: string): string{
    return this.week[new Date(bookingDate.toString()).getDay()];
  }
  //input: 2018-1-23, output: 1월 23일
  getKMonthDay(dateWithDelimiter: string): string{
    let splitDate = dateWithDelimiter.split(this.delimiter);
    return splitDate[1]+'월 '+splitDate[2]+'일 ('+this.getKToday(dateWithDelimiter)+')';
  }
  //input: 2018-1-23, output: 2018년 1월 23일 (화)
  getKYearMonthDay(dateWithDelimiter: string): string{
    let splitDate = dateWithDelimiter.split(this.delimiter);
    return splitDate[0]+'년 '+splitDate[1]+'월 '+splitDate[2]+'일 ('+this.getKToday(dateWithDelimiter)+')';
  }
  dateToDelimiterFormat(date: Date): string {    
    let year = date.getFullYear();
    let month = this.addZ(date.getMonth()+1);
    let day = this.addZ(date.getDate());
    return [year, month, day].join(this.delimiter);
  }
}
