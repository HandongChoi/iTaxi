webpackJsonp([2],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/select-and-sorting/select-and-sorting.module": [
		266,
		1
	],
	"../pages/taxi-list/taxi-list.module": [
		265,
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\makeRoom\makeRoom.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Make Room</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-label display="flex" align="center" fixed>출발지</ion-label>\n\n        </ion-col>\n\n        <ion-col>\n\n            <div class="room_button"> \n\n                <button class="swap-button" ion-button clear large icon-only (click)="swap_position()">\n\n                    <ion-icon name="swap"></ion-icon>\n\n                </button>\n\n            </div>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-label align="center" fixed>도착지</ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n                <!--<ion-label align="center" fixed>출발지</ion-label>-->        \n\n                <ion-item>\n\n                    <ion-select class="my-select" [(ngModel)]="start" interface="popover">\n\n                        <ion-option *ngFor="let start_list of start_list">{{start_list.start_list}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n        </ion-col>\n\n\n\n        \n\n       \n\n        <ion-col>\n\n\n\n                <!--<ion-label align="center" (click)="labelClick()" fixed>도착지</ion-label>--> \n\n                <ion-item>\n\n                    <ion-select class="my-select" interface="popover" *ngIf="arrive!=\'직접입력\'" [(ngModel)]="arrive">\n\n                            \n\n                        <ion-option value="한동대학교">한동대학교</ion-option>\n\n                        <ion-option value="포항역">포항역</ion-option>\n\n                        <ion-option value="양덕">양덕</ion-option>\n\n                        <ion-option value="고속버스터미널">고속버스터미널</ion-option>\'\n\n                        <ion-option value="시외버스터미널">시외버스터미널</ion-option>\n\n                        <ion-option value="북부해수욕장">북부해수욕장</ion-option>\n\n                        <ion-option value="육거리">육거리</ion-option>\n\n                        <ion-option value="직접입력" >직접입력</ion-option>\n\n                               \n\n                    </ion-select> \n\n                    <ion-input  style="position:absolute" *ngIf="arrive==\'직접입력\'" [(ngModel)]="arrive2" type="text" placeholder="기타장소"></ion-input>  \n\n                              \n\n                </ion-item>\n\n                 \n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n            <ion-col>\n\n                <div class="start-date">\n\n                        <ion-label align="center" color="primary" fixed>출발날짜</ion-label>\n\n                    <ion-item>  \n\n                        \n\n                        <ion-datetime text-align="center" displayFormat="YYYY MM DD" pickerFormat="YYYY MM DD" [(ngModel)]="startDate"></ion-datetime>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col>\n\n                <div class="start-time">\n\n                        <ion-label align="center" color="primary" fixed>출발시간</ion-label>\n\n                    <ion-item>\n\n                            \n\n                        <ion-datetime text-align="center" displayFormat="h:mm A" pickerFomat="h mm A" [(ngModel)]="startTime"></ion-datetime>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n    </ion-row>\n\n    \n\n    <div class="room_button"> \n\n        <button class="swap-button" ion-button clear large icon-only (click)="swap_position()">\n\n            <ion-icon name="swap"></ion-icon>\n\n        </button>\n\n    </div>\n\n\n\n    <div class="room_button">          \n\n        <button class="button customBtn" ion-button round (click)="showPeopleAlert()">방만들기</button>\n\n    </div>\n\n\n\n    <div class="room_button">          \n\n        <button class="button customBtn" ion-button round (click)="showRadioAlert()">방만들기</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\makeRoom\makeRoom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MakeRoomPage);

//# sourceMappingURL=makeRoom.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_and_sorting_select_and_sorting__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/taxi-list/taxi-list.module#TaxiListPageModule', name: 'TaxiListPage', segment: 'taxi-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/select-and-sorting/select-and-sorting.module#SelectAndSortingPageModule', name: 'SelectAndSortingPage', segment: 'select-and-sorting', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_select_and_sorting_select_and_sorting__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__ = __webpack_require__(195);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Select testing', component: __WEBPACK_IMPORTED_MODULE_6__pages_select_and_sorting_select_and_sorting__["a" /* SelectAndSortingPage */] },
            { title: 'MakeRoom', component: __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */] },
        ];
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
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAndSortingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
        selector: 'page-select-and-sorting',template:/*ion-inline-start:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\select-and-sorting\select-and-sorting.html"*/'<!--\n\n  Generated template for the SelectAndSortingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>selectAndSorting</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Gender</ion-label>\n\n    <ion-select [selectOptions]="selectOptions" [(ngModel)]="gender" multiple="true">\n\n      <ion-option value="f">Female</ion-option>\n\n      <ion-option value="m">Male</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Select Hive</ion-label>\n\n      <ion-select #newSelect [(ngModel)]="carbrand" multiple="true" (ionChange)="IonChange(carbrand)">\n\n        <ion-option value="Porsche" checked="true">Porsche</ion-option>\n\n        <ion-option value="Mercedes" >Mercedes</ion-option>\n\n        <ion-option value="Buggati">Buggati</ion-option>\n\n        <ion-option value="Lamborghini">Lamborghini</ion-option>\n\n        <ion-option value="Domster">Domster</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n  <ion-list>\n\n    <button menuClose ion-item *ngFor="let time of e1">\n\n      {{e1}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\select-and-sorting\select-and-sorting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SelectAndSortingPage);

//# sourceMappingURL=select-and-sorting.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map