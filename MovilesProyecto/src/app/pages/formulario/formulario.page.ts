import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';

import { AlertController, NavController, MenuController } from '@ionic/angular';

import {FormService} from '../../services/form.service'

import  {Type} from "../../interface/form.interface"


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.css'],
})
export class FormularioPage {
  
  form : Type[]

  constructor(private menuCtrl : MenuController, private crud : FormService) {}

   ngOnInit() {
     this.crud.getForms().subscribe(res => {
      this.form = res 
    })
  }

  

}
