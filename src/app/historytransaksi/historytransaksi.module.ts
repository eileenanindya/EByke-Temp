import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorytransaksiPageRoutingModule } from './historytransaksi-routing.module';

import { HistorytransaksiPage } from './historytransaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorytransaksiPageRoutingModule
  ],
  declarations: [HistorytransaksiPage]
})
export class HistorytransaksiPageModule {}
