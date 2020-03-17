import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { ContenidoComponent } from "../../components/contenidoForm/contenido.component"

import {FormService} from '../../services/form.service'

import  {Type} from "../../interface/form.interface"
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.css'],
})
export class FormularioPage implements DoCheck {
  
 
  public disable : boolean

  public form : Type


  ngDoCheck(): void {
    console.log(this.form)
  }

  constructor(private from : FormService, private nav : NavController, private router : Router) { }

  ngOnInit() {
   
  }

  async create () {
    this.from.addForm(this.form).then(() => {
      this.router.navigateByUrl("/admin")
    })
  }

  

}
