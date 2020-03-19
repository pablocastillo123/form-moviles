import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasPageRoutingModule } from './estadisticas-routing.module';

import { EstadisticasPage } from './estadisticas.page';

import { SharedModule } from '../../shared/shared.module'

import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasPageRoutingModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule {}
