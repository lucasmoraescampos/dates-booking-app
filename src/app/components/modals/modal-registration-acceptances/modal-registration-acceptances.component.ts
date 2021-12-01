import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registration-acceptances',
  templateUrl: './modal-registration-acceptances.component.html',
  styleUrls: ['./modal-registration-acceptances.component.scss'],
})
export class ModalRegistrationAcceptancesComponent implements OnInit {

  public ok: boolean = true;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      NavigationBar.setColor({ color: '#FAFAFA', darkButtons: true });
    }
    
  }

  public confirm() {
    this.modalCtrl.dismiss();
  }

}
