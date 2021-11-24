import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    NgxMaskIonicModule.forRoot()
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
