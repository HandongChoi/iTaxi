import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, AlertController, List, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { SMS } from '@ionic-native/sms';
import { Clipboard } from '@ionic-native/clipboard';

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
  lastChatDate: string;

  chatPrevTime: any;
  chatNowTime: any;
  chatPrevKey: string;

  private mutationObserver: MutationObserver;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider,
              public alertCtrl: AlertController, public sms: SMS, public toastCtrl : ToastController, public clipboard: Clipboard) {
    
  }

  ionViewWillEnter() {
    this.userID = this.userServices.userInfo['studentID'];
    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
    let backAction = this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
      backAction();
    }, 2)
    this.af.object('/bugRoom').subscribe( (data) => {
      this.lastChatDate = data['lastChatDate'];
    });
    this.chats = this.af.list('/bugChats');
    //Display 관련
    this.content.resize();
  }

  //기존 DB에 있는 것들을 필드를 추가 하거나 수정할 때 사용
  fieldModify(){
    console.log('click')
    var count = 0;
    var date = '2019-02-16';
    var roomName = 'taxiChatrooms';
    this.af.list(`/${roomName}/${date}`).subscribe( room => {
      room.forEach( data => {
        data['carrierS'] = 0;
        data['carrierL'] = 0;
        this.af.object(`/${roomName}/${date}/${data.$key}`).set(data);
      })
      count = count + 1;
      console.log(count);
    })
  }

  //수작업으로 아이디 만들때 썼던 함수
  secretFunction(studentID: string, name: string){
    var userInfo: Object = {
      studentID: studentID,
      phone: "",
      email: "",
      korName: name,
      engName: "",
      accountBank: "",
      accountNumber: "",
      isPush: true,
      isNoti: true,
    }
    firebase.auth().createUserWithEmailAndPassword(studentID + '@handong.edu', 'HandongCRA1004')
    .then( newUser => { 
      firebase.database().ref(`/UID/${newUser.uid}/studentID`).set(studentID);
      this.af.object(`/userProfile/${userInfo['studentID']}`).set(userInfo);
      console.log(userInfo);
      console.log(newUser.uid);
    });
  }
  
  send() {
    if(this.chatContent !== '') {
      if(!this.chatPrevTime) {
        this.chatPrevTime = new Date();
      }
      this.chatNowTime = new Date();
      this.newDateMsg();
      firebase.database().ref('/bugChats').push({
        userID: this.userServices.userInfo['studentID'],
        userName: this.userServices.userInfo['korName'],
        content: this.chatContent,
        dateTime: this.chatNowTime.toLocaleString('ko-KR'),
      }).catch(err => {
        console.log(err);
      }).then((data) => {
        if (this.continuousMessage(this.chatNowTime, this.chatPrevTime) && this.chatPrevKey) {
          firebase.database().ref(`/bugChats/${this.chatPrevKey}`).update({
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

  ionViewDidEnter(){ this.content.scrollToBottom(300); }
  ionViewDidLoad(){ 
    this.mutationObserver = new MutationObserver((mutations) => {
    this.content.scrollToBottom();
    });

    this.mutationObserver.observe(this.chatList.nativeElement, {
      childList: true
    });
  } 
  scrollBottom(){ this.content.scrollToBottom(300); }

  newDateMsg(){
    if(this.lastChatDate < this.dateServices.makeStringFromDate(this.chatNowTime)){
      this.lastChatDate = this.dateServices.makeStringFromDate(this.chatNowTime);
      firebase.database().ref(`/bugRoom`).update({
        lastChatDate: this.lastChatDate,
      })
      this.sendNotification(`${this.dateServices.getKYearMonthDay(this.lastChatDate)}`);
    }
  }

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

  sendNotification(msg){
    firebase.database().ref('/bugChats').push({
      userID: 'CRA',
      userName: '운영자',
      content: msg,
      dateTime: new Date().toLocaleString('ko-KR'),
    }).then(() => {
      this.chatContent = "";
    });
  }

  copyToClipboard(content) {
    this.platform.ready();
    if(this.platform.is('cordova')){
      this.clipboard.copy(content);
      let toast = this.toastCtrl.create({
        message: "클립보드에 복사되었습니다.",
        duration: 2000,
        position: "bottom"
      })
      toast.present();
    }
  }
}
