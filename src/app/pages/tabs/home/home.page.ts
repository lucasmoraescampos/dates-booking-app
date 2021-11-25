import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMapComponent } from 'src/app/components/modals/modal-map/modal-map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public suites: any[] = [
    {
      image: 'https://www.guiademoteis.com.br/Images/moteis/492-Mont-Blanc-Motel/suites/2508-Presidencial-Triplex/fotos/9472817a-80c7-472d-8bd3-f57d82b9a0ab-suites.jpg',
      name: 'Mont Blanc Motel',
      local: 'Vila Brasília - Aparecida de Goiânia',
      min_value: 72.5,
      max_value: 379
    },
    {
      image: 'https://www.guiademoteis.com.br/Images/moteis/1617-Times-Motel/suites/9799-Luxo/fotos/foto1-suites.gif',
      name: 'Times Motel',
      local: 'Condomínio das Esmeraldas - Goiânia',
      min_value: 72.5,
      max_value: 379
    },
    {
      image: 'https://www.guiademoteis.com.br/Images/moteis/607-Chale-Motel/suites/3242-Executiva/fotos/foto1-suites.png',
      name: 'Chalé Motel',
      local: 'Ipiranga - Goiânia',
      min_value: 72.5,
      max_value: 379
    },
    {
      image: 'https://www.guiademoteis.com.br/Images/moteis/4510-Motel-Canada/suites/14187-Toronto/fotos/foto10-suites.jpg',
      name: 'Motel Canadá',
      local: 'Distrito Agroindustrial - Senador Canedo',
      min_value: 72.5,
      max_value: 379
    }
  ];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }

  public async map() {

    const modal = await this.modalCtrl.create({
      component: ModalMapComponent,
      componentProps: {
        suites: this.suites
      }
    });

    return await modal.present();
    
  }

}
