webpackJsonp([6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajeEnviadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the MensajeEnviadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MensajeEnviadoPage = (function () {
    function MensajeEnviadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MensajeEnviadoPage.prototype.ionViewDidLoad = function () {
        this.idMsg = this.navParams.get('idMsg');
    };
    MensajeEnviadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mensaje-enviado',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\mensaje-enviado\mensaje-enviado.html"*/'<!--\n  Generated template for the MensajeEnviadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\' text-center>\n    <img src="../../assets/imgs/logoUG.png" width="25%" height="25%" />\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content text-center>\n      <p>Tu mensaje fue enviado con éxito. El número de folio es:</p>\n      <p><ion-badge>{{idMsg}}</ion-badge></p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\mensaje-enviado\mensaje-enviado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MensajeEnviadoPage);
    return MensajeEnviadoPage;
}());

//# sourceMappingURL=mensaje-enviado.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercaPage = (function () {
    function AcercaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercaPage');
    };
    AcercaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acerca',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\acerca\acerca.html"*/'<!--\n  Generated template for the AcercaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Información</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\acerca\acerca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AcercaPage);
    return AcercaPage;
}());

//# sourceMappingURL=acerca.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuzonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nuevo_mensaje_nuevo_mensaje__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the BuzonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuzonPage = (function () {
    function BuzonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuzonPage.prototype.ionViewDidLoad = function () {
        this.navCtrl.popToRoot();
    };
    BuzonPage.prototype.nuevoMensajeClicked = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__nuevo_mensaje_nuevo_mensaje__["a" /* NuevoMensajePage */]);
    };
    BuzonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-buzon',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\buzon\buzon.html"*/'<!--\n  Generated template for the BuzonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\' text-center>\n    <img src="../../assets/imgs/logoUG.png" width="25%" height="25%" />\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n      <ion-card-header text-center>\n          <img src="../../assets/imgs/logoUG.png" />\n      </ion-card-header>\n      <ion-card-content text-justify>\n          <p>El buzón UG, es un medio a través del cual se da atención a quejas, comentarios, sugerencias o felicitaciones sobre los procesos, trámites y servicios que presta la Universidad, cada mensaje tiene un plazo de 3 días hábiles para ser atendido.</p>\n          <br /><br />\n          <div text-right>\n              <p>Secretaría de Gestión y Desarrollo</p>\n              <p>Departamento de Gestión de Calidad Administrativa</p>\n              <p>Correo: <a href="mailto:buzon@ugto.mx">buzon@ugto.mx</a></p>\n              <p>Teléfono: 01 473 732 00 06 Ext. 3057</p>\n          </div>\n      </ion-card-content>\n    </ion-card>\n\n    <button ion-button icon-left large color="oroUG" full (click)="nuevoMensajeClicked()" style=" position: absolute; bottom: 0; margin: 0;"> \n      <ion-icon name="md-mail"></ion-icon> \n      Mensaje Nuevo\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\buzon\buzon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], BuzonPage);
    return BuzonPage;
}());

//# sourceMappingURL=buzon.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoMensajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mandar_mensaje_mandar_mensaje__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opciones_extra_opciones_extra__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_urlConfig__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevoMensajePage = (function () {
    function NuevoMensajePage(navCtrl, navParams, loadingCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.idTipoMsgSelected = 0;
        this.idRelacionSelected = 0;
        this.arrIdsOpcionesExtra = [9, 10, 11, 12];
    }
    NuevoMensajePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando',
            spinner: 'dots'
        });
        loading.present();
        this.getTipoMensaje().subscribe(function (response) {
            if (response.ok) {
                _this.arrTipoMensaje = response.json();
                _this.getRelacionesUG().subscribe(function (response) {
                    if (response.ok) {
                        _this.arrRelacionUG = response.json();
                    }
                    loading.dismiss();
                });
            }
            else {
                loading.dismiss();
            }
        });
    };
    NuevoMensajePage.prototype.getTipoMensaje = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__src_urlConfig__["a" /* default */].baseURL + "/BuzonTipoMensaje");
    };
    NuevoMensajePage.prototype.getRelacionesUG = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__src_urlConfig__["a" /* default */].baseURL + "/BuzonRelacionUG");
    };
    NuevoMensajePage.prototype.relacionChanged = function () {
        var elm = document.getElementById('itemRelacion');
        if (this.idRelacionSelected !== 0) {
            elm.style.border = '2px solid #3a9b2b';
        }
        else {
            elm.style.border = '2px solid #0C2D56';
        }
    };
    NuevoMensajePage.prototype.tipoMsgChanged = function () {
        var elem = document.getElementById('itemTipoMsg');
        if (this.idTipoMsgSelected !== 0) {
            elem.style.border = '2px solid #3a9b2b';
        }
        else {
            elem.style.border = '2px solid #0C2D56';
        }
    };
    NuevoMensajePage.prototype.siguienteClicked = function () {
        var params = {
            nombre: this.nombre,
            apePat: this.apePat,
            apeMat: this.apeMat,
            correo: this.correo,
            idRelacion: this.idRelacionSelected,
            idTipoMsg: this.idTipoMsgSelected
        };
        //Si la relación seleccionada es un alumno, egresado, administrativo o académico.
        if (this.arrIdsOpcionesExtra.indexOf(this.idRelacionSelected) !== -1) {
            if (this.validateInputs()) {
                if (this.validateEmail(this.correo)) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__opciones_extra_opciones_extra__["a" /* OpcionesExtraPage */], params);
                }
                else {
                    this.showToastEmail();
                }
            }
            else {
                //send toast incompleto 
                this.showToastIncompleto();
            }
        }
        else {
            if (this.validateInputs()) {
                if (this.validateEmail(this.correo)) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__mandar_mensaje_mandar_mensaje__["a" /* MandarMensajePage */], params);
                }
                else {
                    this.showToastEmail();
                }
            }
            else {
                //send toast incompleto
                this.showToastIncompleto();
            }
        }
    };
    NuevoMensajePage.prototype.showToastEmail = function () {
        this.toastCtrl.create({ message: 'Por favor ingresa un correo electrónico válido.', duration: 3000, showCloseButton: true, closeButtonText: 'OK' }).present();
    };
    NuevoMensajePage.prototype.showToastIncompleto = function () {
        this.toastCtrl.create({ message: 'Por favor llena todos los campos.', duration: 3000, showCloseButton: true, closeButtonText: 'OK' }).present();
    };
    NuevoMensajePage.prototype.validateInputs = function () {
        if (this.nombre === '') {
            return false;
        }
        if (this.apeMat === '') {
            return false;
        }
        if (this.apePat === '') {
            return false;
        }
        if (this.correo === '') {
            return false;
        }
        if (this.idTipoMsgSelected === 0) {
            return false;
        }
        if (this.idRelacionSelected === 0) {
            return false;
        }
        return true;
    };
    NuevoMensajePage.prototype.validateEmail = function (email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
    };
    NuevoMensajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-mensaje',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\nuevo-mensaje\nuevo-mensaje.html"*/'<!--\n  Generated template for the NuevoMensajePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="azulUG" text-center>\n    <img src="../../assets/imgs/logoUG.png" width="25%" height="25%" />\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-content padding>\n        <ion-item id="itemTipoMsg">\n          <ion-label>Tipo de Mensaje</ion-label>\n          <ion-select interface="action-sheet" [(ngModel)]="idTipoMsgSelected" (ionChange)="tipoMsgChanged()">\n            <ion-option *ngFor="let tipoMsg of arrTipoMensaje" [value]="tipoMsg.ID_TIPO_MENSAJE">{{tipoMsg.DESC_TIPO_MENSAJE}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item id="itemRelacion">\n          <ion-label>Relación con la UG</ion-label>\n          <ion-select interface="action-sheet" [(ngModel)]="idRelacionSelected" (ionChange)="relacionChanged()">\n            <ion-option *ngFor="let relacion of arrRelacionUG" [value]="relacion.ID_RELACION_UG">{{relacion.DESC_RELACION_UG}}</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <br />\n        <ion-list no-lines>\n          <ion-item>\n            <ion-label stacked>Nombre</ion-label>\n            <ion-input type="text" [(ngModel)]="nombre" placeholder="Ingresa tu nombre."></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label stacked>Apellido Paterno</ion-label>\n            <ion-input type="text" [(ngModel)]="apePat" placeholder="Ingresa tu apellido paterno."></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label stacked>Apellido Materno</ion-label>\n            <ion-input type="text" [(ngModel)]="apeMat" placeholder="Ingresa tu apellido materno."></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label stacked>Correo</ion-label>\n            <ion-input type="email" [(ngModel)]="correo" placeholder="Ingresa tu correo electrónico."></ion-input>\n          </ion-item>\n        </ion-list>\n    </ion-content>\n\n    <button ion-button icon-right large color="oroUG" full (click)="siguienteClicked()" style=" position: absolute; bottom: 0; margin: 0;"> \n      Siguiente\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\nuevo-mensaje\nuevo-mensaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ToastController */]])
    ], NuevoMensajePage);
    return NuevoMensajePage;
}());

//# sourceMappingURL=nuevo-mensaje.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcionesExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mandar_mensaje_mandar_mensaje__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_urlConfig__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpcionesExtraPage = (function () {
    function OpcionesExtraPage(navCtrl, navParams, http, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.idCampusSelected = 0;
        this.idDivSelected = '';
        this.nombreCampusSelected = '';
        this.nombreDivSelected = '';
        this.nua = '';
        this.nue = '';
    }
    OpcionesExtraPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OpcionesExtraPage');
        console.log(this.navParams.data);
        this.idRelacion = this.navParams.get('idRelacion');
        var loading = this.loadingCtrl.create({
            content: 'Cargandoi',
            spinner: 'dots'
        });
        loading.present();
        this.getCampusUG().subscribe(function (response) {
            if (response.ok) {
                _this.arrCampus = response.json();
            }
            loading.dismiss();
        });
    };
    OpcionesExtraPage.prototype.getCampusUG = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__src_urlConfig__["a" /* default */].baseURL + "/BuzonCampus");
    };
    OpcionesExtraPage.prototype.getDivisionesUG = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__src_urlConfig__["a" /* default */].baseURL + "/BuzonDivision");
    };
    OpcionesExtraPage.prototype.campusChanged = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargandoi',
            spinner: 'dots'
        });
        loading.present();
        this.getDivisionesUG().subscribe(function (response) {
            if (response.ok) {
                _this.arrDiv = response.json().filter(function (div) { return div.idCampus === _this.idCampusSelected; });
                _this.nombreCampusSelected = _this.arrCampus.find(function (campus) { return campus.id === _this.idCampusSelected; }).nombre;
                _this.idDivSelected = '';
                _this.nombreDivSelected = '';
            }
            loading.dismiss();
        });
    };
    OpcionesExtraPage.prototype.divChanged = function () {
        var _this = this;
        if (this.idDivSelected !== '') {
            this.nombreDivSelected = this.arrDiv.find(function (div) { return div.id === _this.idDivSelected; }).nombre;
        }
    };
    OpcionesExtraPage.prototype.validateInputs = function () {
        // nua
        if (this.idRelacion === 9 || this.idRelacion === 12) {
            console.log('(this.nua.length > 7 && this.nua.length < 6)', (this.nua.length > 7 && this.nua.length < 6), this.nua.length);
            if (this.nua === '') {
                return false;
            }
            if ((this.nua.length > 7 || this.nua.length < 6)) {
                return false;
            }
        }
        // nue
        if (this.idRelacion === 10 || this.idRelacion === 11) {
            if (this.nue === '' || this.nue.length !== 5) {
                return false;
            }
        }
        if (this.idCampusSelected === 0) {
            return false;
        }
        if (this.idDivSelected === '') {
            return false;
        }
        return true;
    };
    OpcionesExtraPage.prototype.siguienteClicked = function () {
        if (this.validateInputs()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__mandar_mensaje_mandar_mensaje__["a" /* MandarMensajePage */], {
                nombre: this.navParams.get('nombre'),
                apePat: this.navParams.get('apePat'),
                apeMat: this.navParams.get('apeMat'),
                correo: this.navParams.get('correo'),
                idRelacion: this.navParams.get('idRelacion'),
                idTipoMsg: this.navParams.get('idTipoMsg'),
                idCampus: this.idCampusSelected,
                idDiv: this.idDivSelected,
                nua: this.nua,
                nue: this.nue
            });
        }
        else {
            this.toastCtrl.create({ message: 'Por favor llena todos los campos con valores válidos.', duration: 3000, showCloseButton: true, closeButtonText: 'OK' }).present();
        }
    };
    OpcionesExtraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-opciones-extra',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\opciones-extra\opciones-extra.html"*/'<ion-header>\n\n  <ion-navbar color="azulUG" text-center>\n    <img src="../../assets/imgs/logoUG.png" width="25%" height="25%" />\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-content padding>\n      <ion-list no-lines>\n          <div id="content-extras">\n            <ion-item *ngIf="idRelacion === 9 || idRelacion === 12">\n              <ion-label stacked>NUA</ion-label>\n              <ion-input type="text" [(ngModel)]="nua" placeholder="Ingresa tu NUA."></ion-input>\n            </ion-item>\n  \n            <ion-item *ngIf="idRelacion === 10 || idRelacion === 11">\n              <ion-label stacked>Número de Empleado</ion-label>\n              <ion-input type="text" [(ngModel)]="nue" placeholder="Ingresa tu número de empleado."></ion-input>\n            </ion-item>\n          </div>\n\n          <ion-item id="itemCampus">\n            <ion-label>Campus</ion-label>\n            <ion-select interface="action-sheet" [(ngModel)]="idCampusSelected" (ionChange)="campusChanged()">\n              <ion-option *ngFor="let campus of arrCampus" [value]="campus.id">{{campus.nombre}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item id="itemDiv" *ngIf="idCampusSelected !== 0">\n            <ion-label>División</ion-label>\n            <ion-select interface="action-sheet" [(ngModel)]="idDivSelected" (ionChange)="divChanged()">\n              <ion-option *ngFor="let div of arrDiv" [value]="div.id">{{div.nombre}}</ion-option>\n            </ion-select>\n          </ion-item>\n      \n          <ion-item text-center>\n            <ion-badge class="badge-camp-div" color=\'oroUG\' text-wrap>{{nombreCampusSelected}}</ion-badge>\n            <br />\n            <ion-badge class="badge-camp-div" color=\'oroUG\' text-wrap>{{nombreDivSelected}}</ion-badge>\n          </ion-item>\n      </ion-list> \n  </ion-content> \n\n  <button ion-button icon-right large color="oroUG" full  style=" position: absolute; bottom: 0; margin: 0;" (click)="siguienteClicked()"> \n    Siguiente\n    <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\opciones-extra\opciones-extra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], OpcionesExtraPage);
    return OpcionesExtraPage;
}());

//# sourceMappingURL=opciones-extra.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acerca/acerca.module": [
		307,
		5
	],
	"../pages/buzon/buzon.module": [
		310,
		4
	],
	"../pages/mandar-mensaje/mandar-mensaje.module": [
		308,
		3
	],
	"../pages/mensaje-enviado/mensaje-enviado.module": [
		309,
		2
	],
	"../pages/nuevo-mensaje/nuevo-mensaje.module": [
		311,
		1
	],
	"../pages/opciones-extra/opciones-extra.module": [
		312,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buzon_buzon__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acerca_acerca__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__buzon_buzon__["a" /* BuzonPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__acerca_acerca__["a" /* AcercaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\tabs\tabs.html"*/'<ion-tabs color="azulUG"> \n  <ion-tab [root]="tab1Root" tabTitle="Buzón" tabIcon="md-mail-open"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Info." tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_mensaje_enviado_mensaje_enviado__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network_interface__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_mandar_mensaje_mandar_mensaje__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_opciones_extra_opciones_extra__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buzon_buzon__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acerca_acerca__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nuevo_mensaje_nuevo_mensaje__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_buzon_buzon__["a" /* BuzonPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acerca_acerca__["a" /* AcercaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nuevo_mensaje_nuevo_mensaje__["a" /* NuevoMensajePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_opciones_extra_opciones_extra__["a" /* OpcionesExtraPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_mandar_mensaje_mandar_mensaje__["a" /* MandarMensajePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_mensaje_enviado_mensaje_enviado__["a" /* MensajeEnviadoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acerca/acerca.module#AcercaPageModule', name: 'AcercaPage', segment: 'acerca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mandar-mensaje/mandar-mensaje.module#MandarMensajePageModule', name: 'MandarMensajePage', segment: 'mandar-mensaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensaje-enviado/mensaje-enviado.module#MensajeEnviadoPageModule', name: 'MensajeEnviadoPage', segment: 'mensaje-enviado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buzon/buzon.module#BuzonPageModule', name: 'BuzonPage', segment: 'buzon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-mensaje/nuevo-mensaje.module#NuevoMensajePageModule', name: 'NuevoMensajePage', segment: 'nuevo-mensaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opciones-extra/opciones-extra.module#OpcionesExtraPageModule', name: 'OpcionesExtraPage', segment: 'opciones-extra', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_buzon_buzon__["a" /* BuzonPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acerca_acerca__["a" /* AcercaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nuevo_mensaje_nuevo_mensaje__["a" /* NuevoMensajePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_opciones_extra_opciones_extra__["a" /* OpcionesExtraPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_mandar_mensaje_mandar_mensaje__["a" /* MandarMensajePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_mensaje_enviado_mensaje_enviado__["a" /* MensajeEnviadoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_network_interface__["a" /* NetworkInterface */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(211);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandarMensajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mensaje_enviado_mensaje_enviado__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_urlConfig__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network_interface__ = __webpack_require__(168);
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
 * Generated class for the MandarMensajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MandarMensajePage = (function () {
    function MandarMensajePage(navCtrl, navParams, networkInterface, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.networkInterface = networkInterface;
        this.toastCtrl = toastCtrl;
        this.mensaje = '';
        this.acepto = '';
    }
    MandarMensajePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.navParams.data);
        this.networkInterface.getIPAddress().then(function (ip) { return _this.ip = ip; }).catch(function (err) {
            console.log('error obteniendo la ip', err);
            _this.ip = 'browser';
        });
    };
    MandarMensajePage.prototype.mandarMensaje = function () {
        var _this = this;
        if (this.mensaje === '') {
            this.toastCtrl.create({ message: 'Por favor ingresa un mensaje.', duration: 3000, showCloseButton: true, closeButtonText: 'OK' }).present();
        }
        else {
            if (this.acepto === '') {
                this.toastCtrl.create({ message: 'Por favor selecciona una respuesta para el manifiesto..', duration: 3000, showCloseButton: true, closeButtonText: 'OK' }).present();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_4__src_urlConfig__["a" /* default */].baseURL + "/BuzonMensaje", {
                    ID_RELACION_UG: this.navParams.get('idRelacion'),
                    ID_TIPO_MENSAJE: this.navParams.get('idTipoMsg'),
                    IP_Q: this.ip,
                    MENSAJE_Q: this.mensaje,
                    NOMBRE_Q: this.navParams.get('nombre'),
                    CORREO_ELECTRONICO: this.navParams.get('correo'),
                    APELLIDO_PATERNO: this.navParams.get('apePat'),
                    APELLIDO_MATERNO: this.navParams.get('apeMat'),
                    ID_CAMPUS: this.navParams.get('idCampus'),
                    ID_DIVISION: this.navParams.get('idDiv'),
                    nua: this.navParams.get('nua') === '' ? null : this.navParams.get('nua'),
                    Id_Empleado: this.navParams.get('nue'),
                    MANIFIESTO: this.acepto
                }).then(function (res) {
                    if (res.data != null) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__mensaje_enviado_mensaje_enviado__["a" /* MensajeEnviadoPage */], { idMsg: res.data.ID_MENSAJE });
                    }
                    else {
                        _this.toastCtrl.create({ message: 'Ocurrió un error al mandar el mensaje.', duration: 3000 }).present();
                    }
                }).catch(function (err) { return console.log('no se pudo mandar el mensaje', err); });
            }
        }
    };
    MandarMensajePage.prototype.openAviso = function () {
        window.open('http://www.buzon.ugto.mx/buzon_captura/uploads/AVISO_DE_PRIVACIDAD.pdf', '_system');
    };
    MandarMensajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mandar-mensaje',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\mandar-mensaje\mandar-mensaje.html"*/'<!--\n  Generated template for the MandarMensajePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\' text-center>\n    <img src="../../assets/imgs/logoUG.png" width="25%" height="25%" />\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-content padding>\n        <ion-list no-lines>\n            <ion-item id="itemMsg">\n                <ion-label stacked>Mensaje</ion-label>\n                <ion-textarea type="text" [(ngModel)]="mensaje" placeholder="Ingresa tu mensaje aquí."></ion-textarea>\n              </ion-item>\n        \n              <ion-item>\n                <p text-wrap text-justify id=txtManif>Manifiesto mi consentimiento para el tratamiento de los datos personales recabados en el presente formato, los cuales serán protegidos, incorporados y tratados en la base del Buzón de quejas, sugerencias, comentarios y felicitaciones de la Universidad de Guanajuato, con fundamento en el Aviso de Privacidad Integral.</p>\n              </ion-item>\n\n              <ion-list no-lines radio-group [(ngModel)]="acepto">\n                <ion-item>\n                  <ion-label>Acepto</ion-label>\n                  <ion-radio value="SI"></ion-radio>\n                </ion-item>\n  \n                <ion-item>\n                  <ion-label>No Acepto</ion-label>\n                  <ion-radio value="NO"></ion-radio>\n                </ion-item>\n              </ion-list>\n              \n              <ion-item>\n                  <button ion-button full (click)="openAviso()" round>\n                    Descargar Aviso de Privacidad\n                  </button>\n              </ion-item>\n        </ion-list>\n    </ion-content>\n\n    <button ion-button full large color="oroUG" icon-left style=" position: absolute; bottom: 0; margin: 0;" (click)="mandarMensaje()">\n      <ion-icon name="send"></ion-icon> \n      Mandar Mensaje\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\BuzonUG\src\pages\mandar-mensaje\mandar-mensaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network_interface__["a" /* NetworkInterface */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], MandarMensajePage);
    return MandarMensajePage;
}());

//# sourceMappingURL=mandar-mensaje.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    baseURL: 'http://localhost:52300/api/'
});
//# sourceMappingURL=urlConfig.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map