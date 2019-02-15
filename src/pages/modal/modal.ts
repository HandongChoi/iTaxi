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
  currentCarrierS: number = 0;
  currentCarrierL: number = 0;
  carrierS: number = 0;
  carrierL: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.room = this.navParams.get('room');
    this.departDate = this.room['departDate'];
    this.departTime = this.room['departTime'];
    this.depart = this.room['depart'];
    this.arrive = this.room['arrive'];
    this.currentCarrierS = this.room['carrierS'];
    this.currentCarrierL = this.room['carrierL'];
  }
  
  closeModal(){    
    let data = {carrierS: this.carrierS, carrierL: this.carrierL};
    this.viewCtrl.dismiss(data);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  carrierCapacityCheck(carrier, carrierSize){
    var carrierCapacity = 3;
    var sumOfCarrier = carrierSize == 'S' ?  carrier + this.carrierL : this.carrierS + carrier; 
    if(sumOfCarrier <= carrierCapacity){
      carrierSize == 'S' ? this.carrierS = carrier : this.carrierL = carrier;
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
