webpackJsonp([1],{

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		169
	],
	"../pages/main/main.module": [
		456,
		0
	],
	"../pages/personal-info/personal-info.module": [
		181
	],
	"../pages/reset-password/reset-password.module": [
		182
	],
	"../pages/ride-history/ride-history.module": [
		185
	],
	"../pages/setting/setting.module": [
		183
	],
	"../pages/signup/signup.module": [
		307
	],
	"../pages/taxi-list/taxi-list.module": [
		309
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function() { return PersonalInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_info__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalInfoPageModule = (function () {
    function PersonalInfoPageModule() {
    }
    return PersonalInfoPageModule;
}());
PersonalInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal_info__["a" /* PersonalInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_info__["a" /* PersonalInfoPage */]),
        ],
    })
], PersonalInfoPageModule);

//# sourceMappingURL=personal-info.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = (function () {
    function ResetPasswordPageModule() {
    }
    return ResetPasswordPageModule;
}());
ResetPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
        ],
    })
], ResetPasswordPageModule);

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { PersonalInfoPage } from '../pages/personal-info/personal-info';
var SettingPageModule = (function () {
    function SettingPageModule(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    return SettingPageModule;
}());
SettingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
        ],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], SettingPageModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingPage = (function () {
    /*
    this.platform.ready().then(() =>{
      NativeStorage.getItem('notification').then(data =>{
        console.log(this.isNotiToggled);
        this.isNotiToggled = data;
      });

      NativeStorage.getItem('push').then(data =>{
        console.log(this.isPushToggled);
        this.isPushToggled = data;
      });
    });
    */
    function SettingPage(navCtrl, navParams, platform, authProvider, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.authProvider = authProvider;
        this.af = af;
        var user_id = firebase.auth().currentUser.uid;
        this.userData = af.object("/userProfile/" + user_id);
        this.userData.subscribe(function (data) {
            _this.user = data;
            _this.isNotiToggled = data.isNoti;
            _this.isPushToggled = data.isPush;
        });
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.NotiToggle = function () {
        this.userData.update({ isNoti: this.isNotiToggled });
    };
    SettingPage.prototype.PushToggle = function () {
        this.userData.update({ isPush: this.isPushToggled });
    };
    SettingPage.prototype.delete_user = function () {
        this.firestore = firebase.database().ref('/userProfile/' + firebase.auth().currentUser.uid);
        this.authProvider.delete();
        this.firestore.remove();
        alert('탈퇴처리되었습니다');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color = "primary">\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>설정</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header> 내정보 </ion-list-header>\n      <ion-item>\n        <ion-row>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/woody.jpeg">\n          </ion-avatar>\n          <h2>류여진</h2> &nbsp; <h4>010-1111-2222</h4>\n        </ion-row>\n        <ion-row justify-content-center>\n              <button ion-button color="primary" small round outline (click)="openModal()" >개인정보 수정</button>\n              <button ion-button color="primary" small round outline (click)="delete_user()">회원탈퇴</button>\n        </ion-row>\n      </ion-item>\n\n    <ion-list-header> PUSH알림 </ion-list-header>\n      <ion-item>\n        <ion-label>메세지 알림</ion-label>\n        <ion-toggle [(ngModel)]="isPushToggled" (ionChange)="PushToggle()" checked="true"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>공지 알림</ion-label>\n        <ion-toggle [(ngModel)]="isNotiToggled" (ionChange)="NotiToggle()" checked="true"></ion-toggle>\n      </ion-item>\n\n    <ion-list-header> 문의 </ion-list-header>\n      <ion-item>\n        hguitaxi@gmail.com\n      </ion-item>\n\n    <ion-list-header> 버전 </ion-list-header>\n      <ion-item>\n        1\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideHistoryPageModule", function() { return RideHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ride_history__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RideHistoryPageModule = (function () {
    function RideHistoryPageModule() {
    }
    return RideHistoryPageModule;
}());
RideHistoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ride_history__["a" /* RideHistoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ride_history__["a" /* RideHistoryPage */]),
        ],
    })
], RideHistoryPageModule);

//# sourceMappingURL=ride-history.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_phone__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_studentID__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, authProvider, loadingCtrl, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.procedure = "terms";
        this.termsFlag = false;
        this.infoFlag = true;
        this.completeFlag = true;
        this.procedure = 'terms';
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.equalTo('password')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_phone__["a" /* PhoneValidator */].isValid])],
            studentID: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__validators_studentID__["a" /* StudentIDValidator */].isValid])]
        });
    }
    SignupPage.prototype.equalTo = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] === input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log("Need to complete the form: " + this.signupForm.value);
        }
        else {
            var email_1 = this.signupForm.value.email;
            var password = this.signupForm.value.password;
            var name_1 = this.signupForm.value.name;
            var phoneNumber = this.signupForm.value.phoneNumber;
            var studentID = this.signupForm.value.studentID;
            this.authProvider.signupUser(email_1, password, name_1, phoneNumber, studentID).then(function (user) {
                console.log("강민수");
                _this.loading.dismiss().then(function () {
                    console.log("여기까지 왔도다");
                    console.log(user);
                    console.log(email_1);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: "cancel" }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    SignupPage.prototype.TermFlagUp = function () {
        this.procedure = 'term';
        this.termsFlag = false;
        this.infoFlag = true;
        this.completeFlag = true;
    };
    SignupPage.prototype.InfoFlagUp = function () {
        this.procedure = 'info';
        this.termsFlag = true;
        this.infoFlag = false;
        this.completeFlag = true;
    };
    SignupPage.prototype.CompleteFlagUp = function () {
        this.procedure = 'complete';
        this.termsFlag = true;
        this.infoFlag = true;
        this.completeFlag = false;
        this.signupUser();
    };
    SignupPage.prototype.goLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        console.log("goLoginPage at signup.ts");
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      회원가입\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="procedure">\n      <ion-segment-button value="terms" [disabled]=termsFlag>\n        약관확인\n      </ion-segment-button>\n      <ion-segment-button value="info" [disabled]=infoFlag>\n        정보입력\n      </ion-segment-button>\n      <ion-segment-button value="complete" [disabled]=completeFlag>\n        가입완료\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="procedure">\n\n    <div *ngSwitchCase="\'terms\'">\n      <div class="wrap">\n        <ion-card class="terms_content">\n          longtext\n        </ion-card>\n        <div ion-item no-lines class="agree_check">\n          <ion-label>약관을 모두 읽었으며 동의합니다.</ion-label>\n          <ion-checkbox [(ngModel)]=\'firstChecking\' color="primary" checked="false"></ion-checkbox>\n        </div>\n        <ion-card class="terms_content">\n          longtext\n        </ion-card>\n        <div ion-item no-lines class="agree_check">\n          <ion-label>약관을 모두 읽었으며 동의합니다.</ion-label>\n          <ion-checkbox [(ngModel)]=\'secondChecking\' color="primary" checked="false"></ion-checkbox>\n        </div>\n        <button ion-button medium round color="primary" [disabled]="!firstChecking || !secondChecking" round (click)="InfoFlagUp()">\n            다음단계\n          </button>\n      </div>\n    </div>\n\n    <form [formGroup]="signupForm" (submit)="signupUser()" novalidate *ngSwitchCase="\'info\'">\n      <ion-item>\n        <ion-label stacked>이름</ion-label>\n        <ion-input formControlName="name" type="name" placeholder="최효은"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>학번</ion-label>\n        <ion-input formControlName="studentID" type="studentID" placeholder="21000763" [class.invalid]="!signupForm.controls.studentID.valid && signupForm.controls.studentID.dirty">\n        </ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.studentID.valid && signupForm.controls.studentID.dirty">\n          <p>학번 양식을 제대로 입력해주세요!</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>전화번호</ion-label>\n        <ion-input formControlName="phoneNumber" type="phoneNumber" placeholder="010-7766-2016" [class.invalid]="!signupForm.controls.phoneNumber.valid && signupForm.controls.phoneNumber.dirty">\n        </ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.phoneNumber.valid && signupForm.controls.phoneNumber.dirty">\n          <p>전화번호 양식을 제대로 입력해주세요!</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>이메일</ion-label>\n        <ion-input formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n        </ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n        <p>이메일 양식을 제대로 입력해주세요!</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>비밀번호</ion-label>\n        <ion-input formControlName="password" type="password" placeholder="Your password" [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n        </ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n        <p>최소 6글자 이상의 비밀번호를 입력하시오.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>비밀번호 확인</ion-label>\n        <ion-input formControlName="password2" type="password" placeholder="Repeat password here" [class.invalid]="!signupForm.controls.password2.valid && signupForm.controls.password2.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.password2.valid && signupForm.controls.password2.dirty">\n        <p>비밀번호가 일치 하지 않습니다. 확인해주세요.</p>\n      </ion-item>\n      <!-- 이거를 제출 버튼 옆에다가 놔두면 좋겠다.\n      <button ion-button medium round style="margin-top: 15px" (click)="TermFlagUp()">약관 확인</button>\n      -->\n      <button ion-button medium round type="submit" style="margin-top: 15px" [disabled]="!signupForm.valid" (click)="CompleteFlagUp()"> 가입하기 </button>\n      </form>\n    <div *ngSwitchCase="\'complete\'">\n      <div class="wrap">\n        <ion-card class="terms_content">\n          회원가입이 완료되었습니다\n        </ion-card>\n        <button ion-button medium round color="primary" style = "margin-top: 15px" (click)="goLoginPage()">\n          로그인하기\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiListPageModule", function() { return TaxiListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taxi_list__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaxiListPageModule = (function () {
    function TaxiListPageModule() {
    }
    return TaxiListPageModule;
}());
TaxiListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__taxi_list__["a" /* TaxiListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__taxi_list__["a" /* TaxiListPage */]),
        ],
    })
], TaxiListPageModule);

//# sourceMappingURL=taxi-list.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>i-Taxi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<<<<<<< HEAD\n  <h3>iTAXI</h3>\n    <a id="custom-login-btn" href="javascript:loginWithKakao()">\n      <img src="//mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg" width="300"/>\n    </a>\n=======\n  <h3>Ionic Menu Starter</h3>\n\n\n    <a id="custom-login-btn" href="javascript:loginWithKakao()">\n      <img src="//mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg" width="300"/>\n    </a>\n\n>>>>>>> loginPage\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_makeRoom_makeRoom__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_main__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic2_date_picker__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ionic2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_taxi_list_taxi_list_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatroom_chatroom_module__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_personal_info_personal_info_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reset_password_reset_password_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ride_history_ride_history_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_date_pipe__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_date_date__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_users_users__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var firebaseConfig = {
    apiKey: "AIzaSyANvht7J2MNX6x47mglqfJk74yZQ9u0qUk",
    authDomain: "itaxi-54bdc.firebaseapp.com",
    databaseURL: "https://itaxi-54bdc.firebaseio.com",
    projectId: "itaxi-54bdc",
    storageBucket: "",
    messagingSenderId: "208976127032"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */],
            __WEBPACK_IMPORTED_MODULE_22__pipes_date_pipe__["a" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ride-history/ride-history.module#RideHistoryPageModule', name: 'RideHistoryPage', segment: 'ride-history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/taxi-list/taxi-list.module#TaxiListPageModule', name: 'TaxiListPage', segment: 'taxi-list', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_12_ionic2_date_picker__["DatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_14__pages_chatroom_chatroom_module__["a" /* ChatRoomPageModule */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_13__pages_taxi_list_taxi_list_module__["TaxiListPageModule"],
            __WEBPACK_IMPORTED_MODULE_16__pages_personal_info_personal_info_module__["PersonalInfoPageModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting_module__["SettingPageModule"],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup_module__["SignupPageModule"],
            __WEBPACK_IMPORTED_MODULE_19__pages_reset_password_reset_password_module__["ResetPasswordPageModule"],
            __WEBPACK_IMPORTED_MODULE_20__pages_ride_history_ride_history_module__["RideHistoryPageModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_23__providers_date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_users_users__["a" /* UsersProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password, name, phoneNumber, studentID) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/email").set(email);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/studentID").set(studentID);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/phoneNumber").set(phoneNumber);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/devtoken").set("");
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/name").set(name);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/isPush").set(true);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + newUser.uid + "/isNoti").set(true);
        }).catch(function (error) { return console.error(error); });
    };
    AuthProvider.prototype.delete = function () {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser;
        user.delete().then(function () {
            // User deleted.
        }).catch(function (error) {
            // An error happened.
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/userProfile/" + userId).off();
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPage = (function () {
    function MainPage(navCtrl, navParams, af, menu, userServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.menu = menu;
        this.userServices = userServices;
        this.nowDate = new Date().toLocaleDateString().replace(/\./g, '').replace(/ /g, '-');
        this.dates_array = [];
        this.days = [];
        this.currentDate = new Date();
        //여기서부터는 로그인 및 회원가입 페이지를 넘어서 사이드 메뉴를 볼 수 있도록 만들기.
        this.menu = menu;
        this.menu.enable(true, 'myMenu');
        //일단 지금 user의 정보를 email로 받아오고 있다.
        this.user_id = this.userServices.getEmail();
        console.log("Main user : " + this.user_id);
        // //이메일 이전것으로 pasrse 해서 탑승내역에 저장중.
        // let parsedUserId = this.stringParser(this.user);
        // this.dates = af.list('/rideHistory/'+parsedUserId);
        // this.dates.subscribe(data =>{
        //   this.dates_array.push(data);
        // });
    }
    MainPage.prototype.ioniViewDidLoad = function () {
        console.log("ionViewDidLoad at main.ts");
    };
    MainPage.prototype.stringParser = function (sentence) {
        var parsedID = sentence.replace('@', '');
        parsedID = parsedID.replace('.', '');
        return parsedID;
    };
    MainPage.prototype.setPage = function (page) {
        this.navCtrl.setRoot(page);
        console.log(page + " at main.ts");
    };
    MainPage.prototype.goCarpoolListPage = function () {
        alert('Carpool Page');
        console.log("goCarpoolListPage at main.ts");
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/main/main.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>i-Taxi</ion-title>\n  </ion-navbar>\n\n  <button ion-item color="light2" style="font-size: 1.3rem" (click)="openTaxiList()">\n    <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n    공지사항입니다. 공지사항입니다.\n  </button>\n  <!--\n  <ion-card (click)="openTaxiList()">\n    <img src="../../assets/imgs/taxi.png"/>\n    <div class="card-title">i-Taxi</div>\n    <div class="card-subtitle">타러가기</div>\n  </ion-card>\n  <ion-card (click)="openTaxiList()">\n    <img src="../../assets/imgs/taxi.png"/>\n    <div class="card-title">i-Taxi</div>\n    <div class="card-subtitle">타러가기</div>\n  </ion-card> -->\n</ion-header>\n<ion-content>\n\n  <ion-buttons>\n    <button ion-button large full icon-left (click)="setPage(\'TaxiListPage\')">\n      <ion-icon name="car"></ion-icon>\n      i-Taxi 탑승\n    </button>\n    <button ion-button large full color="secondary" icon-left (click)="setPage(\'TaxiListPage\')">\n      <ion-icon name="car"></ion-icon>\n      카풀 탑승\n    </button>\n    <button ion-button large full color="tertiary" icon-left (click)="setPage(\'PersonalInfoPage\')">\n      <ion-icon name="person"></ion-icon>\n      마이페이지\n    </button>\n\n    <!--\n  round button\n    <ion-grid>\n      <ion-row justify-content-center style="padding: 10px 0; margin-top: 25px">\n        <button ion-button round class="customBtn" icon-left (click)="goTaxiListPage()" >\n          i-Taxi 탑승\n        </button>\n      </ion-row>\n      <ion-row justify-content-center style="padding: 10px 0">\n        <button ion-button round class="customBtn" color="secondary" icon-left (click)="goCarpoolListPage()">\n          카풀 탑승\n        </button>\n      </ion-row>\n      <ion-row justify-content-center style="padding: 10px 0">\n        <button ion-button round class="customBtn" color="tertiary" icon-left (click)="goMyPage()" >\n          마이페이지\n        </button>\n      </ion-row>\n    </ion-grid>\n  -->\n  </ion-buttons>\n\n  <!-- my Ticket -->\n  <div *ngFor="let dates of dates_array">\n    <ion-card style="border-radius:5px; margin-top:30px" *ngFor="let date of dates | DatePipe">\n      <ion-row style="background-color:#0054a6; color:white; padding:5px 0 5px 15px">\n        {{date.roomDate}}\n      </ion-row>\n      <ion-row>\n        <ion-col col-4 text-center style="border-right: 1px solid #ddd9d9">\n          <h3>Taxi</h3>\n          <p style="font-size: 9px">현 {{date.roomParticipants.length}}/{{date.roomCapacity}} 명</p>\n        </ion-col>\n        <ion-col text-center>\n          <h3>{{date.roomDepart}} <ion-icon name="arrow-forward"></ion-icon>{{date.roomDest}}</h3>\n          <p padding-left style="font-size: 10px">{{date.roomTime}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n\n\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */]) === "function" && _e || Object])
], MainPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalInfoPage = (function () {
    function PersonalInfoPage(navCtrl, navParams, viewCtrl, alertCtrl, af, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.user_dic = {};
        this.updateForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            studentID: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.user = firebase.auth().currentUser;
        af.list('/userProfile/' + this.user.uid).subscribe(function (data) {
            data.forEach(function (data) {
                _this.user_dic[data.$key] = data.$value;
            });
        });
    }
    PersonalInfoPage.prototype.updateUserInfo = function () {
        var revise_name = this.updateForm.value.name;
        var revise_phoneNumber = this.updateForm.value.phoneNumber;
        var revise_studentID = this.updateForm.value.studentID;
        this.user_object = this.af.object('/userProfile/' + this.user.uid);
        this.user_object.update({
            name: revise_name,
            phoneNumber: revise_phoneNumber,
            studentID: revise_studentID,
        });
        console.log("Success Update");
    };
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
    };
    PersonalInfoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        console.log('dismiss page');
    };
    PersonalInfoPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '개인정보 수정',
            subTitle: '개인정보가 성공적으로 변경되었습니다.',
            buttons: ['확인']
        });
        alert.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
    };
    return PersonalInfoPage;
}());
PersonalInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-personal-info',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/personal-info/personal-info.html"*/'<ion-header>\n  <ion-navbar  color = "primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>개인정보 수정</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="updateForm" (submit)="updateUserInfo()" novalidate>\n    <ion-item>\n      <ion-label stacked>이름</ion-label>\n      <ion-input formControlName="name" type="name" value="{{user_dic.name}}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>학번</ion-label>\n      <ion-input formControlName="studentID" type="studentID" value="{{user_dic.studentID}}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>전화번호</ion-label>\n      <ion-input formControlName="phoneNumber" type="phoneNumber" value="{{user_dic.phoneNumber}}"></ion-input>\n    </ion-item>\n  <!--\n    <ion-item>\n      <ion-label stacked>새로운 비밀번호</ion-label>\n      <ion-input formControlName="newPassword" type="newPassword"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>비밀번호 확인</ion-label>\n      <ion-input formControlName="newPasswordCheck" type="newPasswordCheck"></ion-input>\n    </ion-item>\n  -->\n    <div padding>\n      <button ion-button block type="submit" (click)="showAlert()">변경하기</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/personal-info/personal-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], PersonalInfoPage);

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, authProvider, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])]
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log("Form isn't valid, value: " + this.resetPasswordForm.value);
        }
        else {
            var email = this.resetPasswordForm.value.email;
            this.authProvider.resetPassword(email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "Check your email for a password reset link",
                    buttons: [{
                            text: "Ok",
                            role: 'cancel',
                            handler: function () { _this.navCtrl.pop(); }
                        }]
                });
                alert.present();
            }, function (error) {
                var errorAlert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: "Ok", role: "cancel" }]
                });
                errorAlert.present();
            });
        }
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reset-password',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/reset-password/reset-password.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      비밀번호 초기화\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="../../assets/imgs/logo.png" />\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate> \n    <ion-item>\n     <ion-label stacked>Email</ion-label>\n     <ion-input formControlName="email" type="email" placeholder="Your email address" \n                [class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty">\n     </ion-input> \n    </ion-item>\n    <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty"> \n      <p>Please enter a valid email.</p>\n    </ion-item>\n  \n    <button ion-button block type="submit" [disabled]="!resetPasswordForm.valid">\n      비밀번호 초기화 \n    </button>\n  </form> \n</ion-content>'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/reset-password/reset-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatroom_chatroom__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RideHistoryPage = (function () {
    function RideHistoryPage(navCtrl, navParams, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.nowDate = new Date().toISOString().substr(0, 10);
        this.chatroomData = [];
        this.user_id = this.navParams.data.user_id;
        console.log(this.user_id);
        this.rideHistory = af.list('/rideHistory/' + this.stringParser(this.user_id));
        this.rideHistory.$ref.orderByChild('roomDate').on('child_added', function (data) {
            console.log(data);
            _this.chatroomData.push(data.val());
            /*let chatroom = this.af.list('/chatrooms/' + data.val().roomDate + '/' + data.val().roomId);
      
            chatroom.subscribe(chatroomData => {
              this.chatroomData = chatroomData;
              console.log(this.chatroomData);
            });
            */
            console.log(_this.chatroomData);
        });
    }
    RideHistoryPage.prototype.stringParser = function (sentence) {
        var parsedID = sentence.replace('@', '');
        parsedID = parsedID.replace('.', '');
        return parsedID;
    };
    RideHistoryPage.prototype.goChatroom = function (chatroomDatum_temp) {
        var chat_room_id_val = chatroomDatum_temp.roomId;
        var bookingDate_val = chatroomDatum_temp.roomDate;
        //participant array에 push
        // 참여자가 아니고, 인원 full 아니면 push
        // 참여자이면 그냥 enter
        // full 인원이면 deny
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chatroom_chatroom__["a" /* ChatRoomPage */], { chat_room_id: chat_room_id_val, bookingDate: bookingDate_val, user_id: this.user_id });
    };
    return RideHistoryPage;
}());
RideHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-ride-history',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/ride-history/ride-history.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>i-Taxi >> 탑승내역조회</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <ion-grid>\n      <ion-item-group *ngFor = "let chatroomDatum of chatroomData;">\n        <ion-item-divider color="light" (click)="goChatroom(chatroomDatum)">\n          <ion-row>\n            <ion-col col-3>\n              <p>{{chatroomDatum.roomDate}}</p>\n              <p>{{chatroomDatum.roomTime}}</p>\n            </ion-col>\n            <ion-col col-7>\n              <p>{{chatroomDatum.roomDepart}}</p>\n              <p>>{{chatroomDatum.roomDest}}</p>\n            </ion-col>\n            <ion-col col-2>\n              <p>{{chatroomDatum.roomParticipants.length}} / {{chatroomDatum.roomCapacity}}</p>\n              <p>참여중</p>\n            </ion-col>\n          </ion-row>\n        <div class="button-effect"></div>\n        </ion-item-divider>\n      </ion-item-group>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/ride-history/ride-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], RideHistoryPage);

//# sourceMappingURL=ride-history.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 189,
	"./af.js": 189,
	"./ar": 190,
	"./ar-dz": 191,
	"./ar-dz.js": 191,
	"./ar-kw": 192,
	"./ar-kw.js": 192,
	"./ar-ly": 193,
	"./ar-ly.js": 193,
	"./ar-ma": 194,
	"./ar-ma.js": 194,
	"./ar-sa": 195,
	"./ar-sa.js": 195,
	"./ar-tn": 196,
	"./ar-tn.js": 196,
	"./ar.js": 190,
	"./az": 197,
	"./az.js": 197,
	"./be": 198,
	"./be.js": 198,
	"./bg": 199,
	"./bg.js": 199,
	"./bm": 200,
	"./bm.js": 200,
	"./bn": 201,
	"./bn.js": 201,
	"./bo": 202,
	"./bo.js": 202,
	"./br": 203,
	"./br.js": 203,
	"./bs": 204,
	"./bs.js": 204,
	"./ca": 205,
	"./ca.js": 205,
	"./cs": 206,
	"./cs.js": 206,
	"./cv": 207,
	"./cv.js": 207,
	"./cy": 208,
	"./cy.js": 208,
	"./da": 209,
	"./da.js": 209,
	"./de": 210,
	"./de-at": 211,
	"./de-at.js": 211,
	"./de-ch": 212,
	"./de-ch.js": 212,
	"./de.js": 210,
	"./dv": 213,
	"./dv.js": 213,
	"./el": 214,
	"./el.js": 214,
	"./en-au": 215,
	"./en-au.js": 215,
	"./en-ca": 216,
	"./en-ca.js": 216,
	"./en-gb": 217,
	"./en-gb.js": 217,
	"./en-ie": 218,
	"./en-ie.js": 218,
	"./en-nz": 219,
	"./en-nz.js": 219,
	"./eo": 220,
	"./eo.js": 220,
	"./es": 221,
	"./es-do": 222,
	"./es-do.js": 222,
	"./es-us": 223,
	"./es-us.js": 223,
	"./es.js": 221,
	"./et": 224,
	"./et.js": 224,
	"./eu": 225,
	"./eu.js": 225,
	"./fa": 226,
	"./fa.js": 226,
	"./fi": 227,
	"./fi.js": 227,
	"./fo": 228,
	"./fo.js": 228,
	"./fr": 229,
	"./fr-ca": 230,
	"./fr-ca.js": 230,
	"./fr-ch": 231,
	"./fr-ch.js": 231,
	"./fr.js": 229,
	"./fy": 232,
	"./fy.js": 232,
	"./gd": 233,
	"./gd.js": 233,
	"./gl": 234,
	"./gl.js": 234,
	"./gom-latn": 235,
	"./gom-latn.js": 235,
	"./gu": 236,
	"./gu.js": 236,
	"./he": 237,
	"./he.js": 237,
	"./hi": 238,
	"./hi.js": 238,
	"./hr": 239,
	"./hr.js": 239,
	"./hu": 240,
	"./hu.js": 240,
	"./hy-am": 241,
	"./hy-am.js": 241,
	"./id": 242,
	"./id.js": 242,
	"./is": 243,
	"./is.js": 243,
	"./it": 244,
	"./it.js": 244,
	"./ja": 245,
	"./ja.js": 245,
	"./jv": 246,
	"./jv.js": 246,
	"./ka": 247,
	"./ka.js": 247,
	"./kk": 248,
	"./kk.js": 248,
	"./km": 249,
	"./km.js": 249,
	"./kn": 250,
	"./kn.js": 250,
	"./ko": 251,
	"./ko.js": 251,
	"./ky": 252,
	"./ky.js": 252,
	"./lb": 253,
	"./lb.js": 253,
	"./lo": 254,
	"./lo.js": 254,
	"./lt": 255,
	"./lt.js": 255,
	"./lv": 256,
	"./lv.js": 256,
	"./me": 257,
	"./me.js": 257,
	"./mi": 258,
	"./mi.js": 258,
	"./mk": 259,
	"./mk.js": 259,
	"./ml": 260,
	"./ml.js": 260,
	"./mr": 261,
	"./mr.js": 261,
	"./ms": 262,
	"./ms-my": 263,
	"./ms-my.js": 263,
	"./ms.js": 262,
	"./my": 264,
	"./my.js": 264,
	"./nb": 265,
	"./nb.js": 265,
	"./ne": 266,
	"./ne.js": 266,
	"./nl": 267,
	"./nl-be": 268,
	"./nl-be.js": 268,
	"./nl.js": 267,
	"./nn": 269,
	"./nn.js": 269,
	"./pa-in": 270,
	"./pa-in.js": 270,
	"./pl": 271,
	"./pl.js": 271,
	"./pt": 272,
	"./pt-br": 273,
	"./pt-br.js": 273,
	"./pt.js": 272,
	"./ro": 274,
	"./ro.js": 274,
	"./ru": 275,
	"./ru.js": 275,
	"./sd": 276,
	"./sd.js": 276,
	"./se": 277,
	"./se.js": 277,
	"./si": 278,
	"./si.js": 278,
	"./sk": 279,
	"./sk.js": 279,
	"./sl": 280,
	"./sl.js": 280,
	"./sq": 281,
	"./sq.js": 281,
	"./sr": 282,
	"./sr-cyrl": 283,
	"./sr-cyrl.js": 283,
	"./sr.js": 282,
	"./ss": 284,
	"./ss.js": 284,
	"./sv": 285,
	"./sv.js": 285,
	"./sw": 286,
	"./sw.js": 286,
	"./ta": 287,
	"./ta.js": 287,
	"./te": 288,
	"./te.js": 288,
	"./tet": 289,
	"./tet.js": 289,
	"./th": 290,
	"./th.js": 290,
	"./tl-ph": 291,
	"./tl-ph.js": 291,
	"./tlh": 292,
	"./tlh.js": 292,
	"./tr": 293,
	"./tr.js": 293,
	"./tzl": 294,
	"./tzl.js": 294,
	"./tzm": 295,
	"./tzm-latn": 296,
	"./tzm-latn.js": 296,
	"./tzm.js": 295,
	"./uk": 297,
	"./uk.js": 297,
	"./ur": 298,
	"./ur.js": 298,
	"./uz": 299,
	"./uz-latn": 300,
	"./uz-latn.js": 300,
	"./uz.js": 299,
	"./vi": 301,
	"./vi.js": 301,
	"./x-pseudo": 302,
	"./x-pseudo.js": 302,
	"./yo": 303,
	"./yo.js": 303,
	"./zh-cn": 304,
	"./zh-cn.js": 304,
	"./zh-hk": 305,
	"./zh-hk.js": 305,
	"./zh-tw": 306,
	"./zh-tw.js": 306
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 418;

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
//validation example
//010-xxxx-xxxx
//(011|011|016|017|018|019)-xxxx-xxx
//(011|011|016|017|018|019)-xxx-xxx
var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    PhoneValidator.isValid = function (control) {
        var re = /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalid Phone Number": true };
    };
    return PhoneValidator;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentIDValidator; });
//validation example
//2xxxxxxx
var StudentIDValidator = (function () {
    function StudentIDValidator() {
    }
    StudentIDValidator.isValid = function (control) {
        var re = /^[2]\d{7}$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalid Studnet ID": true };
    };
    return StudentIDValidator;
}());

//# sourceMappingURL=studentID.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_main__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_taxi_list_taxi_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_users_users__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















__WEBPACK_IMPORTED_MODULE_15_firebase___default.a.initializeApp({
    apiKey: "AIzaSyANvht7J2MNX6x47mglqfJk74yZQ9u0qUk",
    authDomain: "itaxi-54bdc.firebaseapp.com",
    databaseURL: "https://itaxi-54bdc.firebaseio.com",
    projectId: "itaxi-54bdc",
    storageBucket: "itaxi-54bdc.appspot.com",
    messagingSenderId: "208976127032"
});
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider, alertCtrl, af, fcm, userServices) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.fcm = fcm;
        this.userServices = userServices;
        this.dates_array = [];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'MakeRoom', component: __WEBPACK_IMPORTED_MODULE_7__pages_makeRoom_makeRoom__["a" /* MakeRoomPage */] },
            { title: 'TaxiList', component: __WEBPACK_IMPORTED_MODULE_10__pages_taxi_list_taxi_list__["a" /* TaxiListPage */] },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */] },
            { title: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */] },
        ];
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                unsubscribe();
            }
            else {
                _this.uid = __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.auth().currentUser.uid;
                //임시방편이다. 위에 uid 받아오는데 시간이 걸려서 setInfo로 그 값을 넘겨주기 위해서 시간을 벌 필요가 있다.
                setTimeout(function () {
                    _this.userServices.setInfo(_this.uid);
                }, 2000);
                //여기서도 임시로 setInfo 시간을 벌어주고 Mainpage로 넘긴다.
                setTimeout(function () {
                    _this.user_id = _this.userServices.getName();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */];
                }, 4000);
                //for showing the most recent reservation list in side bar
                var dates = void 0;
                var parsedUserId = _this.stringParser(user.email);
                dates = af.list('/rideHistory/' + parsedUserId);
                dates.subscribe(function (data) {
                    if (_this.dates_array) {
                        _this.dates_array.pop();
                        _this.dates_array.push(data);
                    }
                    else
                        _this.dates_array.push(data);
                });
                unsubscribe();
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.fcm.getToken()
                .then(function (token) {
                console.log("The token is ", token);
            })
                .catch(function (error) {
                console.error(error);
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) { return console.log("New Token", token); }, function (error) { return console.error(error); });
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Received in background", JSON.stringify(data));
                }
                else {
                    console.log("Received in foreground", JSON.stringify(data));
                }
            }, function (error) {
                console.error("Error in notification", error);
            });
        });
        console.log("initailizeApp at app.component.ts");
    };
    MyApp.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.componenent, { user_id: this.user_id });
        console.log("openPage");
    };
    MyApp.prototype.stringParser = function (sentence) {
        var parsedID = sentence.replace('@', '');
        parsedID = parsedID.replace('.', '');
        return parsedID;
    };
    MyApp.prototype.inviteFriend = function () {
        alert('invite friend');
        console.log("inviteFriend() at app.componenent.ts");
    };
    MyApp.prototype.leaveRoom = function () {
        alert('leave');
        console.log("leaveRoom() at app.componenent.ts");
    };
    MyApp.prototype.setPage = function (page) {
        this.navCtrl.setRoot(page);
        console.log(page + " set at app.component.ts");
    };
    MyApp.prototype.pushPage = function (page) {
        this.navCtrl.push(page);
        console.log(page + " push at app.component.ts");
    };
    MyApp.prototype.goCarpoolListPage = function () {
        alert('Carpool Page');
        console.log("goCarpoolListPage() at app.componenent.ts");
    };
    MyApp.prototype.goMakeCarpoolRoomPage = function () {
        alert('Make Carpool Room Page');
        console.log("goMakeCarpoolRoomPage() at app.componenent.ts");
    };
    MyApp.prototype.logout = function () {
        this.authProvider.logoutUser();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { user_id: this.user_id });
        console.log("Logout");
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/app/app.html"*/'<ion-menu [content]="content"  persistent="true">\n  \n    <ion-content class="sidemenu-content">\n      <p class="sidemenu-userid"><ion-icon name="person"></ion-icon>&nbsp;&nbsp;{{user_id}}</p> \n      <ion-buttons right > \n        <button  class="sidemenu-button" menuClose icon-only (click)="setPage(\'SettingPage\')">\n          <ion-icon name="settings"></ion-icon>\n        </button>\n      </ion-buttons>\n      <hr class="sidemenu-hr" style="background-color:#29B5EF">\n      <ion-grid class="sidemenu-grid"  *ngFor = "let dates of dates_array">\n        <div class="sidemenu-div" *ngFor = "let date of dates | DatePipe">\n        &nbsp;&nbsp;꼬부기 {{date.length}} ({{date.roomParticipants.length}} / {{date.roomCapacity}})\n        <ion-row class="sidemenu-row" justify-content-left padding-left style="border-top-color: white">\n        {{date.roomDate}} &nbsp;&nbsp;|&nbsp;&nbsp; {{date.roomTime}}<br>\n        {{date.roomDepart}} &nbsp;&nbsp; > &nbsp;&nbsp; {{date.roomDest}}\n      <ion-buttons right > \n        <button  class="sidemenu-button2" menuClose icon-only (click)="Idontknow()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n      </ion-row>\n        </div>\n      </ion-grid>\n      \n      <ion-list class="sidemenu-list">\n          <ion-list-header class="sidemenu-header"> <ion-icon name="ios-car"></ion-icon> &nbsp;&nbsp;택시 </ion-list-header>\n          <button menuClose ion-item class="sidemenu-items" (click)="setPage(\'TaxiListPage\')">조회</button>\n          <button menuClose ion-item class="sidemenu-items" (click)="setPage(\'MakeRoomPage\')">모집</button>\n          <ion-list-header class="sidemenu-header"> <ion-icon name="car"></ion-icon>  &nbsp;&nbsp;카풀 </ion-list-header>\n          <button menuClose ion-item class="sidemenu-items" (click)="goCarpoolListPage()">조회</button>\n          <button menuClose ion-item class="sidemenu-items" (click)="goMakeCarpoolRoomPage()">모집</button>\n          <ion-list-header class="sidemenu-header"> <ion-icon name="person"></ion-icon>&nbsp;&nbsp;마이페이지 </ion-list-header>\n          <button menuClose ion-item class="sidemenu-items" (click)="setPage(\'RideHistoryPage\')">탑승내역</button>\n          <button menuClose ion-item class="sidemenu-items" (click)="setPage(\'PersonalInfoPage\')">내정보수정</button>\n          <ion-list-header class="sidemenu-header"> <ion-icon name="home"></ion-icon>  &nbsp;&nbsp;메인페이지 </ion-list-header>\n          <button menuClose ion-item class="sidemenu-items" (click)="setPage(\'MainPage\')">메인페이지</button>  \n          <button menuClose ion-item class="sidemenu-items" (click)="logout()">로그아웃</button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n  '/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__["a" /* FCM */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_12__providers_users_users__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_users_users__["a" /* UsersProvider */]) === "function" && _j || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatroom__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatRoomPageModule = (function () {
    function ChatRoomPageModule() {
    }
    return ChatRoomPageModule;
}());
ChatRoomPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chatroom__["a" /* ChatRoomPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__chatroom__["a" /* ChatRoomPage */]),
        ],
    })
], ChatRoomPageModule);

//# sourceMappingURL=chatroom.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (dates, args) {
        var afterNow;
        afterNow = dates.filter(function (date) {
            return new Date(Number(date.roomDate.split("-")[0]), Number(date.roomDate.split("-")[1]), Number(date.roomDate.split("-")[2]), Number(date.roomTime.split(":")[0]), Number(date.roomTime.split(":")[1]), 0) >= new Date();
        });
        afterNow.sort(function (a, b) {
            if (new Date(a.roomDate + "T" + a.roomTime + ":00") < new Date(b.roomDate + "T" + b.roomTime + ":00")) {
                return -1;
            }
            else if (new Date(a.roomDate + "T" + a.roomTime + ":00") > new Date(b.roomDate + "T" + b.roomTime + ":00")) {
                return 1;
            }
            else {
                return 0;
            }
        });
        if (afterNow.length == 0)
            return afterNow;
        return afterNow.slice(0, 1);
    };
    return DatePipe;
}());
DatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'DatePipe'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DatePipe);

//# sourceMappingURL=date-pipe.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DateProvider = (function () {
    function DateProvider(http) {
        this.http = http;
        console.log('Hello DateProvider Provider');
    }
    return DateProvider;
}());
DateProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DateProvider);

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersProvider = (function () {
    function UsersProvider(af) {
        this.af = af;
        console.log('Hello UsersProvider Provider');
    }
    UsersProvider.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersProvider');
    };
    UsersProvider.prototype.setInfo = function (uid) {
        var _this = this;
        this.af.object('/userProfile/' + uid).subscribe(function (data) {
            _this.email = data['email'];
            _this.phoneNumber = data['phoneNumber'];
            _this.name = data['name'];
            _this.studentID = data['studentID'];
        });
    };
    //subscribe로 하면 우리가 조작 가능한 type으로 변환되어 나온다.
    UsersProvider.prototype.getEmail = function () {
        return this.email;
    };
    UsersProvider.prototype.getName = function () {
        return this.name;
    };
    return UsersProvider;
}());
UsersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], UsersProvider);

var _a;
//# sourceMappingURL=users.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_users__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_timers__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, alertCtrl, authProvider, formBuilder, menu, userServices, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.menu = menu;
        this.userServices = userServices;
        this.af = af;
        //왼쪽 사이드바 메뉴 안 보이게 하는 역할
        this.menu = menu;
        this.menu.enable(false, 'myMenu');
        //로그인시 제한 조건 걸어놓기
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log("Form isn't valid yet, value: " + this.loginForm.value);
        }
        else {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            this.authProvider.loginUser(email, password).then(function (authData) {
                _this.loading.dismiss().then(function () {
                    if (typeof (FCMPlugin) != 'undefined') {
                        FCMPlugin.onTokenRefresh(function (token) {
                            if (token) {
                                this.firestore = firebase.database().ref('/userProfile/' + firebase.auth().currentUser.uid);
                                this.storetoken(token);
                            }
                        });
                    }
                    else {
                        console.log("FCMPlugin type is undefined!");
                    }
                    _this.userServices.setInfo(firebase.auth().currentUser.uid);
                }).then(function () {
                    //현재 2초 딜레이를 걸어놓음으로써 비동기식 문제를 해결중. 임시방편이다.
                    Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setTimeout"])(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                    }, 2000);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: 'cancel' }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.pushPage = function (name) {
        this.navCtrl.push(name);
    };
    LoginPage.prototype.tokenSetup = function () {
        var promise = new Promise(function (resolve, reject) {
            if (typeof (FCMPlugin) != 'undefined') {
                FCMPlugin.getToken(function (token) {
                    resolve(token);
                }, function (err) {
                    reject(err);
                });
            }
        });
        return promise;
    };
    LoginPage.prototype.storetoken = function (token) {
        this.firestore.update({
            devtoken: token
        }).then(function () {
            alert('Token Stored');
        }).catch(function () {
            alert('Token not sotred');
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>로그인</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <img src="../../assets/imgs/logo.png" align="center"/>\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n        [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid && loginForm.controls.email.dirty">\n      <p>사용가능한 이메일주소를 입력하세요.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Your password"\n        [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid && loginForm.controls.password.dirty">\n      <p>비밀번호는 6자 이상의 영문자이어야합니다.</p>\n    </ion-item>\n    <button ion-button full medium round type="submit" color="secondary" [disabled]="!loginForm.valid">\n      로그인 </button>\n  </form>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-6>\n        <button ion-button medium round color="tertiary" outline (click)="pushPage(\'SignupPage\')"> 회원가입 </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button medium round color="tertiary" outline (click)="pushPage(\'ResetPasswordPage\')"> 비밀번호찾기 </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="KakaoButton">\n    <a id="custom-login-btn" href="javascript:loginWithKakao()">\n      <img src="//mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg" width="300"/>\n    </a>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_users_users__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_users_users__["a" /* UsersProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _j || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_taxi_list_taxi_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatRoomPage = (function () {
    function ChatRoomPage(navCtrl, af, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.af = af;
        this.navParams = navParams;
        this.platform = platform;
        this.room_participants = [];
        this.bookingDate = navParams.data.bookingDate;
        this.chat_room_id = navParams.data.chat_room_id;
        this.chat_user_id = navParams.data.user_id;
        var whichPage = navParams.data.whichPage;
        console.log(this.bookingDate, this.chat_room_id, this.chat_user_id);
        this.room = af.list('/chatrooms/' + this.bookingDate + '/' + this.chat_room_id);
        this.chats = af.list(('/chats/' + this.chat_room_id));
        this.room_object = af.object('/chatrooms/' + this.bookingDate + '/' + this.chat_room_id);
        var parsedID = this.stringParser(this.chat_user_id);
        console.log(parsedID);
        this.rideHistory = af.list('/rideHistory/' + parsedID);
        console.log('hi', this.rideHistory.$ref.ref.key);
        var count = 0;
        this.room.forEach(function (data) {
            if (count == 0) {
                _this.room_capacity = data[0].$value;
                _this.room_depart_date = data[2].$value;
                _this.room_depart_time = data[3].$value;
                _this.room_depart = data[4].$value;
                _this.room_dest = data[5].$value;
                _this.room_host = data[6].$value;
                _this.room_participants = data[7];
                _this.room_month = (_this.room_depart_date[5] + _this.room_depart_date[6]);
                _this.room_day = (_this.room_depart_date[8] + _this.room_depart_date[9]);
                _this.room_hour = (_this.room_depart_time[0] + _this.room_depart_time[1]);
                _this.room_minute = (_this.room_depart_time[3] + _this.room_depart_time[4]);
                _this.roomKey = _this.room.$ref.ref.parent.key;
                console.log(_this.roomKey);
                if (_this.room_host === _this.chat_user_id)
                    _this.isHost = true;
                else
                    _this.isHost = false;
                var isExist = false;
                for (var i = 0; i < _this.room_participants.length; i++) {
                    if (_this.room_participants[i] === _this.chat_user_id) {
                        isExist = true;
                        break;
                    }
                }
                if (whichPage === 'makeRoom') {
                    _this.rideHistory.push({
                        roomId: _this.chat_room_id,
                        roomDate: _this.room_depart_date,
                        roomTime: _this.room_depart_time,
                        roomDepart: _this.room_depart,
                        roomDest: _this.room_dest,
                        roomCapacity: _this.room_capacity,
                        roomParticipants: _this.room_participants
                    });
                }
                if (isExist === false) {
                    console.log();
                    if (parseInt(_this.room_capacity) > _this.room_participants.length) {
                        _this.room_participants.push(_this.chat_user_id);
                        _this.room_object.update({
                            capacity: _this.room_capacity,
                            depart_date: _this.room_depart_date,
                            depart_time: _this.room_depart_time,
                            departure: _this.room_depart,
                            destination: _this.room_dest,
                            host: _this.room_host,
                            participants: _this.room_participants
                        });
                        _this.rideHistory.push({
                            roomId: _this.chat_room_id,
                            roomDate: _this.room_depart_date,
                            roomTime: _this.room_depart_time,
                            roomDepart: _this.room_depart,
                            roomDest: _this.room_dest,
                            roomCapacity: _this.room_capacity,
                            roomParticipants: _this.room_participants
                        });
                    }
                }
                ;
            }
            count++;
        });
    }
    ChatRoomPage.prototype.stringParser = function (sentence) {
        var parsedID = sentence.replace('@', '');
        parsedID = parsedID.replace('.', '');
        return parsedID;
    };
    ChatRoomPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_taxi_list_taxi_list__["a" /* TaxiListPage */], { user_id: this.chat_user_id });
    };
    ChatRoomPage.prototype.send = function () {
        if (this.chat_content !== '') {
            this.chats.push({
                user_id: this.chat_user_id,
                content: this.chat_content,
                date_time: new Date().toLocaleString(),
                dateKey: this.roomKey
            });
            this.chat_content = '';
        }
        else {
        }
    };
    ChatRoomPage.prototype.quit = function () {
        var _this = this;
        var new_participants = [];
        console.log("quit(): ", this.room_participants);
        if (this.room_participants) {
            this.room_participants.forEach(function (data) {
                if (data !== _this.chat_user_id)
                    new_participants.push(data);
            });
            console.log(new_participants);
            if (this.chat_user_id !== this.room_participants[0]) {
                this.room_object.update({
                    capacity: this.room_capacity,
                    depart_date: this.room_depart_date,
                    depart_time: this.room_depart_time,
                    departure: this.room_depart,
                    destination: this.room_dest,
                    host: this.room_host,
                    participants: new_participants
                });
                this.rideHistory.remove();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_taxi_list_taxi_list__["a" /* TaxiListPage */], { user_id: this.chat_user_id });
            } // 방장이 아닌 다른 사람이 나갈 경우
            else {
                //방장이고, 방에 사람이 없을 때
                console.log(this.room_participants);
                if (this.room_participants.length === 1) {
                    this.room_object.remove();
                    this.rideHistory.remove();
                }
                else if (this.room_participants.length > 1) {
                    this.room_object.update({
                        capacity: this.room_capacity,
                        depart_date: this.room_depart_date,
                        depart_time: this.room_depart_time,
                        departure: this.room_depart,
                        destination: this.room_dest,
                        host: new_participants[0],
                        participants: new_participants
                    });
                    this.rideHistory.remove();
                }
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_taxi_list_taxi_list__["a" /* TaxiListPage */], { user_id: this.chat_user_id });
            }
            //방장 다음 사람으로 옮기기
        }
    };
    ChatRoomPage.prototype.ionViewDidLoad = function () {
        if (typeof (FCMPlugin) != 'undefined') {
            FCMPlugin.onNotification(function (data) {
                if (data.wasTrapped) {
                    alert("background: ");
                }
                else {
                    alert(data.sendername + ': ' + data.message);
                }
            });
        }
    };
    ChatRoomPage.prototype.scrollBottom = function () {
        this.content.scrollToBottom();
    };
    ChatRoomPage.prototype.show = function (index) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".user-name").eq(index).parent().siblings().children('.user-name').siblings().animate({ width: 'hide' }, 70);
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".user-name").eq(index).siblings().animate({ width: 'toggle' }, 70);
    };
    return ChatRoomPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], ChatRoomPage.prototype, "content", void 0);
ChatRoomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chatroom',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/chatroom/chatroom.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button (click)=\'goBack()\'>\n          <ion-icon name = "ios-arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title> 꼬부기 ({{room_participants.length}}/{{room_capacity}}) </ion-title>\n    <!-- 방이름/인원 -->\n  </ion-navbar>\n\n  <!-- 방 정보 -->\n  <ion-grid class="room-info">\n    <ion-row>\n      <ion-col justify-content-center padding-left>\n        {{room_month}}월 {{room_day}}일 {{room_hour}}시 {{room_minute}}분\n        <p><b>{{room_depart}} &nbsp; <ion-icon name="arrow-forward"></ion-icon> &nbsp; {{room_dest}}</b></p>\n      </ion-col>\n      <ion-col col-auto>\n        <ion-buttons right icon-only>\n          <button ion-button (click)=\'quit()\'>\n              <ion-icon name="log-out"></ion-icon>\n            </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 참여자 정보  -->\n  <ion-grid>\n    <ion-row>\n      <ion-col class="users">\n        <div class="user" *ngFor="let member of room_participants; let i = index">\n          <button ion-button class="user-name" (click)="show(i)" >{{ member }}</button>\n          <button ion-button class="user-call" (click)="native(i, 1)"><ion-icon name="ios-call-outline"></ion-icon></button>\n          <button ion-button class="user-mail" (click)="native(i, 2)"><ion-icon name="ios-mail-outline"></ion-icon></button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <!--\n    <ion-item *ngFor="let chat of chats | async; let last = last">\n      {{chat.user_id}} : {{chat.content}}\n      {{last ? scrollBottom() : \'\'}}\n    </ion-item>\n    -->\n\n    <div class="message-wrap" *ngFor="let chat of chats | async; let last = last">\n      <!-- 밑에 주석처리 되어있는 부분이 내가 말한 내용이면 오른쪽, 상대가 말한 내용이면 왼쪽 선택하게한다. -->\n      <!-- <div *ngFor="let msg of msgList"\n           class="message"\n           [class.left]=" msg.userId === toUser.id "\n           [class.right]=" msg.userId === user.id "> -->\n      <div class="message right" *ngIf="chat.user_id == chat_user_id">\n        <!-- <img class="user-img" [src]="msg.userAvatar" alt="" src=""> 이거는 프로필사진-->\n        <div class="msg-detail">\n          <div class="msg-content">\n            <div class="msg-info">\n              <p>\n                <!-- 사용자 아이디, 메세지 작성시간 {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p> -->\n                <ion-icon *ngIf="chat.user_id == room_host" name="star"></ion-icon>{{chat.user_id}}&nbsp;&nbsp;&nbsp;{{chat.date_time | slice:12:21}}</p>\n            </div>\n            <span class="triangle"></span>\n            <p class="line-breaker">{{chat.content}}</p>\n            <!-- {{msg.message}} -->\n          </div>\n        </div>\n      </div>\n\n      <div class="message left" *ngIf="chat.user_id != chat_user_id">\n        <!-- <img class="user-img" alt="" src=""> -->\n        <div class="msg-detail">\n          <div class="msg-content">\n            <div class="msg-info">\n              <p>\n                <!-- {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p> -->\n                <ion-icon *ngIf="chat.user_id == room_host" name="star"></ion-icon>{{chat.user_name}}&nbsp;&nbsp;&nbsp;{{chat.date_time | slice:12:21}}</p>\n            </div>\n            <span class="triangle"></span>\n            <p class="line-breaker">{{chat.content}}</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- 입장/퇴장/택시비 정산 등등 공지 >\n       <div class="message-notice">한동이 님이 퇴장하셨습니다.</div>\n      -->\n    </div>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-input [(ngModel)]="chat_content" fixed type="text" (keyup.enter)="send()" (click)="scrollBottom()"></ion-input>\n    <button ion-button clear item-right (click)="send()" (click)="scrollBottom()"> send </button>\n  </ion-item>\n</ion-footer>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/chatroom/chatroom.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
], ChatRoomPage);

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
//validation example
//영문 및 숫자와 _-. @ 동일 . 2~5개의 영문조합.
//dkfj29jfm_dki-k.kj@29jd.com
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxiListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatroom_chatroom__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__makeRoom_makeRoom__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_date_picker__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ionic2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaxiListPage = (function () {
    function TaxiListPage(navCtrl, navParams, af, datePickerProvider, modalCtrl, usersService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.datePickerProvider = datePickerProvider;
        this.modalCtrl = modalCtrl;
        this.usersService = usersService;
        this.days = [];
        this.nowDate = new Date();
        this.selectedDate = new Date();
        this.spotList = ["한동대학교", "포항역", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리"];
        this.user_id = this.usersService.getEmail();
        for (var i = 0; i < 5; i++) {
            var temp = new Date(this.nowDate.getTime());
            temp.setDate(temp.getDate() + i);
            this.days.push(temp);
        }
        //기본적으로 오늘 날짜 기준으로 data 불러오기.
        this.showChatroom(this.nowDate);
        this.departOptions = {
            title: '출발지',
            subTitle: '원하시는 출발지를 체크해주세요.',
            mode: 'md'
        };
        this.destinationOptions = {
            title: '도착지',
            subTitle: '원하시는 도착지를 체크해주세요.',
            mode: 'md'
        };
    }
    TaxiListPage.prototype.showCalendar = function () {
        var _this = this;
        var now = new Date();
        var datePickerOption = {
            minimumDate: now,
            maximumDate: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
        };
        var dateSelected = this.datePickerProvider.showCalendar(this.modalCtrl, datePickerOption);
        dateSelected.subscribe(function (date) { _this.showChatroom(date); });
    };
    TaxiListPage.prototype.showChatroom = function (date) {
        this.selectedDate = date;
        console.log(this.makeStringFromDate(date));
        this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(date));
    };
    TaxiListPage.prototype.goChatroom = function (date) {
        var chat_room_id_val = date.$key;
        var bookingDate_val = date.depart_date;
        //participant array에 push
        // 참여자가 아니고, 인원 full 아니면 push
        // 참여자이면 그냥 enter
        // full 인원이면 deny
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chatroom_chatroom__["a" /* ChatRoomPage */], { chat_room_id: chat_room_id_val, bookingDate: bookingDate_val, user_id: this.user_id });
    };
    TaxiListPage.prototype.makeRoom = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__makeRoom_makeRoom__["a" /* MakeRoomPage */], { user_id: this.user_id });
        console.log("makeRoom function into taxi-list.tx");
    };
    TaxiListPage.prototype.filterDeparture = function (departFilter) {
        if (departFilter == "All") {
            this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(this.selectedDate));
        }
        else {
            this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(this.selectedDate), {
                query: {
                    orderByChild: 'departure',
                    equalTo: departFilter
                }
            });
        }
    };
    TaxiListPage.prototype.filterDestination = function (destinationFilter) {
        if (destinationFilter == "All") {
            this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(this.selectedDate));
        }
        else {
            this.dates = this.af.list('/chatrooms/' + this.makeStringFromDate(this.selectedDate), {
                query: {
                    orderByChild: 'destination',
                    equalTo: destinationFilter
                }
            });
        }
    };
    TaxiListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaxiListPage');
    };
    TaxiListPage.prototype.isExist = function (users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].uid == this.user_id)
                return true;
        }
        return false;
    };
    TaxiListPage.prototype.makeStringFromDate = function (date) {
        var d = new Date(date);
        var month = "" + (d.getMonth() + 1);
        var day = "" + d.getDate();
        var year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    return TaxiListPage;
}());
TaxiListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-taxi-list',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/taxi-list/taxi-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class = "top-title">택시조회</ion-title>\n  </ion-navbar>\n\n  <ion-grid class="small-table">\n    <ion-row>\n        <ion-col col-5>\n          <ion-grid>\n            <ion-row class = "rowUnderline">\n              <ion-col col-11>\n                <ion-item class="selectWrapper">\n                  <ion-select #newSelect [(ngModel)]="departFilter" interface="popover" placeholder="전체보기" (ionChange)="filterDeparture(departFilter)">\n                    <ion-option value="All" checked="true">전체보기</ion-option>\n                    <ion-option *ngFor="let spot of spotList" value={{spot}}>{{spot}}</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-1> \n                <p class = "selectIcon">▼</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n\n        <ion-col col-2 class = "rightArrow">  \n          <ion-icon name="arrow-round-forward"></ion-icon>\n        </ion-col>\n\n        <ion-col col-5>\n          <ion-grid>\n            <ion-row class = "rowUnderline">\n              <ion-col col-11>\n                <ion-item class="selectWrapper">\n                  <ion-select [selectOptions]="destinationOptions" [(ngModel)]="destinationFilter" placeholder="전체보기" interface="popover" (ionChange)="filterDestination(destinationFilter)">\n                    <ion-option value="All" checked="true">전체보기</ion-option>\n                    <ion-option *ngFor="let spot of spotList" value={{spot}}>{{spot}}</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-1> \n                <p class = "selectIcon">▼</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>  \n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2 *ngFor="let day of days" class="pointer">\n        <ion-item class="days" (click)="showChatroom(day)">\n          <p>{{day|date: "dd"}}</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2 class="pointer">\n        <ion-item class="days_icon" (click)="showCalendar()" >\n          <p> + </p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-grid class="mainGrid">\n      <ion-item-group>\n        <ion-item-divider *ngFor="let date of dates | async" (click)="goChatroom(date)" class="line"\n        [ngClass]="{full: date.participants.length >= date.capacity, exist: isExist(date.participants)}">\n          <ion-row>\n            <ion-col col-3>\n              <p>{{date.depart_date}}</p>\n              <p>{{date.depart_time}}</p>\n            </ion-col>\n            <ion-col col-7>\n              <p>{{date.departure}}</p>\n              <p>>{{date.destination}}</p>\n            </ion-col>\n            <ion-col col-2>\n              <p>{{date.participants.length}} / {{date.capacity}}</p>\n              <p>참여 {{ date.participants.length >= date.capacity ? "불가" : "가능" }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n      </ion-item-group>\n    </ion-grid>\n  </div>\n\n  <ion-fab right bottom>\n    <button color="dark" ion-fab (click)="makeRoom()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/taxi-list/taxi-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5_ionic2_date_picker__["DatePickerProvider"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["a" /* UsersProvider */]])
], TaxiListPage);

//# sourceMappingURL=taxi-list.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatroom_chatroom__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
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
    function MakeRoomPage(alertCtrl, navParams, navCtrl, af) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.af = af;
        this.start = "한동대학교";
        this.start2 = "";
        this.depart = "";
        this.arrive = "포항역";
        this.arrive2 = "";
        this.arrival = "";
        this.swap = "";
        this.maxPeople = "4";
        this.msg = "";
        this.forDate = new Date();
        this.kDate = new Date();
        this.testYear = this.forDate.getFullYear();
        this.testMonth = this.addZ(this.forDate.getMonth() + 1);
        this.testDay = this.addZ(this.forDate.getDate());
        this.test = this.testYear + "-" + this.testMonth + "-" + this.testDay;
        //이전 방식에서 해가 바뀔 때 null 오류가 발생하여 수정.
        //nowDate: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
        this.nowDate = this.test;
        this.nowTime = new Date().toLocaleTimeString('en-US', { hour12: false }).substr(0, 5);
        this.bookingDate = this.nowDate;
        this.bookingTime = this.nowTime;
        //1년치만 예약 가능하도록 만들었다. 이전 방식에서 해가 바뀔 때 null 오류가 발생하여 수정.
        //minYear: string = new Date().toLocaleDateString().replace(/\./g,'').replace(/ /g,'-');
        this.minYear = this.test;
        this.maxYear = (parseInt(this.minYear.substr(0, 4)) + 1) + this.minYear.substr(4, this.minYear.length);
        this.week = new Array('일', '월', '화', '수', '목', '금', '토');
        this.today = this.week[this.forDate.getDay()];
        this.start_list = [
            { start_list: '한동대학교', value: '한동대학교' },
            { start_list: '포항역', value: '포항역' },
            { start_list: '양덕', value: '양덕', },
            { start_list: '고속버스터미널', value: '고속버스터미널' },
            { start_list: '시외버스터미널', value: '시외버스터미널' },
            { start_list: '북부해수욕장', value: '북부해수욕장' },
            { start_list: '육거리', value: '육거리' },
            { start_list: '직접입력', value: this.start2 },
        ];
        this.arrive_list = [
            { arrive_list: '한동대학교', value: '한동대학교' },
            { arrive_list: '포항역', value: '포항역' },
            { arrive_list: '양덕', value: '양덕' },
            { arrive_list: '고속버스터미널', value: '고속버스터미널' },
            { arrive_list: '시외버스터미널', value: '시외버스터미널' },
            { arrive_list: '북부해수욕장', value: '북부해수욕장' },
            { arrive_list: '육거리', value: '육거리' },
            { arrive_list: '직접입력', value: this.arrive2 },
        ];
        this.spotList = ["한동대학교", "포항역", "양덕", "고속버스터미널", "시외버스터미널", "북부해수욕장", "육거리", "직접입력"];
        this.user_id = navParams.data.user_id; //이게 파라미터로 자꾸 받으면 중간에 데이터가 손실되지 않도록 유지시켜줘야 한다.
        var now = new Date();
        this.minYear = this.formatDate(now);
        this.maxYear = this.formatDate(new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()));
    }
    MakeRoomPage.prototype.formatDate = function (date) {
        var d = new Date(date);
        var month = "" + (d.getMonth() + 1);
        var day = "" + d.getDate();
        var year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    MakeRoomPage.prototype.addZ = function (n) {
        return n < 10 ? '0' + n : '' + n;
    };
    MakeRoomPage.prototype.showConfirmAlert = function () {
        if (this.arrive2 && this.start2) {
            this.depart = this.start2;
            this.arrival = this.arrive2;
            //this.arrive = this.arrive2;
            //this.start = this.start2;
        }
        else if (this.arrive2 && !this.start2)
            this.arrival = this.arrive2;
        else if (this.start2 && !this.arrive2)
            this.depart = this.start2;
        else {
            this.depart = this.start;
            this.arrival = this.arrive;
        }
        //전달할 메시지
        this.msg = "<br>" + "출발지 : " + this.depart + "<br>" +
            "도착지 : " + this.arrival + "<br>" +
            "출발날짜 : " + this.bookingDate + "(" + this.week[new Date(this.bookingDate).getDay()] + ")" + "<br>" +
            "출발시간 : " + this.bookingTime + "<br>" +
            "최대탑승인원 : " + this.maxPeople + "명" + "<br>";
        if (this.start == this.arrive || this.start == this.arrive2 || this.start2 == this.arrive) {
            console.log("출발1 / 출발2 / 도착1 / 도착 2 ", this.start, this.start2, this.arrive, this.arrive2);
            var alert = this.alertCtrl.create({
                message: "출발지와 도착지를 다르게 입력하여 주세요.",
                buttons: [{
                        text: '확인',
                        handler: function () {
                            console.log('Okay');
                        }
                    }
                ]
            });
            alert.present();
            /*
            if (this.arrive2 && this.start2){
              this.arrive ="직접입력";
              this.start ="직접입력";
            }
            else if (this.arrive2) {
              this.arrive ="직접입력";
            }
            else if (this.start2) {
              this.start ="직접입력";
            }
            */
        }
        else if (this.start2 && this.arrive2 && this.start2 == this.arrive2) {
            console.log("출발1 / 출발2 / 도착1 / 도착 2 ", this.start, this.start2, this.arrive, this.arrive2);
            var alert = this.alertCtrl.create({
                message: "출발지와 도착지를 다르게 입력하여 주세요.",
                buttons: [{
                        text: '확인',
                        handler: function () {
                            console.log('Okay');
                        }
                    }
                ]
            });
            alert.present();
        }
        else {
            var alert = this.alertCtrl.create({
                //title: '방만들기',
                subTitle: '방을 만드시겠습니까?',
                message: this.msg,
                cssClass: 'custom-alrt',
                buttons: [
                    {
                        text: '취소',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: '확인',
                        handler: function () {
                            console.log('Okay');
                        }
                    }
                ]
            });
            alert.present();
        }
    };
    MakeRoomPage.prototype.showRadioAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('최대탑승인원');
        if (this.bookingDate == this.nowDate && this.nowTime > this.bookingTime) {
            alert.setSubTitle('잘못된 시간입니다. 현재시간보다 뒤에 시간을 입력하여주세요.');
            alert.addButton({
                text: 'OK'
            });
        }
        else {
            alert.setTitle('탑승인원');
            alert.addInput({
                type: 'radio',
                label: '1명',
                value: '1',
                checked: true,
            });
            alert.addInput({
                type: 'radio',
                label: '2명',
                value: '2',
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
                    var participants_list = [];
                    participants_list.push(_this.user_id);
                    var url;
                    //지금 시간 보다 전 시간으로 예약하는 경우 처리
                    if ((_this.nowDate + _this.nowTime) > (_this.bookingDate + _this.bookingTime)) {
                        console.log("nowDate : " + _this.nowDate + _this.nowTime);
                        console.log("bookingDate : " + _this.bookingDate + _this.bookingTime);
                        console.log("Error");
                    }
                    else {
                        _this.chatrooms = _this.af.list('/chatrooms/' + _this.bookingDate);
                        url = _this.chatrooms.push({
                            departure: _this.start,
                            destination: _this.arrive,
                            depart_date: _this.bookingDate,
                            depart_time: _this.bookingTime,
                            capacity: data,
                            currentPeople: 4 - data,
                            host: _this.user_id,
                            participants: participants_list,
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chatroom_chatroom__["a" /* ChatRoomPage */], { chat_room_id: url.key, bookingDate: _this.bookingDate, user_id: _this.user_id, whichPage: "makeRoom" });
                    }
                }
            });
        }
        alert.present();
        console.log("showRadioAlert at makeRoom.ts");
    };
    ;
    MakeRoomPage.prototype.getKday = function () {
        this.today = this.week[new Date(this.bookingDate).getDay()];
    };
    MakeRoomPage.prototype.showTestAlert = function () {
        if (this.arrive2 && this.start2) {
            this.arrive = this.arrive2;
            this.start = this.start2;
        }
        else if (this.arrive2 && !this.start2)
            this.arrive = this.arrive2;
        else if (this.start2 && !this.arrive2)
            this.start = this.start2;
        console.log("출발지 : ", this.start);
        console.log("도착지 : ", this.arrive);
        console.log("출발날짜 : ", this.bookingDate);
        console.log("출발시간 : ", this.bookingTime);
        console.log("오늘 요일 : ", this.week[this.forDate.getDay()]);
        console.log("최대탑승인원 : ", this.maxPeople);
    };
    MakeRoomPage.prototype.startClick = function () {
        this.start = "한동대학교";
        //this.start2 = "";
    };
    MakeRoomPage.prototype.labelClick = function () {
        this.arrive = "포항역";
        // this.arrive2 = "";
    };
    MakeRoomPage.prototype.swap_position = function () {
        // arrive만 input 일 때,
        if (this.arrive == "직접입력" && this.start != "직접입력") {
            console.log("arrive 가 input 일 때");
            console.log("select 도착 : ", this.arrive, "input 도착 : ", this.arrive2);
            console.log("select 출발 : ", this.start, "input 출발 : ", this.start2);
            this.swap = this.start;
            this.start = "직접입력";
            this.start2 = this.arrive2;
            this.arrive = this.swap;
        }
        else if (this.start == "직접입력" && this.arrive != "직접입력") {
            console.log("start 가 input 일 때");
            console.log("select 도착 : ", this.arrive, "input 도착 : ", this.arrive2);
            console.log("select 출발 : ", this.start, "input 출발 : ", this.start2);
            this.swap = this.arrive;
            this.arrive = "직접입력";
            this.arrive2 = this.start2;
            this.start = this.swap;
        }
        else if (this.arrive == "직접입력" && this.start == "직접입력") {
            console.log("start, arrive 둘 다 input 일 때");
            console.log("select 도착 : ", this.arrive, "inpupt 도착 : ", this.arrive2);
            console.log("select 출발 : ", this.start, "input 출발 : ", this.start2);
            this.swap = this.start2;
            this.start2 = this.arrive2;
            this.arrive2 = this.swap;
        }
        else {
            console.log("start, arrive 가 둘 다 select 일 때");
            console.log("select 도착 : ", this.arrive, "input 도착 : ", this.arrive2);
            console.log("select 출발 : ", this.start, "input 출발 : ", this.start2);
            this.swap = this.start;
            this.start = this.arrive;
            this.arrive = this.swap;
        }
    };
    ;
    return MakeRoomPage;
}());
MakeRoomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-make-room',template:/*ion-inline-start:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/makeRoom/makeRoom.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="top-title">방만들기</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row justify-content-center style="padding-top:7%; height:8%; margin-top:12px;">\n    <ion-col col-3 >\n        <p align="center" class="max-people">출발지</p>\n    </ion-col>\n    <ion-col col-3 >\n      <div class="swap_button">\n        <button ion-button full large clear no-padding (click)="swap_position()"></button>\n      </div>\n    </ion-col>\n    <ion-col col-3 >\n      <p align="center" class="max-people">도착지</p>\n    </ion-col>\n  </ion-row>\n\n  <div class="bottomRow">\n  <ion-row just-content-center>\n    <ion-col col-4.5 justify-content-center>\n      <ion-item text-wrap no-lines>\n        <ion-select text-wrap class="my-select" [(ngModel)]="start" interface="popover" *ngIf="start!=\'직접입력\'">\n          <ion-option text-wrap *ngFor="let spot of spotList" value={{spot}}>{{spot}}</ion-option>\n        </ion-select>\n        <ion-input class="my-input" style="position:absolute" *ngIf="start==\'직접입력\'" [(ngModel)]="start2" type="text" placeholder="기타장소"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 >\n      <button ion-button no-padding clear round class="my-btn" (click)="startClick()" *ngIf="start==\'직접입력\'"></button>\n    </ion-col>\n    \n    <ion-col col-1 >\n      <ion-icon class="arrowIcon" ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n    </ion-col>\n    \n    <ion-col col-4.5 justify-content-center>\n      <ion-item text-wrap no-lines>\n        <ion-select text-wrap class="my-select" interface="popover" *ngIf="arrive!=\'직접입력\'" [(ngModel)]="arrive">\n          <ion-option text-wrap *ngFor="let spot of spotList" value={{spot}}>{{spot}}</ion-option>\n        </ion-select>\n        <ion-input class="my-input" style="position:absolute" *ngIf="arrive==\'직접입력\'" [(ngModel)]="arrive2" type="text" placeholder="기타장소"></ion-input> \n      </ion-item>    \n    </ion-col>\n    <ion-col col-1>\n        <!--<button style="margin-left:-10%;" ion-button icon-only clear *ngIf="arrive!=\'직접입력\'" ><ion-icon name="arrow-dropdown"></ion-icon></button>-->\n        <button ion-button no-padding clear round class="my-btn" (click)="labelClick()" *ngIf="arrive==\'직접입력\'"></button>\n      </ion-col>\n  </ion-row>\n  </div>\n  \n  <ion-row justify-content-center style="padding-top:7%; height:8%; margin-top:0px;">\n    <p class="max-people">출발날짜</p>\n  </ion-row>\n\n  <div class="bottomRow">\n  <ion-row justify-content-center>\n          <!--<ion-label align="center" color="primary" fixed>출발날짜</ion-label>-->\n    <ion-datetime padding class="my-date" displayFormat="YYYY년 M월 D일 ({{today}})" pickerFormat="YYYY MM DD" min={{minYear}} max={{maxYear}} \n                  placeholder={{nowDate}} [(ngModel)]="bookingDate" (ngModelChange)="getKday()"></ion-datetime>   \n  </ion-row>\n  </div>\n  \n  <ion-row justify-content-center style="padding-top:7%; height:8%; margin-top:0px;">\n    <p class="max-people">출발시간</p>\n  </ion-row>\n\n  <div class="bottomRow">\n    <ion-row justify-content-center>\n      <!-- 지금 여기 밑에 placeholder가 제대로 작동하지 않는다. 이상하게 9시간의 시차 차이가 난다 -->\n      <!-- displayFormat 과 default 값을 바꾸어 주어 시간 이상한거 해결 -->\n      <ion-datetime padding class="my-time"  displayFormat="HH:mm" pickerFomat="HH mm" placeholder={{nowTime}} [(ngModel)]="bookingTime"></ion-datetime>\n    </ion-row>\n  </div>\n\n  <ion-row justify-content-center style="padding-top:7%; height:8%; margin-top:0px;">\n    <p class="max-people">최대탑승인원</p>\n  </ion-row>\n\n  <div class="bottomRow">\n    <ion-row justify-content-center>\n      <form>\n        <div class="cc-selector">\n          <input id="visa" type="radio" name="credit-card" value="2" [(ngModel)]="maxPeople"/>\n          <label class="drinkcard-cc visa" for="visa"></label>\n\n          <input id="mastercard" type="radio" name="credit-card" value="3" [(ngModel)]="maxPeople"/>\n          <label class="drinkcard-cc mastercard"for="mastercard"></label>\n\n          <input id="people" type="radio" name="credit-card" value="4" [(ngModel)]="maxPeople"/>\n          <label class="drinkcard-cc people" for="people"></label>\n        </div>\n      </form>\n    </ion-row>\n  </div>\n  \n  <div class="room_button">          \n    <button style="margin-top:15%" class="button customBtn" ion-button round (click)="showConfirmAlert()" >값 테스트</button>\n  </div>\n  \n  <div class="room_button">          \n    <button style="margin-top:15%" class="button customBtn" ion-button round (click)="showRadioAlert()" >방만들기</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hyoeunchoi/Documents/CRA/iTaxi/src/pages/makeRoom/makeRoom.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], MakeRoomPage);

var _a, _b, _c, _d;
//# sourceMappingURL=makeRoom.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map