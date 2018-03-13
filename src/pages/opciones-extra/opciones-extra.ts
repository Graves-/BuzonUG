import { Http } from '@angular/http';
import { MandarMensajePage } from './../mandar-mensaje/mandar-mensaje';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import urlConfig from '../../../src/urlConfig';


@IonicPage()
@Component({
  selector: 'page-opciones-extra',
  templateUrl: 'opciones-extra.html',
})
export class OpcionesExtraPage {

  idCampusSelected: number = 0;
  idDivSelected: string = '';
  nombreCampusSelected: string = '';
  nombreDivSelected: string = '';
  arrCampus: { 'id': number, 'nombre': string }[];
  arrDiv: { 'id': string, 'nombre': string, 'idCampus': number }[];
  nua: string = '';
  nue: string = '';
  idRelacion: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionesExtraPage');
    console.log(this.navParams.data);
    this.idRelacion = this.navParams.get('idRelacion');

    let loading = this.loadingCtrl.create({
      content: 'Cargandoi',
      spinner: 'dots'
    });
    loading.present();
    
    this.getCampusUG().subscribe(response => {
      if(response.ok){ this.arrCampus = response.json(); }
      loading.dismiss();
    });
  }

  getCampusUG(){
    return this.http.get(`${urlConfig.baseURL}/BuzonCampus`);
  }

  getDivisionesUG(){
    return this.http.get(`${urlConfig.baseURL}/BuzonDivision`);
  }

  campusChanged(){
    let loading = this.loadingCtrl.create({
      content: 'Cargandoi',
      spinner: 'dots'
    });
    loading.present();
    this.getDivisionesUG().subscribe(response => {
      if(response.ok){
        this.arrDiv = response.json().filter( div => div.idCampus === this.idCampusSelected);
        this.nombreCampusSelected = this.arrCampus.find(campus => campus.id === this.idCampusSelected).nombre;
        this.idDivSelected = '';
        this.nombreDivSelected = '';
      }
      loading.dismiss();
    });
  }

  divChanged(){
    if(this.idDivSelected !== ''){
      this.nombreDivSelected = this.arrDiv.find( div => div.id === this.idDivSelected).nombre;
    }
  }

  validateInputs(){
    // nua
    if(this.idRelacion === 9 || this.idRelacion === 12){
      console.log('(this.nua.length > 7 && this.nua.length < 6)', (this.nua.length > 7 && this.nua.length < 6), this.nua.length);
      if(this.nua === '') { return false; }
      if((this.nua.length > 7 || this.nua.length < 6)){ return false; }
    }
    // nue
    if(this.idRelacion === 10 || this.idRelacion === 11){
      if(this.nue === '' || this.nue.length !== 5) { return false; }
    }
    if(this.idCampusSelected === 0) { return false; }
    if(this.idDivSelected === '') {return false; }
    return true;
  }

  siguienteClicked(){
    if(this.validateInputs()) {
      this.navCtrl.push(MandarMensajePage, {
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
    }else{
      this.toastCtrl.create({ message: 'Por favor llena todos los campos con valores válidos.', duration: 3000, showCloseButton: true, closeButtonText: 'OK'}).present();
    }
  }
}
