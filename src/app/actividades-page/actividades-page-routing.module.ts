import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesPagePage } from './actividades-page.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesPagePageRoutingModule {}
