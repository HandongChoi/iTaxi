import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ModalPage');
  // }

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

  setCarrierNum(num, size){
    if(size == 'S'){
      if(num + this.carrierL + this.currentCarrierS + this.currentCarrierL < 4){
        this.carrierS = num;
      }
    }else{
      if(num + this.carrierS + this.currentCarrierS + this.currentCarrierL < 4){
        this.carrierL = num;
      }
    }   
  }
}
