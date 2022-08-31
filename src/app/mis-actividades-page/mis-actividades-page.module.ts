import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisActividadesPagePageRoutingModule } from './mis-actividades-page-routing.module';

import { MisActividadesPagePage } from './mis-actividades-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisActividadesPagePageRoutingModule
  ],
  declarations: [MisActividadesPagePage]
})
export class MisActividadesPagePageModule {}
