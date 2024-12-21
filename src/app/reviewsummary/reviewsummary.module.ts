import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsummaryPageRoutingModule } from './reviewsummary-routing.module';

import { ReviewsummaryPage } from './reviewsummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsummaryPageRoutingModule
  ],
  declarations: [ReviewsummaryPage]
})
export class ReviewsummaryPageModule {}
