import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DateProvider {
  
  //한국 시간 기준(local)으로 2018-1-1 형식 dateFormat 지정.
  private delimiter: string = '-';
  public dateFormat: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,this.delimiter);
  //2018-1-1(dateFormat) => 2018-01-01 형식으로 변환.
  public nowYear: string = this.dateFormat.split(this.delimiter)[0];
  public nowMonth: string = this.addZ(this.dateFormat.split(this.delimiter)[1]);
  public nowDay: string = this.addZ(this.dateFormat.split(this.delimiter)[2]);
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
    this.today = this.week[new Date(bookingDate).getDay()];
    return this.week[new Date(bookingDate).getDay()];
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
}
