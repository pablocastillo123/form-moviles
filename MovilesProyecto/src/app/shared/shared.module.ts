import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from '../components/sidemenu/sidemenu.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidemenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports : [
    SidemenuComponent
  ]
})
export class SharedModule { }
