import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { ModalRegistrationAcceptancesModule } from 'src/app/components/modals/modal-registration-acceptances/modal-registration-acceptances.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    NgxMaskIonicModule.forRoot(),
    ModalRegistrationAcceptancesModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
