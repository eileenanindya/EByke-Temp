import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterpaymentPageRoutingModule } from './afterpayment-routing.module';

import { AfterpaymentPage } from './afterpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterpaymentPageRoutingModule
  ],
  declarations: [AfterpaymentPage]
})
export class AfterpaymentPageModule {}
