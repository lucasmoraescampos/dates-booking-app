import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#FAFAFA' });
      StatusBar.setStyle({ style: Style.Light });
      NavigationBar.setColor({ color: '#FAFAFA', darkButtons: true });
    }
    
  }

}
