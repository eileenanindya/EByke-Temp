import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsummaryPage } from './reviewsummary.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsummaryPageRoutingModule {}
