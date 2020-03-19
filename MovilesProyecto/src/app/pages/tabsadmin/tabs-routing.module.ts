import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'formulario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../formulario/formulario.module').then(m => m.FormularioPageModule)
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
              import('../categoria/categoria.module').then(m => m.CategoriaPageModule)
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
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
