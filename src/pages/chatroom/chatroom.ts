import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, AlertController, Alert } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { MainPage } from '../../pages/main/main';

import { UsersProvider } from '../../providers/users/users';
import { DateProvider } from '../../providers/date/date';
import { RoomsProvider } from '../../providers/rooms/rooms';

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatRoomPage {

  @ViewChild(Content) content: Content;

  chats: FirebaseListObservable<any[]>;
  room: Object; //오브젝트와 파베오브젝트로 형태로 올 수 있는데 둘다 Object type이다.
  participants: Array<Object> = [];
  chatContent: string;
  roomHost: string;
  userID: string;
  displayDate: string;
  displayTime: string;
  accountBank: string;
  accountNumber: string;
  price: number;

  chatPrevTime: any;
  chatNowTime: any;
  chatPrevKey: string;

  index: number = -1;
  roomKey: string;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase, public navParams: NavParams, public platform:Platform,
              public roomServices: RoomsProvider, public dateServices: DateProvider, public userServices: UsersProvider,
              public alertCtrl: AlertController) {
    //시간 관련 장소에서는 늘 현재 시간으로 다시 셋팅하기.
    this.dateServices.setNow();
    
    //Data loading    
    //이거는 makeRoom에서 room을 보낼때 roomKey를 보내는데 이 방법이 서버 접근을 덜해서 서버 비용 감면효과 + 속도 향상이라 그렇게 짰다.
    this.room = navParams.data.room;
    if(navParams.data.roomKey == undefined){ //기존 멤버 입장
      this.roomKey = navParams.data.room.$key
    } else{ //처음으로 방에 진입
      this.roomKey = navParams.data.roomKey;
    }
    this.chats = af.list('/chats/' + this.roomKey);
    this.userID = this.userServices.userInfo['studentID'];

    //Display 관련
    this.displayDate = this.dateServices.getKMonthDay(this.room['departDate']);
    this.displayTime = this.room['departTime'];
    this.roomHost = this.room['host'];
    //호스트의 계좌정보
    this.af.object('/userProfile/' + this.roomHost).subscribe( data => {
      let userProfile = data;
      this.accountBank = userProfile['accountBank'];
      this.accountNumber = userProfile['accountNumber'];
    })

    /////////////////////////////////// 문제의 지점 ///////////////////////////////////////
    //지금 participants에 관한 정보가 object라서 실시간 업데이트가 안 되고 있다.
    for(let user of this.room['participants']){
      af.list(`/userProfile`, {
        query: {
          orderByChild: 'studentID',
          equalTo: user
        }
      }).subscribe(user => {
        //user[0]만 하면 모든 유저의 정보가 들어갈까? 나중에 복수 테스트를 꼭 해야된다.
        this.participants.push(user[0]);
        //이거는 스크롤을 가장 밑으로 옮기는걸까? 채팅방에 이게 필요할 것 같다. 맞으면 다른 곳에도 적용해보자.
        this.scrollBottom();
      });
    }
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

        this.chatContent = "";
        this.scrollBottom();
      });
    }
  }

  quit(transportType){
    let alert = this.alertCtrl.create({
      title: "방 나가기",
      message: "정말로 방을 나가시겠습니까?",
      buttons: [{
        text: "Cancel",
        role: "cancel"
      }, {
        text: "OK",
        handler: () => {
          let index = this.room['participants'].indexOf(this.userServices.userInfo['studentID']);
          this.room['participants'].splice(index,1);
          this.room['currentPeople']--;
          this.participants = this.room['participants'];
          if(this.room['currentPeople'] <= 0){ //방 삭제의 경우
            this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).remove();
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
          } else{
            if(this.room['host'] == this.userID){ //기존 방장이 나간 경우
              if(transportType=='taxi'){ //택시일 경우 방장을 넘김
                let newHost = this.af.object(`/userProfile/${this.room['participants'][0]}`);
                this.room['host'] = newHost['studentID']; 
                this.room['hostName'] = newHost['korName'];
              } else if(transportType == 'carpool'){ // 카풀일 경우 방 삭제
                this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
                for(let i = 0; i < this.participants.length; i++){this.af.object(`/rideHistory/${this.room['participants'][i]}/${this.roomKey}`).remove();}
                this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).remove();
              }
            }
            let index = this.room['devTokens'].indexOf(this.userServices.userInfo['devToken']);
            this.room['devTokens'].splice(index,1);
            this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).update(this.room);
            for(let i = 0; i < this.participants.length; i++){this.af.object(`/rideHistory/${this.room['participants'][i]}/${this.roomKey}`).update(this.room);}
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
            this.sendNotification(`${this.userServices.userInfo['korName']}님이 나가셨습니다.`);
          }
          this.navCtrl.setRoot(MainPage);
        }
      }]
    });
    alert.present();
  }

  payment(transportType){
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
      }, {
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
            // TODO: 아직 계좌정보를 입력하지 않았을 경우를 처리해줘야 함.
            let msg = `${money}원
            ${this.userServices.userInfo['accountBank']} ${this.userServices.userInfo['accountNumber']}으로 입금해주시면 됩니다.`
            this.sendNotification(msg);
          }}
      }]
    });
    let alert = this.alertCtrl.create({
      title: "계좌정보 입력",
      inputs: [{
          name: 'bank',
          placeholder: '은행정보를 입력하세요.'
        },{
          name: "accountNumber",
          placeholder: "계좌번호를 입력하세요."
        }],
      buttons: [{
        text : "OK",
        handler : ( data ) => {
          if(transportType == "carpool"){
            this.af.object(`/userProfile/${this.roomHost}`).update({
              accountBank : data.bank,
              accountNumber : data.accountNumber
            }).then(() => {
              this.sendNotification(`${this.accountBank} ${this.accountNumber}로 ${this.room['price']}원씩 보내주세요.`);
            });
          } else if(transportType == "taxi"){
            this.af.object(`/userProfile/${this.userServices.getStudentID()}`).update({
              accountBank : data.bank,
              accountNumber : data.accountNumber
            }).then(() => {
              paymentAlert.present();
            })}
        }
      }]
    });
    if(transportType == 'carpool'){
      if(this.accountBank == "" || this.accountNumber == ""){ // 계좌정보가 없을 때
        alert.present();
      } else
        this.sendNotification(`${this.accountBank} ${this.accountNumber}로 ${this.room['price']}원씩 보내주세요.`);
    } else if(transportType == 'taxi'){
      if(this.userServices.userInfo['accountBank'] == "" || this.userServices.userInfo['accountNumber'] == ""){
        alert.present();
      } else paymentAlert.present();
    }
  }

  sendNotification(msg){
    this.af.list('/chats/' + this.roomKey).push({
      userID: 'CRA',
      userName: 'CRAang',
      content: msg,
      dateTime: new Date().toLocaleString('ko-KR'),
    }).then(() => {
      this.chatContent = "";
      this.scrollBottom();
    });
  }

  ionViewDidLoad(){ console.log("chatroom loaded"); }
  scrollBottom(){ this.content.scrollToBottom(300); }
  show(index) {
    if(this.index == index){
      this.index = -1;
    } else{
      this.index = index;
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

    if (nowDay == prevDay && nowHour == prevHour && nowMin == prevMin) {
      return true;
    }
    return false;
  }
}