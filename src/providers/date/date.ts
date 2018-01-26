import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DateProvider {
  
  //현재 2018-01-26 형식으로 한국 시간 기준으로 nowDate를 설정.
  private delimiter: string = '-';
  public nowDate: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,this.delimiter);
  //위의 형식에서 '-'(delimiter) 기준으로 split시키고 1월 1일을 01월 01일 식으로 addZ함수를 통해 변환.
  public nowYear: string = this.nowDate.split(this.delimiter)[0];
  public nowMonth: string = this.addZ(this.nowDate.split(this.delimiter)[1]);
  public nowDay: string = this.addZ(this.nowDate.split(this.delimiter)[2]);
  //12시간 방식이 아닌 24시간 방식으로 변환하고 19:01:39에서 초 단위를 제거.
  public nowTime: string = new Date().toLocaleTimeString('en-US',{hour12:false}).substr(0,5);      
  
  public minYear: string = [this.nowYear, this.nowMonth, this.nowDay].join(this.delimiter);
  public maxYear: string = [parseInt(this.nowYear)+1, this.nowMonth, this.nowDay].join(this.delimiter);

  constructor() {
    console.log('Hello DateProvider Provider');
  }

  addZ(n) {
    return n < 10 ? '0' + n : '' + n;
  }
}
