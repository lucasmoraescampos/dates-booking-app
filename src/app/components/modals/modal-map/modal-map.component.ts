import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

declare const google: any;

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.scss'],
})
export class ModalMapComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;

  @Input() suites: any[];

  private latLng: any;

  private marker: any;

  private map: any;

  private geocoder = new google.maps.Geocoder();

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.initMap();
  }

  ionViewWillEnter() {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
  }

  ionViewWillLeave() {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: false });
    }
  }

  onSwiper(swiper) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  private async initMap() {

    const coordinates = await Geolocation.getCurrentPosition();

    this.latLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    const mapOptions = {
      center: this.latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' }
          ]
        }
      ]
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      position: this.latLng,
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillOpacity: 0.9,
        strokeWeight: 3,
        fillColor: '#5384ED',
        strokeColor: '#FFFFFF'
      },
    });

  }

}
