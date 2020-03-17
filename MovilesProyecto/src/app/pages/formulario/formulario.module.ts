import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';

import { FormularioPage } from './formulario.page';

import {ContenidoComponent } from '../../components/contenidoForm/contenido.component'

import { SharedModule } from "../../shared/shared.module"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule,
    SharedModule
  ],
  declarations: [FormularioPage, ContenidoComponent]
})
export class FormularioPageModule {}
