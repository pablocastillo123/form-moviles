import { Component, OnInit, Input, DoCheck } from '@angular/core';

import {FormService } from '../../services/form.service'

import { AlertController } from '@ionic/angular';

import { Type } from '../../interface/form.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearformulario',
  templateUrl: './crearformulario.page.html',
  styleUrls: ['./crearformulario.page.scss'],
})
export class CrearformularioPage implements OnInit {

  @Input() form : Type

  constructor(private formulario : FormService, private alertController : AlertController,
    private router : Router ) { 
  }

  ngOnInit() {
  }

  create () {
      this.formulario.addForm(this.form) 
      this.alerta('Creado Satisfactoriamente') 
      this.router.navigateByUrl("/admin/tabs/formulario")
  }

  async alerta(mensaje) {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
