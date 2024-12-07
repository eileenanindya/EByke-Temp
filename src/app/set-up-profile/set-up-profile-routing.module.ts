import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetUpProfilePage } from './set-up-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SetUpProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetUpProfilePageRoutingModule {}
