import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeEnviadoPage } from './mensaje-enviado';

@NgModule({
  declarations: [
    MensajeEnviadoPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeEnviadoPage),
  ],
})
export class MensajeEnviadoPageModule {}
