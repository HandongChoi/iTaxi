webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiListPageModule", function() { return TaxiListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taxi_list__ = __webpack_require__(267);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__taxi_list__["a" /* TaxiListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__taxi_list__["a" /* TaxiListPage */]),
        ],
    })
], TaxiListPageModule);

//# sourceMappingURL=taxi-list.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxiListPage; });
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
        selector: 'page-taxi-list',template:/*ion-inline-start:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\taxi-list\taxi-list.html"*/'<!--\n\n  Generated template for the TaxiListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>iTaxi >> 택시조회</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content content-sm padding">\n\n <div class="fixed-content"></div>\n\n\n\n<div class="scroll-content">\n\n\n\n  <table class = "small-table" bgcolor="#947794">\n\n    <tbody>\n\n      <tr>\n\n        <td><h6> 시간 </h6></td>\n\n        <td><h6> 출발 ▽ </h6></td>\n\n        <td><h6> 도착 ▽ </h6></td>\n\n        <td><h6> 현원 </h6></td>    \n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n\n\n  <ion-item-group>\n\n    <ion-item-divider class="item item-divider item-sm item-divider-md item-md-light item-divider-sm-light" color="light">\n\n     <ion-label class="label label-sm labels">2017년 12월 21일</ion-label>\n\n    <div class="button-effect"></div>\n\n    </ion-item-divider>\n\n\n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n            <tr>\n\n              <td><h6>9:50 AM  </h6></td>\n\n              <td><h6> 한동대</h6></td>\n\n              <td><h6> 포항역</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  \n\n    <ion-item class="item item-block item-sm">\n\n  \n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n            <tr>\n\n              <td><h6>1:50 PM  </h6></td>\n\n              <td><h6> 포항역</h6></td>\n\n              <td><h6> 양덕</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n        </table>\n\n       </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  \n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n          <tbody>\n\n            <tr>\n\n              <td><h6>9:30 PM  </h6></td>\n\n              <td><h6> 한동대 </h6></td>\n\n              <td><h6> 고터</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n          <tbody>\n\n            <tr>\n\n              <td><h6>11:00 PM  </h6></td>\n\n              <td><h6> 한동대 </h6></td>\n\n              <td><h6> 고터</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n\n\n  </ion-item-group>\n\n\n\n <ion-item-group>\n\n    <ion-item-divider class="item item-divider item-sm item-divider-md item-md-light item-divider-sm-light" color="light">\n\n     <ion-label class="label label-sm labels">2017년 12월 21일</ion-label>\n\n    <div class="button-effect"></div>\n\n    </ion-item-divider>\n\n\n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n            <tr>\n\n              <td><h6>9:50 AM  </h6></td>\n\n              <td><h6> 한동대</h6></td>\n\n              <td><h6> 포항역</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  \n\n    <ion-item class="item item-block item-sm">\n\n  \n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n            <tr>\n\n              <td><h6>1:50 PM  </h6></td>\n\n              <td><h6> 포항역</h6></td>\n\n              <td><h6> 양덕</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n        </table>\n\n       </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  \n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n          <tbody>\n\n            <tr>\n\n              <td><h6>9:30 PM  </h6></td>\n\n              <td><h6> 한동대 </h6></td>\n\n              <td><h6> 고터</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  </ion-item-group>  \n\n<ion-item-group>\n\n    <ion-item-divider class="item item-divider item-sm item-divider-md item-md-light item-divider-sm-light" color="light">\n\n     <ion-label class="label label-sm labels">2017년 12월 21일</ion-label>\n\n    <div class="button-effect"></div>\n\n    </ion-item-divider>\n\n\n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n            <tr>\n\n              <td><h6>9:50 AM  </h6></td>\n\n              <td><h6> 한동대</h6></td>\n\n              <td><h6> 포항역</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  \n\n    <ion-item class="item item-block item-sm">\n\n  \n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n            <tr>\n\n              <td><h6>1:50 PM  </h6></td>\n\n              <td><h6> 포항역</h6></td>\n\n              <td><h6> 양덕</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n        </table>\n\n       </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  \n\n    <ion-item class="item item-block item-sm">\n\n      <div class="input-wrapper"><!---->\n\n        <table class="main-table">\n\n          <tbody>\n\n            <tr>\n\n              <td><h6>9:30 PM  </h6></td>\n\n              <td><h6> 한동대 </h6></td>\n\n              <td><h6> 고터</h6></td>\n\n              <td><ion-img width="50" height="20" src="img.png"></ion-img></td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n     <div class="button-effect"></div>\n\n    </ion-item>\n\n  </ion-item-group>\n\n  \n\n  </div>\n\n\n\n\n\n\n\n  <div class="fixed-content" style="margin-top: 85px;">\n\n\n\n  <ion-fab bottom="" right="">\n\n\n\n      <button color="dark" ion-fab="" class="fab fab-md fab-md-dark"><ion-icon class="fab-close-icon icon icon-md ion-md-close" name="close" role="img" aria-label="close"></ion-icon><span class="button-inner"><ion-icon name="add" role="img" class="icon icon-md ion-md-add" aria-label="add"></ion-icon></span><div class="button-effect" style="transform: translate3d(-19px, -13px, 0px) scale(1); height: 87px; width: 87px; opacity: 0; transition: transform 301ms, opacity 211ms 90ms;"></div></button>\n\n     \n\n    </ion-fab></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Eunbee\github_2017\iTaxi\iTaxi\src\pages\taxi-list\taxi-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TaxiListPage);

//# sourceMappingURL=taxi-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map