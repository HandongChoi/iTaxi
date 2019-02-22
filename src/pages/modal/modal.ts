import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  room: object;
  departDate: String = "";
  departTime: String = "";
  depart: String = "";
  arrive: String = "";
  roomCarrierS: number = 0;
  roomCarrierL: number = 0;
  selectedCarrierS: number = 0;
  selectedCarrierL: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.room = this.navParams.get('room');
    this.departDate = this.room['departDate'];
    this.departTime = this.room['departTime'];
    this.depart = this.room['depart'];
    this.arrive = this.room['arrive'];
    this.roomCarrierS = this.room['carrierS'];
    this.roomCarrierL = this.room['carrierL'];
  }
  
  //modal이 닫힐때 data는 밑에 방식으로 넘겨줘서 list에서 받게 된다.
  closeModal(){    
    let data = {carrierS: this.selectedCarrierS, carrierL: this.selectedCarrierL};
    this.viewCtrl.dismiss(data);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  carrierCapacityCheck(carrier, carrierSize){
    //ver1.0과 2.0의 호환을 위한 디펜스코드
    if(isNaN(this.roomCarrierS)) this.roomCarrierS = 0;
    if(isNaN(this.roomCarrierL)) this.roomCarrierL = 0;
    
    var carrierCapacity = 3 - (this.roomCarrierS + this.roomCarrierL);
    var sumOfCarrier = carrierSize == 'S' ?  carrier + this.selectedCarrierL : this.selectedCarrierS + carrier;
    if(sumOfCarrier <= carrierCapacity){
      carrierSize == 'S' ? this.selectedCarrierS = carrier : this.selectedCarrierL = carrier;
    }else{
      let alert = this.alertCtrl.create({
        message: "트렁크에 캐리어는 최대 3개만 실을 수 있어요 T.T",
        buttons: [{
          text: '확인',
          handler: () => {}
        }]
      });
      alert.present();
    }
  }
}
