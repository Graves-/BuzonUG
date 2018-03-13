import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MandarMensajePage } from './mandar-mensaje';

@NgModule({
  declarations: [
    MandarMensajePage,
  ],
  imports: [
    IonicPageModule.forChild(MandarMensajePage),
  ],
})
export class MandarMensajePageModule {}
