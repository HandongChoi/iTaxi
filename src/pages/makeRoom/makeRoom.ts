import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'makeRoom.html',
})



export class MakeRoomPage {
    start: string = "";
    arrive: string = "";
    arrive2: string ="";
    start_list: Array<{start_list:string, value:string}>;
    swap: string ="";
    startDate: string ="";
    startTime: string = "";       

    constructor(public alertCtrl: AlertController){
        this.start_list = [
            {start_list:'한동대학교', value:'한동대학교'},
            {start_list:'포항역', value:'포항역'},
            {start_list:'양덕', value:'양덕'},
            {start_list:'고속버스터미널', value:'고속버스터미널'},
            {start_list:'시외버스터미널', value:'시외버스터미널'},
            {start_list:'북부해수욕장', value:'북부해수욕장'},
            {start_list:'육거리',value:'육거리'},
          ];
    }

    showPeopleAlert(){
        let alert = this.alertCtrl.create({
            cssClass:'custom-alert',
            buttons:[
                {
                    cssClass:"people-button",                 
                },
                {
                    cssClass:"people-two-button",
                },
                {
                    cssClass:"people-three-button",
                },
                {
                    cssClass:"people-four-button",
                },
            ]
            
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                console.log("출발지: " + this.start + " 도착지: " + this.arrive);
                console.log("출발시간: " + this.startTime + " 출발날짜: " + this.startDate);
                console.log(data);
            }
            
        });
        alert.setTitle('탑승인원');
        alert.present();
    };

    labelClick(){
        this.arrive = "한동대학교";
    }

    swap_position(){
            this.swap = this.start;
            this.start = this.arrive;
            this.arrive = this.swap; 
    };
    
    showRadioAlert(){
        let alert = this.alertCtrl.create();
        alert.setTitle('탑승인원');
        alert.addInput({
            type: 'radio',
            label: '2명',
            value: '2',
            checked: true,
        });
        alert.addInput({
            type: 'radio',
            label: '3명',
            value: '3',
        });
        alert.addInput({
            type: 'radio',
            label: '4명',
            value: '4',
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                if (this.arrive2)
                    this.arrive = this.arrive2;

                console.log("출발지: " + this.start + " 도착지: " + this.arrive);
                console.log("출발시간: " + this.startTime + " 출발날짜: " + this.startDate);
                console.log(data);
            }
            
        });
        alert.present();
    };

}