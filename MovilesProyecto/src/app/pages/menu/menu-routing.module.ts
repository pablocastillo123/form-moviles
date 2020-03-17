import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
      {
        path: 'categoria',
        loadChildren: () => import('../categoria/categoria.module').then( m => m.CategoriaPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
