import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailPagePageRoutingModule } from './user-detail-page-routing.module';

import { UserDetailPagePage } from './user-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailPagePageRoutingModule
  ],
  declarations: [UserDetailPagePage]
})
export class UserDetailPagePageModule {}
