import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisActividadesPagePage } from './mis-actividades-page.page';

const routes: Routes = [
  {
    path: '',
    component: MisActividadesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisActividadesPagePageRoutingModule {}
