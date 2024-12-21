import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapshargaPageRoutingModule } from './mapsharga-routing.module';

import { MapshargaPage } from './mapsharga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapshargaPageRoutingModule
  ],
  declarations: [MapshargaPage]
})
export class MapshargaPageModule {}
