import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from '../components/sidemenu/sidemenu.component'
import { RouterModule } from '@angular/router';

import { TabComponent } from '../components/tab/tab.component'


@NgModule({
  declarations: [SidemenuComponent, TabComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports : [
    SidemenuComponent,
    TabComponent
  ]
})
export class SharedModule { }
