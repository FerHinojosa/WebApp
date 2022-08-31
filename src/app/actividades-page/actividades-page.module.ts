import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesPagePageRoutingModule } from './actividades-page-routing.module';

import { ActividadesPagePage } from './actividades-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesPagePageRoutingModule
  ],
  declarations: [ActividadesPagePage]
})
export class ActividadesPagePageModule {}
