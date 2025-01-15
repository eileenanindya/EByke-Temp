import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeveloperProfilePageRoutingModule } from './developer-profile-routing.module';

import { DeveloperProfilePage } from './developer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeveloperProfilePageRoutingModule
  ],
  declarations: [DeveloperProfilePage]
})
export class DeveloperProfilePageModule {}
