import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearformularioPageRoutingModule } from './crearformulario-routing.module';

import { CrearformularioPage } from './crearformulario.page';

import { SharedModule } from '../../shared/shared.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearformularioPageRoutingModule,
    SharedModule
  ],
  declarations: [CrearformularioPage]
})
export class CrearformularioPageModule {}
