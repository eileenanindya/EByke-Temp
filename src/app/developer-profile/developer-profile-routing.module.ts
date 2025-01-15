import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperProfilePage } from './developer-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DeveloperProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperProfilePageRoutingModule {}
