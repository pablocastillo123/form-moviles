import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';

import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component'

import { SharedModule } from '../../shared/shared.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaPageRoutingModule,
    SharedModule
  ],
  declarations: [CategoriaPage]
})
export class CategoriaPageModule {}
