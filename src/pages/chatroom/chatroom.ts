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
  
  participants: Array<Object> = [];
  chatContent: string;
  roomHost: string;
  userID: string;
  displayDate: string;
  displayTime: string;
  accountBank: string;
  accountNumber: string;
  price: number;

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
      this.sendNotification(`${this.userServices.userInfo['korName']}님이 입장하셨습니다.`);
    }
    this.chats = af.list('/chats/' + this.roomKey);
    this.userID = this.userServices.userInfo['studentID']; 

    //Display 관련
    this.displayDate = this.dateServices.getKMonthDay(this.room['departDate']);
    this.displayTime = this.room['departTime'];
    this.roomHost = this.room['host'];

    //접속한 user가 그 채팅방의 목록에 있는지 없는지 여부 확인 하고 user들 정보를 관리.
    //방 참가자들에 바로 유저 object를 넣어도 될 것 같지만 파베의 특성이 얕은 db출력이 빠르므로 속도측면에서
    //번거롭더라도 아래와 같은 구조를 지니고 있다.
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
    if(this.chatContent !== ''){
      firebase.database().ref('/chats/' + this.roomKey).push({
        userID: this.userServices.userInfo['studentID'],
        userName: this.userServices.userInfo['korName'],
        content: this.chatContent,
        dateTime: new Date().toLocaleString(),
      }).then(() => {
        this.chatContent = "";
        this.scrollBottom();
      });
    }
  }

  quitCarpool(){
    let alert = this.alertCtrl.create({
      title: "방 나가기",
      message: "정말로 방을 나가시겠습니까?",
      buttons: [{
        text: "Cancel",
        role: "cancel"
      }, {
        text: "OK",
        // 나가기 버튼을 눌렀을 때에도 방장이 방을 파토내면 방 자체를 지워야 되겠다. 
        // 지금의 로직상은 택시카풀을 기준으로 방장이 나가면 다음 사람이 방장이 되는건데 
        // 카풀은 그게 아니라 방 자체가 터져야지 맞는 것 같다.
        // 방이 터진다는 말은 방 참가 했는 모든 인원들의 ridehistory역시 지워야 됨을 의미한다.
        handler: () => {
          let index = this.room['participants'].indexOf(this.userServices.userInfo['studentID']);
          this.room['participants'].splice(index,1);
          this.room['currentPeople']--;
          if(this.room['host'] == this.userID){
            this.participants = this.room['participants'];
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
            for(let i = 0; i < this.participants.length; i++){this.af.object(`/rideHistory/${this.room['participants'][i]}/${this.roomKey}`).remove();}
            this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).remove();
          }else{
            let index = this.room['devTokens'].indexOf(this.userServices.userInfo['devToken']);
            this.room['devTokens'].splice(index,1);
            this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).update(this.room);
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).update(this.room);
            this.sendNotification(`${this.userServices.userInfo['korName']}님이 나가셨습니다.`);
          }
          this.navCtrl.setRoot(MainPage);
        }
      }]
    });
    alert.present();
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
          let index = this.room['participants'].indexOf(this.userServices.userInfo['studentID']);
          this.room['participants'].splice(index,1);
          this.room['currentPeople']--;
          if(this.room['currentPeople'] <= 0){
            this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).remove();
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).remove();
          }else{
            if(this.room['host'] == this.userID){ this.room['host'] = this.room['participants'][0]; }
            let index = this.room['devTokens'].indexOf(this.userServices.userInfo['devToken']);
            this.room['devTokens'].splice(index,1);
            this.af.object(`/${this.room['transportType']}Chatrooms/${this.room['departDate']}/${this.roomKey}`).update(this.room);
            this.af.object(`/rideHistory/${this.userID}/${this.roomKey}`).update(this.room);
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
              title:"",
              message:"",
            });
            error.present();
          }else{
            let money: number = Math.round(data.price / data.people / 100) * 100; //여기서 십원 자리수에서 반올림
            let msg = `${money}원
            ${this.userServices.userInfo['accountBank']} ${this.userServices.userInfo['accountNumber']}으로 입금해주시면 됩니다.`
            this.sendNotification(msg);
          }
        }
      }]
    });
    alert.present();
  }

  paymentCarpool(){
    this.af.object('/userProfile/' + this.roomHost).subscribe( data => {
      let userProfile = data;
      this.accountBank = userProfile['accountBank'];
      this.accountNumber = userProfile['accountNumber'];
    })
    let alert = this.alertCtrl.create({
      // 이미 돈을 줘야 하는 사람이 정해져있다. 따라서 정산하기 버튼을 누르면 입력창이 뜨는게 아니라
      // 방장의 계좌 정보와 가격을 띄어야 한다
      title: "정산하기",
      message: `${this.accountBank} ${this.accountNumber}로
                ${this.room['price']}원씩 보내주세요.`,
      buttons:[{
        text: "Ok",
        role: "cancel"
      }]
    });
    this.sendNotification(`${this.accountBank} ${this.accountNumber}로 ${this.room['price']}원씩 보내주세요.`);
    alert.present();
  }

  sendNotification(msg){
    firebase.database().ref('/chats/' + this.roomKey).push({
      userID: 'CRA',
      userName: 'CRAang',
      content: msg,
      dateTime: new Date().toLocaleString(),
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
}

