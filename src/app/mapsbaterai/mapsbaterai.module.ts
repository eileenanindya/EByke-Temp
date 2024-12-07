import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsbateraiPageRoutingModule } from './mapsbaterai-routing.module';

import { MapsbateraiPage } from './mapsbaterai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsbateraiPageRoutingModule
  ],
  declarations: [MapsbateraiPage]
})
export class MapsbateraiPageModule {}
