import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalMapComponent } from './modal-map.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ModalMapComponent],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ]
})
export class ModalMapModule { }
