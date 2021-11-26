import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuitesPageRoutingModule } from './suites-routing.module';
import { SuitesPage } from './suites.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitesPageRoutingModule,
    SwiperModule
  ],
  declarations: [SuitesPage]
})
export class SuitesPageModule {}
