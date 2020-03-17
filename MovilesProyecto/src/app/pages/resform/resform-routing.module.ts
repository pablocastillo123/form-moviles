import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResformPage } from './resform.page';

const routes: Routes = [
  {
    path: '',
    component: ResformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResformPageRoutingModule {}
