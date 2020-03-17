import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component'

import {SharedModule} from '../../shared/shared.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    SharedModule
  ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
