import { Component } from '@angular/core';

import { BuzonPage } from '../buzon/buzon';
import { AcercaPage } from '../acerca/acerca';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BuzonPage;
  tab2Root = AcercaPage;

  constructor() {

  }
}
