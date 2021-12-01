import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#4A246D' });
      StatusBar.setStyle({ style: Style.Dark });
      NavigationBar.setColor({ color: '#251236', darkButtons: false });
    }

  }

  ionViewDidLeave() {
    
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#FAFAFA' });
      StatusBar.setStyle({ style: Style.Light });
    }

  }

  public login() {
    this.navCtrl.navigateRoot('/home');
  }

}
