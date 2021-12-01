import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRegistrationAcceptancesComponent } from './modal-registration-acceptances.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalRegistrationAcceptancesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ModalRegistrationAcceptancesModule { }
