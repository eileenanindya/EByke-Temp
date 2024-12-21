import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapshargaPage } from './mapsharga.page';

const routes: Routes = [
  {
    path: '',
    component: MapshargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapshargaPageRoutingModule {}
