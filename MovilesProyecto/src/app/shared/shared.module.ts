import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { TabComponent } from '../components/tab/tab.component'

import { ContenidoComponent } from '../components/contenidoForm/contenido.component'

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TabComponent, ContenidoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    TabComponent,
    ContenidoComponent
  ]
})
export class SharedModule { }
