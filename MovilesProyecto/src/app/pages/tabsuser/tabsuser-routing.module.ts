import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsuserPage } from './tabsuser.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsuserPage,
    children: [
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'estadisticas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule)
          }
        ]
      },
      {
        path: 'crear',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/formulario',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/formulario',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsuserPageRoutingModule {}
