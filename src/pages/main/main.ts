import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaxiListPage } from '../taxi-list/taxi-list';
import { PersonalInfoPage } from '../personal-info/personal-info';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  dates: FirebaseListObservable<any[]>;
  nowDate: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
  dates_array: Array<any> = [];
  days: Array<string> = [];
  selectedDate: Date;
  currentDate: Date = new Date();

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    let userInfo = firebase.auth().currentUser;
    this.user = firebase.auth().currentUser.uid;
    this.user_id = userInfo.email;
    console.log("Main user : "+this.user);
    console.log("Main user_id :"+this.user_id);

    let parsedUserId = this.stringParser(this.user_id);
    this.dates = af.list('/rideHistory/'+parsedUserId);
    this.dates.subscribe(data =>{
      this.dates_array.push(data);
    });

  }

  stringParser(sentence){
    let parsedID = sentence.replace('@', '');
    parsedID = parsedID.replace('.', '');

    return parsedID;
  }

  checkDate(date){
    this.selectedDate = new Date(date.roomDate+"T"+date.roomTime+":00");
    return this.selectedDate >= this.currentDate;
  }
  goTaxiListPage(){
    this.navCtrl.setRoot(TaxiListPage, {user_id: this.user});
    console.log("goTaxiListPage at main.ts");
  }

  goCarpoolListPage(){
    alert('Carpool Page');
    console.log("goCarpoolListPage at main.ts");
  }

  goMyPage(){
    this.navCtrl.setRoot(PersonalInfoPage, {user_id: this.user});
    console.log("goMyPage at main.ts");
  }
}
