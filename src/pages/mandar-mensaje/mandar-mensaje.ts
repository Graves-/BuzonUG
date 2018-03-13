import { MensajeEnviadoPage } from './../mensaje-enviado/mensaje-enviado';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import axios from 'axios';
import urlConfig from '../../../src/urlConfig';
import { NetworkInterface } from '@ionic-native/network-interface';

/**
 * Generated class for the MandarMensajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mandar-mensaje',
  templateUrl: 'mandar-mensaje.html',
})
export class MandarMensajePage {
  paramsMensaje: any;
  mensaje: string = '';
  ip: string;
  acepto: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private networkInterface: NetworkInterface, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.data);
    this.networkInterface.getIPAddress().then((ip) => this.ip = ip).catch(err => {
      console.log('error obteniendo la ip', err);
      this.ip = 'browser'
    });
  }

  mandarMensaje(){
    if(this.mensaje === ''){
      this.toastCtrl.create({ message: 'Por favor ingresa un mensaje.', duration: 3000, showCloseButton: true, closeButtonText: 'OK'}).present();
    }else{
      if(this.acepto === ''){
        this.toastCtrl.create({ message: 'Por favor selecciona una respuesta para el manifiesto..', duration: 3000, showCloseButton: true, closeButtonText: 'OK'}).present();
      }else{
        axios.post(`${urlConfig.baseURL}/BuzonMensaje`, {
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
        }).then((res) => {
          if(res.data != null){
            this.navCtrl.push(MensajeEnviadoPage, { idMsg: res.data.ID_MENSAJE });
          }else{
            this.toastCtrl.create({ message: 'Ocurrió un error al mandar el mensaje.', duration: 3000 }).present();
          }
        }).catch( err => console.log('no se pudo mandar el mensaje', err));
      }
    }
  }

  openAviso(){
    window.open('http://www.buzon.ugto.mx/buzon_captura/uploads/AVISO_DE_PRIVACIDAD.pdf', '_system');
  }
}
