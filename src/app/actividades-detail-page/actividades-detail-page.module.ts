import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesDetailPagePageRoutingModule } from './actividades-detail-page-routing.module';

import { ActividadesDetailPagePage } from './actividades-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesDetailPagePageRoutingModule
  ],
  declarations: [ActividadesDetailPagePage]
})
export class ActividadesDetailPagePageModule {}
