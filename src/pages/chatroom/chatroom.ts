import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, AlertController } from 'ionic-angular';
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
  roomData: any;
  participants: Array<Object> = [];
  chatContent: string;

  userID: string;
  displayDate: string;
  displayTime: string;

  chatPrevTime: string;
  chatNowTime: string;
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
    this.roomData = this.room;

    if(navParams.data.roomKey == undefined){ //기존 멤버 입장
      this.roomKey = navParams.data.room.$key
    } else { //처음 방 만들고 방 진입 할 때
      this.roomKey = navParams.data.roomKey;
    }
    this.chats = af.list('/chats/' + this.roomKey);
    this.userID = this.userServices.userInfo['studentID'];
    af.object(`/${navParams.data.room['transportType']}Chatrooms/${navParams.data.room['departDate']}/${this.roomKey}`).subscribe((data) => {
      // 방정보가 바뀔 때마다 participants를 훑어주면서 최신화함,
      // 그냥 방 DB에 유저 DB를 다 때려다 박는 것도 좋은 방법일듯...
      this.roomData = data;

      this.participants = [];
      for(let user of this.roomData['participants']){
        af.object(`/userProfile/${user}`).subscribe(data => {
          this.participants.push(data);
        })
      }
    })

    //Display 관련
    this.displayDate = this.dateServices.getKMonthDay(this.roomData['departDate']);
    this.displayTime = this.roomData['departTime'];
  }

  send() {
    if(this.chatContent !== '') {
      if(!this.chatPrevTime) {
        this.chatPrevTime = new Date().toLocaleString('ko-KR');
      }
      this.chatNowTime = new Date().toLocaleString('ko-KR');

      firebase.database().ref('/chats/' + this.roomKey).push({
        userID: this.userServices.userInfo['studentID'],
        userName: this.userServices.userInfo['korName'],
        content: this.chatContent,
        dateTime: this.chatNowTime,
      }).catch(err => {
        console.log(err);
      }).then((data) => {
        // 한 유저가 1분 이내 보낸 메세지들은 가장 마지막 메세지만 날짜를 표시함
        if (this.continuousMessage(this.chatNowTime, this.chatPrevTime) && this.chatPrevKey) {
          firebase.database().ref(`/chats/${this.roomKey}/${this.chatPrevKey}`).update({
            dateTime: this.chatPrevTime+" [continuousMessage]",
          })
        }
        this.chatPrevTime = this.chatNowTime;
        this.chatPrevKey = data['key'];

        this.chatContent = "";
        // this.scrollBottom();
      });
    }
  }

  quit(){
    let alert = this.alertCtrl.create({
      title: "방 나가기",
      message: "정말로 방을 나가시겠습니까?",
      buttons: [{
        text: "Cancel",
        role: "cancel"
      }, {
        text: "OK",
        handler: () => {
          ////////////////////////////////문제 고쳤을 때 봐야 할 곳///////////////////////////////
          // 문제의 지점 로직이 바뀌면 반드시 여기도 바뀌어야 될 것이다///////////////////////////////////
          let index = this.roomData['participants'].indexOf(this.userServices.userInfo['studentID']);
          this.roomData['participants'].splice(index,1);
          this.roomData['currentPeople']--;
          
          if(this.roomData['currentPeople'] <= 0){ //방 삭제의 경우
            this.af.object(`/${this.roomData['transportType']}Chatrooms/${this.roomData['departDate']}/${this.roomKey}`).remove();
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
          }else{
            if(this.roomData['host'] == this.userID){ //기존 방장이 나간 경우
              this.af.object(`/userProfile/${this.roomData['participants'][0]}`).subscribe(data => {
                this.roomData['host'] = data['studentID']; 
                this.roomData['hostName'] = data['korName'];
                // this.sendNotification(`${this.roomData['hostName']}님이 방장이 되셨습니다.`);
              });
            }

            let index = this.roomData['devTokens'].indexOf(this.userServices.userInfo['devToken']);
            this.roomData['devTokens'].splice(index,1);
            // 현재 방 정보 업데이트
            this.af.object(`/${this.roomData['transportType']}Chatrooms/${this.roomData['departDate']}/${this.roomKey}`).update(this.roomData);
            // 남아있는 사람들의 rideHistory 업데이트
            this.roomData['participants'].forEach(studentID => {
              this.af.object(`/rideHistory/${studentID}/${this.roomKey}`).set(this.roomData);
            })
            // 나간사람의 rideHistory 삭제
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
            this.sendNotification(`${this.userServices.userInfo['korName']}님이 나가셨습니다.`);
          }
          this.navCtrl.setRoot(MainPage);
        }
      }]
    });
    alert.present();
  }

  payment(){
    let alert = this.alertCtrl.create({
      title: "정산하기",
      message: "10원 단위에서 반올림하여 정산하시는 분에게 차익을 남기도록 하였습니다.",
      inputs: [
        {
          name: 'people',
          placeholder: '합승한 인원수를 입력하세요.'
        },
        {
          name: 'price',
          placeholder: '결제된 총 금액을 입력하세요.'
        }
      ],
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
          }
        }
      }]
    });
    alert.present();
  }

  sendNotification(msg){
    this.af.list('/chats/' + this.roomKey).push({
      userID: 'CRA',
      userName: 'CRAang',
      content: msg,
      dateTime: new Date().toLocaleString('ko-KR'),
    }).then(() => {
      this.chatContent = "";
      // this.scrollBottom();
    });
  }

  ionViewDidLoad(){ console.log("chatroom loaded"); }
  // scrollBottom(){ this.content.scrollToBottom(300); }
  show(index) {
    if (this.index == index) {
      this.index = -1;
    } else {
      this.index = index;
    }
  }
  continuousMessage(nowChat, prevChat) {
    /**
     * 1분 내에 연속된 메시지 발생함을 알리는 함수
     * 날짜 형식 'ko-KR' 2018. 8. 22. 오후 5:14:56
     */
    var nowTime = nowChat.split(" ");
    nowTime = nowTime[4].split(":");
    var prevTime = prevChat.split(" ");
    prevTime = prevTime[4].split(":");

    if (nowTime[0] == prevTime[0] && nowTime[1] == prevTime[1]) {
      return true;
    }
    return false;
  }
}

