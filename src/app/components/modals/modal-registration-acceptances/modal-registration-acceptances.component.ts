import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';

@Component({
  selector: 'app-modal-registration-acceptances',
  templateUrl: './modal-registration-acceptances.component.html',
  styleUrls: ['./modal-registration-acceptances.component.scss'],
})
export class ModalRegistrationAcceptancesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      NavigationBar.setColor({ color: '#FAFAFA', darkButtons: true });
    }
    
  }

}
