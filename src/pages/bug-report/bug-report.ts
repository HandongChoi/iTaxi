import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, AlertController, List } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-bug-report',
  templateUrl: 'bug-report.html',
})
export class BugReportPage {
  @ViewChild(Content) content: Content;
  @ViewChild(List, {read: ElementRef}) chatList: ElementRef;

  chats: FirebaseListObservable<any[]>;
  chatContent: string;
  userID: string;

  chatPrevTime: any;
  chatNowTime: any;
  chatPrevKey: string;

  index: number = 0;
  private mutationObserver: MutationObserver;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider,
              public alertCtrl: AlertController, public sms: SMS) {
    this.userID = this.userServices.userInfo['studentID'];
  }

  ionViewWillEnter() {
    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
    this.chats = this.af.list('/bug');
    //Display 관련
    this.chatPrevKey = null;
    this.content.resize();
  }
  
  send() {
    if(this.chatContent !== '') {
      if(!this.chatPrevTime) {
        this.chatPrevTime = new Date();
      }
      this.chatNowTime = new Date();

      firebase.database().ref('/bug').push({
        userID: this.userServices.userInfo['studentID'],
        userName: this.userServices.userInfo['korName'],
        content: this.chatContent,
        dateTime: this.chatNowTime.toLocaleString('ko-KR'),
      }).catch(err => {
        console.log(err);
      }).then((data) => {
        // 한 유저가 1분 이내 보낸 메세지들은 가장 마지막 메세지만 날짜를 표시함
        if (this.continuousMessage(this.chatNowTime, this.chatPrevTime) && this.chatPrevKey) {
          firebase.database().ref(`/bug`).update({
            dateTime: this.chatPrevTime.toLocaleString('ko-KR')+" [continuousMessage]",
          })
        }
        this.chatPrevTime = this.chatNowTime;
        this.chatPrevKey = data['key'];

        this.chatContent = "";
        this.scrollBottom();
      });
    }
  }

  ionViewDidEnter(){
    this.content.scrollToBottom(300);
  }

  ionViewDidLoad(){ 
    this.mutationObserver = new MutationObserver((mutations) => {
    this.content.scrollToBottom();
    });

    this.mutationObserver.observe(this.chatList.nativeElement, {
      childList: true
    });
  } 
  scrollBottom(){ this.content.scrollToBottom(300); }
  continuousMessage(nowChat, prevChat) {
    /**
     * 1분 내에 연속된 메시지 발생함을 알리는 함수
     * 날짜 형식 'ko-KR' 2018. 8. 22. 오후 5:14:56
     */
    var nowDay = nowChat.getDate();
    var nowHour = nowChat.getHours();
    var nowMin = nowChat.getMinutes();

    var prevDay = prevChat.getDate();
    var prevHour = prevChat.getHours();
    var prevMin = prevChat.getMinutes();

    return (nowDay == prevDay && nowHour == prevHour && nowMin == prevMin) ? true : false;
  }
}
