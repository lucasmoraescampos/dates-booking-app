import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.page.html',
  styleUrls: ['./suites.page.scss'],
})
export class SuitesPage implements OnInit {

  public array = new Array(10);

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setStyle({ style: Style.Dark });
    }
  }

  ionViewWillLeave() {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: false });
      StatusBar.setStyle({ style: Style.Light });
    }
  }

  public back() {
    this.navCtrl.back();
  }

}
