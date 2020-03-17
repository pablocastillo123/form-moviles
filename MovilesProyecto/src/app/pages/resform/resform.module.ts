import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResformPageRoutingModule } from './resform-routing.module';

import { ResformPage } from './resform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResformPageRoutingModule
  ],
  declarations: [ResformPage]
})
export class ResformPageModule {}
