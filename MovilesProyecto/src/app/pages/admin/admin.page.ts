import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import {FormService} from '../../services/form.service'

import  {Type} from "../../interface/form.interface"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  form : Type[]

  constructor(private menuCtrl : MenuController, private crud : FormService) {}

   ngOnInit() {
     this.crud.getForms().subscribe(res => {
      this.form = res 
    })
  }

  toggleMenu () {
    this.menuCtrl.toggle()
  }
 
  }

  


