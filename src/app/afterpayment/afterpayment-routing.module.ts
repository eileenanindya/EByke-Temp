import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterpaymentPage } from './afterpayment.page';

const routes: Routes = [
  {
    path: '',
    component: AfterpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterpaymentPageRoutingModule {}
