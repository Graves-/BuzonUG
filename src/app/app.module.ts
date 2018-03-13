import { MensajeEnviadoPage } from './../pages/mensaje-enviado/mensaje-enviado';
import { NetworkInterface } from '@ionic-native/network-interface';
import { MandarMensajePage } from './../pages/mandar-mensaje/mandar-mensaje';
import { OpcionesExtraPage } from './../pages/opciones-extra/opciones-extra';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { BuzonPage } from '../pages/buzon/buzon';
import { AcercaPage } from '../pages/acerca/acerca'; 
import { TabsPage } from '../pages/tabs/tabs';
import { NuevoMensajePage } from './../pages/nuevo-mensaje/nuevo-mensaje';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BuzonPage,
    AcercaPage,
    NuevoMensajePage,
    OpcionesExtraPage,
    MandarMensajePage,
    MensajeEnviadoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuzonPage,
    AcercaPage,
    NuevoMensajePage,
    OpcionesExtraPage,
    MandarMensajePage,
    MensajeEnviadoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkInterface,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
