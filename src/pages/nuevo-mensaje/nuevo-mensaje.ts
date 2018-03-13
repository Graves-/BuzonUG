import { Http } from '@angular/http';
import { MandarMensajePage } from './../mandar-mensaje/mandar-mensaje';
import { OpcionesExtraPage } from './../opciones-extra/opciones-extra';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import urlConfig from '../../../src/urlConfig';

@IonicPage()
@Component({
  selector: 'page-nuevo-mensaje',
  templateUrl: 'nuevo-mensaje.html',
})
export class NuevoMensajePage {

  nombre: string;
  apePat: string;
  apeMat: string;
  correo: string;
  idTipoMsgSelected: number = 0;
  idRelacionSelected: number = 0;
  arrTipoMensaje: { 'ID_TIPO_MENSAJE': number, 'DESC_TIPO_MENSAJE': string }[];
  arrRelacionUG: { 'ID_RELACION_UG': number, 'DESC_RELACION_UG': string }[];
  arrIdsOpcionesExtra: number[] = [9,10,11,12];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private http: Http, private toastCtrl: ToastController) {
  }

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando',
      spinner: 'dots'
    });

    loading.present();
    this.getTipoMensaje().subscribe(response => {
      if(response.ok){
        this.arrTipoMensaje = response.json();
        this.getRelacionesUG().subscribe(response => {
          if(response.ok){ this.arrRelacionUG = response.json(); }
          loading.dismiss();
        })
      }else{ loading.dismiss(); }
    });
  }

  getTipoMensaje(){
    return this.http.get(`${urlConfig.baseURL}/BuzonTipoMensaje`);
  }

  getRelacionesUG(){
    return this.http.get(`${urlConfig.baseURL}/BuzonRelacionUG`);
  }

  relacionChanged(){
    let elm = <HTMLElement>document.getElementById('itemRelacion');
    if(this.idRelacionSelected !== 0){
      elm.style.border = '2px solid #3a9b2b';
    }else{
      elm.style.border = '2px solid #0C2D56';
    }
  }

  tipoMsgChanged(){
    let elem = <HTMLElement>document.getElementById('itemTipoMsg');
    if(this.idTipoMsgSelected !== 0){
      elem.style.border = '2px solid #3a9b2b';
    }else{
      elem.style.border = '2px solid #0C2D56';
    }
  }

  siguienteClicked(){
    const params = {
      nombre: this.nombre,
      apePat: this.apePat,
      apeMat: this.apeMat,
      correo: this.correo,
      idRelacion: this.idRelacionSelected,
      idTipoMsg: this.idTipoMsgSelected
    };
    //Si la relación seleccionada es un alumno, egresado, administrativo o académico.
    if(this.arrIdsOpcionesExtra.indexOf(this.idRelacionSelected) !== -1){
      if(this.validateInputs()){
        if(this.validateEmail(this.correo)) { this.navCtrl.push(OpcionesExtraPage, params);  } 
        else { this.showToastEmail(); }
      }else{
        //send toast incompleto 
        this.showToastIncompleto();
      }
    }else{
      if(this.validateInputs()) {
        if(this.validateEmail(this.correo)) { this.navCtrl.push(MandarMensajePage, params); } 
        else { this.showToastEmail(); }
      }else{
        //send toast incompleto
        this.showToastIncompleto();
      }
    }
  }

  showToastEmail(){
    this.toastCtrl.create({ message: 'Por favor ingresa un correo electrónico válido.', duration: 3000, showCloseButton: true, closeButtonText: 'OK'}).present();
  }
  
  showToastIncompleto(){
    this.toastCtrl.create({ message: 'Por favor llena todos los campos.', duration: 3000, showCloseButton: true, closeButtonText: 'OK'}).present();
  }

  validateInputs(){
    if(this.nombre === '') { return false; }
    if(this.apeMat === '') { return false; }
    if(this.apePat === '') { return false; }
    if(this.correo === '') { return false; }
    if(this.idTipoMsgSelected === 0) { return false; }
    if(this.idRelacionSelected === 0) { return false; }
    return true;
  }

  validateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
  }
}