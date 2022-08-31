import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailPagePage } from './user-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailPagePageRoutingModule {}
