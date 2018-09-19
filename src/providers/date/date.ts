import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DateProvider {
  //한국 시간 기준(ISO 아님)으로 2018-1-1이 아닌 2018-01-01형식.
  //사실상 이거 nowDate를 this.makeStringFromDate(new Date())로 해서 바꿀 수 있는데 max 바꾸는거 때문에 일단은 이렇게 해놓음.
  //더 짧게 고칠 수 있는 가능성이 있다.
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
    // console.log('Hello DateProvider Provider');
  }
  addZ(n) { return n < 10 ? '0' + n : '' + n; }

  getMonthDayWithDash(){ return this.nowMonth + '-' + this.nowDay; }
  getYearMonthDayWithDash(){ return this.nowDate; }

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
  //input: 2018-01-23, output: 18-01-23
  getShortDate(dateWithDelimiter: string): string{
    return dateWithDelimiter.slice(2);
  }
  //2018-08-27과 같은 형식으로 만들어준다.
  makeStringFromDate(date: Date): string {
    let month = this.addZ(date.getMonth() + 1);
    let day = this.addZ(date.getDate());
    let year = date.getFullYear();
    return [year, month, day].join('-');
  }
  setNow() {
    this.nowYear = new Date().getFullYear().toString();
    this.nowMonth = this.addZ(new Date().getMonth()+1);
    this.nowDay = this.addZ(new Date().getDate());
    this.nowDate = [this.nowYear, this.nowMonth, this.nowDay].join(this.delimiter);
    //12시간 방식이 아닌 24시간 방식으로 변환하고 19:01:39에서 초 단위 제거.
    this.nowTime = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);      
    
    //방 만들시 min, max값 만들어주기
    this.min = this.nowDate;
    this.max = [parseInt(this.nowYear)+1, this.nowMonth, this.nowDay].join(this.delimiter);

    //한글 요일 만들어주기
    this.today = this.week[new Date().getDay()];
  }
}
