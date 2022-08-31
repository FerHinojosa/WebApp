import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../actividades-page/actividades-page.module').then(m => m.ActividadesPagePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../mis-actividades-page/mis-actividades-page.module').then(m => m.MisActividadesPagePageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../setup-page/setup-page.module').then(m => m.SetupPagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
