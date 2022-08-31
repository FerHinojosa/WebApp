import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesDetailPagePage } from './actividades-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesDetailPagePageRoutingModule {}
