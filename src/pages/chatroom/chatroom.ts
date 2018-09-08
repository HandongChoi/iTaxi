import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, AlertController, List } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MainPage } from '../../pages/main/main';
import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { PersonalInfoPage } from '../personal-info/personal-info';
import { SMS } from '@ionic-native/sms';

import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatRoomPage {

  @ViewChild(Content) content: Content;
  @ViewChild(List, {read: ElementRef}) chatList: ElementRef;


  chats: FirebaseListObservable<any[]>;
  room: Object; //오브젝트와 파베오브젝트로 형태로 올 수 있는데 둘다 Object type이다.
  participants: Array<Object> = [];
  chatContent: string;
  roomHost: string;
  userID: string;
  displayDate: string;
  displayTime: string;

  chatPrevTime: any;
  chatNowTime: any;
  chatPrevKey: string;

  index: number = 0;
  roomKey: string;
  private mutationObserver: MutationObserver;


  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider,
              public alertCtrl: AlertController, public sms: SMS, public http: Http) {
    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();

    //Data loading    
    //방에서 바뀌지 않는 정보들을 빠르게 받아오고 굳이 db의 정보에 의존하지 않는 것은 db 접근 없이 사용하기 위해서 parameter로 받는다.
    this.room = navParams.data.room;
    if(navParams.data.roomKey === undefined){ //기존 멤버 입장
      this.roomKey = navParams.data.room.$key
    } else { //처음 방 만들고 방 진입 할 때
      this.roomKey = navParams.data.roomKey;
    }
    this.chats = af.list('/chats/' + this.roomKey);
    this.userID = this.userServices.userInfo['studentID'];

    //Display 관련
    this.displayDate = this.dateServices.getKMonthDay(this.room['departDate']);
    this.displayTime = this.room['departTime'];
    this.roomHost = this.room['host'];

    af.object(`/${this.room['transportType']}Chatrooms/${navParams.data.room['departDate']}/${this.roomKey}`)
      .subscribe((room) => {
        this.participants = [];
        //여기서 공부거리 하나 던저 주면 undfined와 null이 ==일때는 같다고 인정이 되고 ===일때만 다르다고 인정이 된다.
        //지금 여기서 방 나갔을 때 방 정보가 하나라도 없으면 null값이 오고 방 정보가 있으면 undefined로 온다.
        //아래 구조가 변형되면 68line에서 for구문의 room[]을 못 읽어와서 error가 발생한다.
        if(room.$value === null){
          // console.log('방이 remove해서 사라졌을 때 여기 온다.')
        }else{ // 방 정보가 여전히 있을 때.
          //아래에서 방 정보를 새로 호출하는것은 비동기 안에서 (1/4)를 실시간으로 바꿔주기 위해서다.
          this.room = room;
          for(let studentID of room['participants']){
            af.object(`/userProfile/${studentID}`).subscribe(user => {
              this.participants.push(user);
            })
          }
        }
        // this.scrollBottom();
    })
    this.chatPrevKey = null;
    // 이미 만들어진 방에 처음 입장했을 때, 방에 noti를 날린다.
    if (navParams.data.isFirst == true) this.sendNotification(`${this.userServices.userInfo['korName']}님이 입장하셨습니다.`);
  }
  send() {
    if(this.chatContent !== '') {
      if(!this.chatPrevTime) {
        this.chatPrevTime = new Date();
      }
      this.chatNowTime = new Date();

      firebase.database().ref('/chats/' + this.roomKey).push({
        userID: this.userServices.userInfo['studentID'],
        userName: this.userServices.userInfo['korName'],
        content: this.chatContent,
        dateTime: this.chatNowTime.toLocaleString('ko-KR'),
      }).catch(err => {
        console.log(err);
      }).then((data) => {
        // 한 유저가 1분 이내 보낸 메세지들은 가장 마지막 메세지만 날짜를 표시함
        if (this.continuousMessage(this.chatNowTime, this.chatPrevTime) && this.chatPrevKey) {
          firebase.database().ref(`/chats/${this.roomKey}/${this.chatPrevKey}`).update({
            dateTime: this.chatPrevTime.toLocaleString('ko-KR')+" [continuousMessage]",
          })
        }
        this.chatPrevTime = this.chatNowTime;
        this.chatPrevKey = data['key'];

        this.pushNotification(this.userServices.userInfo['korName'], this.chatContent, false);
        this.chatContent = "";
        this.scrollBottom();
      });
    }
  }

  sendSMS(phonenumber){
    this.platform.ready();
    try{
      this.sms.send(phonenumber, '아이택시에서 연락드립니다.');
      let alert = this.alertCtrl.create({
        title: "문자 전송",
        message: "메시지가 전송되었습니다."
      })
      alert.present();
    }
    catch (e) {
      console.log("error");
    }
    
  }

  quit(transportType: string){
    let alert = this.alertCtrl.create({
      title: "방 나가기",
      message: "정말로 방을 나가시겠습니까?",
      buttons: [{
        text: "Cancel",
        role: "cancel"
      }, {
        text: "OK",
        handler: () => {
          //지금 채팅 기록은 안 지우고 있는데 일단 이거는 나중에 생각하자.
          //무슨 경우라도 자신 rideHistory는 지워야한다.
          this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
          if(this.userID == this.room['host']){
            if(transportType == 'carpool'){ //유저들 rideHistory 삭제 후 방 삭제
              this.sendNotification(`카풀 모집자 ${this.room['hostName']}님이 나갔습니다.`);
              this.sendNotification(`방이 사라졌으므로 방을 나가시면 다시 들어오실 수 없습니다.`);
              this.room['participants'].forEach(studentID => {
                this.af.object(`/rideHistory/${studentID}/${this.roomKey}`).remove();
              })
              this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).remove();
            }else if(transportType == 'taxi'){
              if(this.room['currentPeople'] == 1){ //방장 혼자서 방 있으니깐 자기 관련 db 삭제
                this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).remove();
              } else{ //다른 사람에게 방장 넘기고 방 업데이트
                this.removeUserFromRoom(this.room);
                this.af.object(`/userProfile/${this.room['participants'][0]}`).subscribe( newHost => {
                  this.room['host'] = newHost['studentID']; 
                  this.room['hostName'] = newHost['korName'];
                  this.roomUpdate(this.room, this.roomKey, `${this.userServices.userInfo['korName']}님이 나가셨습니다.`);
                  this.sendNotification(`${this.room['hostName']}님이 새로운 방장이 되셨습니다.`);
                });
              }
            }
          }else{ //방장은 항상 존재하니깐 자신의 정보 지우고 방 업데이트
            this.removeUserFromRoom(this.room);
            this.roomUpdate(this.room, this.roomKey, `${this.userServices.userInfo['korName']}님이 나가셨습니다.`);
          }
          this.navCtrl.setRoot(MainPage);
        }
      }]
    });
    alert.present();
  }

  removeUserFromRoom(room){
    let index = room['participants'].indexOf(this.userServices.userInfo['studentID']);
    room['participants'].splice(index,1);
    room['currentPeople']--;
    
    index = room['devTokens'].indexOf(this.userServices.userInfo['devToken']);
    room['devTokens'].splice(index,1);        
  }

  roomUpdate(updatedRoom, roomKey, msg){
    this.af.object(`/${updatedRoom['transportType']}Chatrooms/${updatedRoom['departDate']}/${roomKey}`).update(updatedRoom);
    updatedRoom['participants'].forEach(studentID => {
      this.af.object(`/rideHistory/${studentID}/${roomKey}`).update(updatedRoom);
    });
    this.sendNotification(msg);
  }

  payment(transportType: string){
    let paymentAlert = this.alertCtrl.create({
      title: "정산하기",
      message: "10원 단위에서 반올림하여 정산하시는 분에게 차익을 남기도록 하였습니다.",
      inputs: [{
          name: 'people',
          placeholder: '합승한 인원수를 입력하세요.'
        },{
          name: 'price',
          placeholder: '결제된 총 금액을 입력하세요.'
      }],
      buttons: [{
        text: "Cancel",
        role: "cancel"
      },{
        text: "OK",
        handler: ( data ) => {
          if(data.price <= 0 || data.people <= 0){
            let error = this.alertCtrl.create({
              title:"입력정보 오류",
              message:"올바른 가격과 인원을 입력해주세요.",
            });
            error.present();
          }else{
            let money: number = Math.round(data.price / data.people / 100) * 100; //여기서 십원 자리수에서 반올림
            let msg = `${this.userServices.userInfo['accountBank']} ${this.userServices.userInfo['accountNumber']} 으로 ₩${money}원 입금해주시면 됩니다.`
            this.sendNotification(msg);
          }
        }
      }]
    });

    let accountAlert = this.alertCtrl.create({
      title: "계좌정보 입력",
      message: "등록된 계좌 정보가 없습니다.<br>설정 페이지에서 계좌 정보를 입력해주세요.",
      buttons: [{
        text : "OK",
        handler : () => {
          this.navCtrl.push(PersonalInfoPage);
        }
      }]
    });

    if(this.userServices.userInfo['accountBank'] == '' || this.userServices.userInfo['accountNumber'] == ''){
      accountAlert.present();
    }else if(transportType == 'carpool'){
      this.sendNotification(`${this.userServices.userInfo['accountBank']} ${this.userServices.userInfo['accountNumber']}로 ${this.room['price']}원씩 보내주세요.`);
    }else if(transportType == 'taxi'){
      paymentAlert.present();
    }
  }

  sendNotification(msg){
    this.af.list('/chats/' + this.roomKey).push({
      userID: 'CRA',
      userName: 'CRAang',
      content: msg,
      dateTime: new Date().toLocaleString('ko-KR'),
    }).then(() => {
      this.pushNotification('알림', msg, true);
      this.chatContent = "";
    });
  }

  pushNotification(headings, msg, isNotice?: boolean) {
    var oneSignalTokens = [];
    for (let i = 0; i < this.participants.length; i++) {
      // 본인이 아닌 다른 사람에게 모두 push
      if (this.participants[i]['studentID'] != this.userServices.userInfo['studentID']) {
        // TODO: 나중에 || this.participants[i]['isNoti'] == '' 지우고 배포해야함
        if (isNotice == true && this.participants[i]['isNoti'] == true) {
          for(let idx in this.participants[i]['OneSignal']) {
            oneSignalTokens.push(this.participants[i]['OneSignal'][idx])
          }
        }
        else if (isNotice == false && this.participants[i]['isPush'] == true) {
          for(let idx in this.participants[i]['OneSignal']) {
            oneSignalTokens.push(this.participants[i]['OneSignal'][idx])
          }
        }
     }
    }
    var parameter = {
      'app_id': 'f4229499-d7fe-48bd-a3d9-6b64cfcb4ce2',
      'include_player_ids': oneSignalTokens,
      'headings': {'en': headings},
      'contents': {'en': msg},
    }
    
    this.http.post('https://onesignal.com/api/v1/notifications', parameter).subscribe(data => {
      // console.log(data);
      oneSignalTokens = [];
    })
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
  show(index) { this.index = (this.index == index) ? -1 : index; }
  
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