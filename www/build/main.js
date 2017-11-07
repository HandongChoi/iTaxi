webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taxi_list_taxi_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainPage.prototype.openTaxiList = function () {
        //manages the stack
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__taxi_list_taxi_list__["a" /* TaxiListPage */]);
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/main/main.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <button ion-button end menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>i-Taxi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <button ion-item color="light2" style="font-size: 1.3rem" (click)="openTaxiList()" >\n    <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n    공지사항입니다. 공지사항입니다.\n  </button>\n\n  <ion-card (click)="openTaxiList()">\n    <img src="../../assets/imgs/taxi.png"/>\n    <div class="card-title">i-Taxi</div>\n    <div class="card-subtitle">타러가기</div>\n  </ion-card>\n  <ion-card (click)="openTaxiList()">\n    <img src="../../assets/imgs/taxi.png"/>\n    <div class="card-title">i-Taxi</div>\n    <div class="card-subtitle">타러가기</div>\n  </ion-card>\n\n  <ion-buttons>\n  <!-- full button -->\n      <!-- <button ion-button large full icon-left (click)="openTaxiList()" >\n        <ion-icon name="car"></ion-icon>\n        i-Taxi 탑승\n      </button>\n      <button ion-button large full color="secondary" icon-left (click)="openTaxiList()" >\n        <ion-icon name="car"></ion-icon>\n        카풀 탑승\n      </button>\n      <button ion-button large full color="tertiary" icon-left (click)="openTaxiList()" >\n        <ion-icon name="person"></ion-icon>\n        마이페이지\n      </button> -->\n  <!-- round button -->\n    <!-- <ion-grid>\n      <ion-row justify-content-center style="padding: 10px 0; margin-top: 25px">\n        <button ion-button round class="customBtn" icon-left (click)="openTaxiList()" >\n          i-Taxi 탑승\n        </button>\n      </ion-row>\n      <ion-row justify-content-center style="padding: 10px 0">\n        <button ion-button round class="customBtn" color="secondary" icon-left (click)="openTaxiList()" >\n          카풀 탑승\n        </button>\n      </ion-row>\n      <ion-row justify-content-center style="padding: 10px 0">\n        <button ion-button round class="customBtn" color="tertiary" icon-left (click)="openTaxiList()" >\n          마이페이지\n        </button>\n      </ion-row>\n    </ion-grid> -->\n  </ion-buttons>\n\n  <!-- my Ticket -->\n  <ion-card style="border-radius:5px; margin-top:30px">\n    <ion-row style="background-color:#0054a6; color:white; padding:5px 0 5px 15px">\n      2017.9.1 (토)\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 text-center style="border-right: 1px solid #ddd9d9">\n        <h3>Taxi</h3>\n        <p style = "font-size: 9px">현 2/4 명</p>\n      </ion-col>\n      <ion-col text-center>\n        <h3>한동대학교 <ion-icon name="arrow-forward"></ion-icon> 양덕 하나로마트</h3>\n        <p padding-left style = "font-size: 10px">8:30</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color = "primary">\n    <button ion-button end menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>설정</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header> 내정보 </ion-list-header>\n      <ion-item>\n        <ion-row>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/woody.jpeg">\n          </ion-avatar>\n          <h2>류여진</h2> &nbsp; <h4>010-1111-2222</h4>\n        </ion-row>\n        <ion-row justify-content-center>\n              <button ion-button color="primary" small round outline >개인정보 수정</button>\n              <button ion-button color="primary" small round outline >회원탈퇴</button>\n        </ion-row>\n      </ion-item>\n\n    <ion-list-header> PUSH알림 </ion-list-header>\n      <ion-item>\n        <ion-label>메세지 알림</ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>공지 알림</ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n\n    <ion-list-header> 문의 </ion-list-header>\n      <ion-item>\n        hguitaxi@gmail.com\n      </ion-item>\n\n    <ion-list-header> 버전 </ion-list-header>\n      <ion-item>\n        1\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAndSortingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SelectAndSortingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectAndSortingPage = (function () {
    function SelectAndSortingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectOptions = {
            title: '목적지',
            subTitle: '원하시는 목적지를 체크해주세요.',
            mode: 'md'
        };
        console.log("Working?!?!");
    }
    SelectAndSortingPage.prototype.IonChange = function (selectedValue) {
        console.log("Selected:", selectedValue);
        this.e1 = selectedValue;
    };
    SelectAndSortingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectAndSortingPage');
    };
    return SelectAndSortingPage;
}());
SelectAndSortingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-and-sorting',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/select-and-sorting/select-and-sorting.html"*/'<!--\n  Generated template for the SelectAndSortingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>selectAndSorting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Gender</ion-label>\n    <ion-select [selectOptions]="selectOptions" [(ngModel)]="gender" multiple="true">\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Select Hive</ion-label>\n      <ion-select #newSelect [(ngModel)]="carbrand" multiple="true" (ionChange)="IonChange(carbrand)">\n        <ion-option value="Porsche" checked="true">Porsche</ion-option>\n        <ion-option value="Mercedes" >Mercedes</ion-option>\n        <ion-option value="Buggati">Buggati</ion-option>\n        <ion-option value="Lamborghini">Lamborghini</ion-option>\n        <ion-option value="Domster">Domster</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <button menuClose ion-item *ngFor="let time of e1">\n      {{e1}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/select-and-sorting/select-and-sorting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SelectAndSortingPage);

//# sourceMappingURL=select-and-sorting.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/main/main.module": [
		269,
		4
	],
	"../pages/personal-info/personal-info.module": [
		270,
		3
	],
	"../pages/select-and-sorting/select-and-sorting.module": [
		272,
		2
	],
	"../pages/setting/setting.module": [
		271,
		1
	],
	"../pages/taxi-list/taxi-list.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <button ion-button end menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>i-Taxi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>로그인페이지(경원이)</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <button ion-button end menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>i-Taxi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MakeRoomPage = (function () {
    function MakeRoomPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.start = "";
        this.arrive = "";
        this.arrive2 = "";
        this.swap = "";
        this.startDate = "";
        this.startTime = "";
        this.start_list = [
            { start_list: '한동대학교', value: '한동대학교' },
            { start_list: '포항역', value: '포항역' },
            { start_list: '양덕', value: '양덕' },
            { start_list: '고속버스터미널', value: '고속버스터미널' },
            { start_list: '시외버스터미널', value: '시외버스터미널' },
            { start_list: '북부해수욕장', value: '북부해수욕장' },
            { start_list: '육거리', value: '육거리' },
        ];
    }
    MakeRoomPage.prototype.showPeopleAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'custom-alert',
            buttons: [
                {
                    cssClass: "people-button",
                },
                {
                    cssClass: "people-two-button",
                },
                {
                    cssClass: "people-three-button",
                },
                {
                    cssClass: "people-four-button",
                },
            ]
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log("출발지: " + _this.start + " 도착지: " + _this.arrive);
                console.log("출발시간: " + _this.startTime + " 출발날짜: " + _this.startDate);
                console.log(data);
            }
        });
        alert.setTitle('탑승인원');
        alert.present();
    };
    ;
    MakeRoomPage.prototype.labelClick = function () {
        this.arrive = "한동대학교";
    };
    MakeRoomPage.prototype.swap_position = function () {
        this.swap = this.start;
        this.start = this.arrive;
        this.arrive = this.swap;
    };
    ;
    MakeRoomPage.prototype.showRadioAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                if (_this.arrive2)
                    _this.arrive = _this.arrive2;
                console.log("출발지: " + _this.start + " 도착지: " + _this.arrive);
                console.log("출발시간: " + _this.startTime + " 출발날짜: " + _this.startDate);
                console.log(data);
            }
        });
        alert.present();
    };
    ;
    return MakeRoomPage;
}());
MakeRoomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/makeRoom/makeRoom.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Make Room</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-row>\n        <ion-col>\n            <ion-label display="flex" align="center" fixed>출발지</ion-label>\n        </ion-col>\n        <ion-col>\n            <div class="room_button"> \n                <button class="swap-button" ion-button clear large icon-only (click)="swap_position()">\n                    <ion-icon name="swap"></ion-icon>\n                </button>\n            </div>\n        </ion-col>\n        <ion-col>\n            <ion-label align="center" fixed>도착지</ion-label>\n        </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n        <ion-col>\n                <!--<ion-label align="center" fixed>출발지</ion-label>-->        \n                <ion-item>\n                    <ion-select class="my-select" [(ngModel)]="start" interface="popover">\n                        <ion-option *ngFor="let start_list of start_list">{{start_list.start_list}}</ion-option>\n                    </ion-select>\n                </ion-item>\n        </ion-col>\n\n        \n       \n        <ion-col>\n\n                <!--<ion-label align="center" (click)="labelClick()" fixed>도착지</ion-label>--> \n                <ion-item>\n                    <ion-select class="my-select" interface="popover" *ngIf="arrive!=\'직접입력\'" [(ngModel)]="arrive">\n                            \n                        <ion-option value="한동대학교">한동대학교</ion-option>\n                        <ion-option value="포항역">포항역</ion-option>\n                        <ion-option value="양덕">양덕</ion-option>\n                        <ion-option value="고속버스터미널">고속버스터미널</ion-option>\'\n                        <ion-option value="시외버스터미널">시외버스터미널</ion-option>\n                        <ion-option value="북부해수욕장">북부해수욕장</ion-option>\n                        <ion-option value="육거리">육거리</ion-option>\n                        <ion-option value="직접입력" >직접입력</ion-option>\n                               \n                    </ion-select> \n                    <ion-input  style="position:absolute" *ngIf="arrive==\'직접입력\'" [(ngModel)]="arrive2" type="text" placeholder="기타장소"></ion-input>  \n                              \n                </ion-item>\n                 \n        </ion-col>\n    </ion-row>\n    <ion-row>\n            <ion-col>\n                <div class="start-date">\n                        <ion-label align="center" color="primary" fixed>출발날짜</ion-label>\n                    <ion-item>  \n                        \n                        <ion-datetime text-align="center" displayFormat="YYYY MM DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDate"></ion-datetime>\n                    </ion-item>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div class="start-time">\n                        <ion-label align="center" color="primary" fixed>출발시간</ion-label>\n                    <ion-item>\n                            \n                        <ion-datetime text-align="center" displayFormat="h:mm A" pickerFomat="h mm A" [(ngModel)]="startTime"></ion-datetime>\n                    </ion-item>\n                </div>\n            </ion-col>\n    </ion-row>\n    \n    <div class="room_button"> \n        <button class="swap-button" ion-button clear large icon-only (click)="swap_position()">\n            <ion-icon name="swap"></ion-icon>\n        </button>\n    </div>\n\n    <div class="room_button">          \n        <button class="button customBtn" ion-button round (click)="showPeopleAlert()">방만들기</button>\n    </div>\n\n    <div class="room_button">          \n        <button class="button customBtn" ion-button round (click)="showRadioAlert()">방만들기</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/makeRoom/makeRoom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MakeRoomPage);

//# sourceMappingURL=makeRoom.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalInfoPage = (function () {
    function PersonalInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
    };
    return PersonalInfoPage;
}());
PersonalInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal-info',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/personal-info/personal-info.html"*/'<!--\n  Generated template for the PersonalInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>personalInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  개인정보 수정페이지\n</ion-content>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/personal-info/personal-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PersonalInfoPage);

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_and_sorting_select_and_sorting__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_makeRoom_makeRoom__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_taxi_list_taxi_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_personal_info_personal_info__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_taxi_list_taxi_list__["a" /* TaxiListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                iconMode: 'ios',
                mode: 'ios'
            }, {
                links: [
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/select-and-sorting/select-and-sorting.module#SelectAndSortingPageModule', name: 'SelectAndSortingPage', segment: 'select-and-sorting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/taxi-list/taxi-list.module#TaxiListPageModule', name: 'TaxiListPage', segment: 'taxi-list', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_taxi_list_taxi_list__["a" /* TaxiListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_and_sorting_select_and_sorting__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_makeRoom_makeRoom__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_taxi_list_taxi_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Select testing', component: __WEBPACK_IMPORTED_MODULE_7__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */] },
            { title: 'MakeRoom', component: __WEBPACK_IMPORTED_MODULE_8__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */] },
            { title: 'TaxiList', component: __WEBPACK_IMPORTED_MODULE_9__pages_taxi_list_taxi_list__["a" /* TaxiListPage */] },
        ];
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.mainPage = __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */];
        this.listPage = __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */];
        this.taxiListPage = __WEBPACK_IMPORTED_MODULE_9__pages_taxi_list_taxi_list__["a" /* TaxiListPage */];
        this.settingPage = __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.setRoot(page);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/app/app.html"*/'<ion-menu [content]="content"  persistent="true" side="right">\n  <ion-header>\n    <ion-toolbar padding>\n      <ion-title>류여진 님</ion-title>\n      <ion-buttons right >\n        <button ion-button icon-only menuClose (click)="openPage(settingPage)">\n            <ion-icon name="settings" ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-grid style="background-color:#29B5EF; color:white;">\n      <ion-row justify-content-left padding-left style="padding-top:6px">\n        잠만보 (3/4)\n      </ion-row>\n      <ion-row justify-content-center padding-top>\n        10월 25일 09시 45분\n      </ion-row>\n      <ion-row justify-content-center >\n          한동대학교 &nbsp; <ion-icon name="arrow-forward"></ion-icon> &nbsp; 양덕 하나로마트\n      </ion-row>\n      <ion-row padding justify-content-center padding>\n            <button ion-button color="light" small round outline>친구 초대</button>\n            <button ion-button color="light" small round outline >방나가기</button>\n      </ion-row>\n    </ion-grid>\n    <ion-list>\n      <ion-list-header> 택시 </ion-list-header>\n      <button menuClose ion-item class="sidemenu-items" (click)="openPage(mainPage)">조회</button>\n      <button menuClose ion-item class="sidemenu-items" (click)="openPage(homePage)">모집</button>\n      <ion-list-header> 카풀 </ion-list-header>\n      <button menuClose ion-item class="sidemenu-items" (click)="openPage(listPage)">조회</button>\n      <button menuClose ion-item class="sidemenu-items" (click)="openPage(listPage)">모집</button>\n      <ion-list-header> 마이페이지 </ion-list-header>\n      <button menuClose ion-item class="sidemenu-items" (click)="openPage(taxiListPage)">탑승내역</button>\n      <button menuClose ion-item class="sidemenu-items" (click)="openPage(taxiListPage)">내정보수정</button>\n\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button> -->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxiListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TaxiListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaxiListPage = (function () {
    function TaxiListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TaxiListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaxiListPage');
    };
    return TaxiListPage;
}());
TaxiListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-taxi-list',template:/*ion-inline-start:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/taxi-list/taxi-list.html"*/'<!--\n  Generated template for the TaxiListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>iTaxi >> 택시조회</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="content content-sm padding">\n <div class="fixed-content"></div>\n\n<div class="scroll-content">\n\n  <table class = "small-table" bgcolor="#947794">\n    <tbody>\n      <tr>\n        <td><h6> 시간 </h6></td>\n        <td><h6> 출발 ▽ </h6></td>\n        <td><h6> 도착 ▽ </h6></td>\n        <td><h6> 현원 </h6></td>    \n      </tr>\n    </tbody>\n  </table>\n\n  <ion-item-group>\n    <ion-item-divider class="item item-divider item-sm item-divider-md item-md-light item-divider-sm-light" color="light">\n     <ion-label class="label label-sm labels">2017년 12월 21일</ion-label>\n    <div class="button-effect"></div>\n    </ion-item-divider>\n\n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n            <tr>\n              <td><h6>9:50 AM  </h6></td>\n              <td><h6> 한동대</h6></td>\n              <td><h6> 포항역</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  \n    <ion-item class="item item-block item-sm">\n  \n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n            <tr>\n              <td><h6>1:50 PM  </h6></td>\n              <td><h6> 포항역</h6></td>\n              <td><h6> 양덕</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n        </table>\n       </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  \n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n          <tbody>\n            <tr>\n              <td><h6>9:30 PM  </h6></td>\n              <td><h6> 한동대 </h6></td>\n              <td><h6> 고터</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n          <tbody>\n            <tr>\n              <td><h6>11:00 PM  </h6></td>\n              <td><h6> 한동대 </h6></td>\n              <td><h6> 고터</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n\n  </ion-item-group>\n\n <ion-item-group>\n    <ion-item-divider class="item item-divider item-sm item-divider-md item-md-light item-divider-sm-light" color="light">\n     <ion-label class="label label-sm labels">2017년 12월 21일</ion-label>\n    <div class="button-effect"></div>\n    </ion-item-divider>\n\n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n            <tr>\n              <td><h6>9:50 AM  </h6></td>\n              <td><h6> 한동대</h6></td>\n              <td><h6> 포항역</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  \n    <ion-item class="item item-block item-sm">\n  \n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n            <tr>\n              <td><h6>1:50 PM  </h6></td>\n              <td><h6> 포항역</h6></td>\n              <td><h6> 양덕</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n        </table>\n       </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  \n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n          <tbody>\n            <tr>\n              <td><h6>9:30 PM  </h6></td>\n              <td><h6> 한동대 </h6></td>\n              <td><h6> 고터</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  </ion-item-group>  \n<ion-item-group>\n    <ion-item-divider class="item item-divider item-sm item-divider-md item-md-light item-divider-sm-light" color="light">\n     <ion-label class="label label-sm labels">2017년 12월 21일</ion-label>\n    <div class="button-effect"></div>\n    </ion-item-divider>\n\n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n            <tr>\n              <td><h6>9:50 AM  </h6></td>\n              <td><h6> 한동대</h6></td>\n              <td><h6> 포항역</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  \n    <ion-item class="item item-block item-sm">\n  \n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n            <tr>\n              <td><h6>1:50 PM  </h6></td>\n              <td><h6> 포항역</h6></td>\n              <td><h6> 양덕</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n        </table>\n       </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  \n    <ion-item class="item item-block item-sm">\n      <div class="input-wrapper"><!---->\n        <table class="main-table">\n          <tbody>\n            <tr>\n              <td><h6>9:30 PM  </h6></td>\n              <td><h6> 한동대 </h6></td>\n              <td><h6> 고터</h6></td>\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n     <div class="button-effect"></div>\n    </ion-item>\n  </ion-item-group>\n  \n  </div>\n\n\n\n  <div class="fixed-content" style="margin-top: 85px;">\n\n  <ion-fab bottom="" right="">\n\n      <button color="dark" ion-fab="" class="fab fab-md fab-md-dark"><ion-icon class="fab-close-icon icon icon-md ion-md-close" name="close" role="img" aria-label="close"></ion-icon><span class="button-inner"><ion-icon name="add" role="img" class="icon icon-md ion-md-add" aria-label="add"></ion-icon></span><div class="button-effect" style="transform: translate3d(-19px, -13px, 0px) scale(1); height: 87px; width: 87px; opacity: 0; transition: transform 301ms, opacity 211ms 90ms;"></div></button>\n     \n    </ion-fab></div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Hyoeun/Documents/CRA/iTaxi/src/pages/taxi-list/taxi-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TaxiListPage);

//# sourceMappingURL=taxi-list.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map