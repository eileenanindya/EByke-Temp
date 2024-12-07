import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetUpProfilePageRoutingModule } from './set-up-profile-routing.module';

import { SetUpProfilePage } from './set-up-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetUpProfilePageRoutingModule
  ],
  declarations: [SetUpProfilePage]
})
export class SetUpProfilePageModule {}
