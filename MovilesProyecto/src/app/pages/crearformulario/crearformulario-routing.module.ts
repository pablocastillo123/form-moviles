import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearformularioPage } from './crearformulario.page';

const routes: Routes = [
  {
    path: '',
    component: CrearformularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearformularioPageRoutingModule {}
