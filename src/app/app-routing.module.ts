import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-app',
    loadChildren: () => import('./my-app/my-app.module').then( m => m.MyAppPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'actividades-page',
    loadChildren: () => import('./actividades-page/actividades-page.module').then( m => m.ActividadesPagePageModule)
  },
  {
    path: 'mis-actividades-page',
    loadChildren: () => import('./mis-actividades-page/mis-actividades-page.module').then( m => m.MisActividadesPagePageModule)
  },
  {
    path: 'setup-page',
    loadChildren: () => import('./setup-page/setup-page.module').then( m => m.SetupPagePageModule)
  },
  {
    path: 'actividades-detail-page',
    loadChildren: () => import('./actividades-detail-page/actividades-detail-page.module').then( m => m.ActividadesDetailPagePageModule)
  },
  {
    path: 'user-detail-page',
    loadChildren: () => import('./user-detail-page/user-detail-page.module').then( m => m.UserDetailPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
