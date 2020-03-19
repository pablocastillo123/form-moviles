import { UtilToolService } from './../../services/utiltool.service';
import { EstadisticaService } from './../../services/estadistica.service';
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
    private router : Router,private estadis:EstadisticaService,private utilTool:UtilToolService ) { 
  }

  ngOnInit() {
  }

  createForm () {
      let data_estadis = {
        id_estadis: this.form.id,
        formulario: this.form.formulario,
        cont_form: 0
      }

      console.log(data_estadis)
      console.log(this.form)


      this.estadis.setData(data_estadis,this.form.id)

      this.formulario.addForm(this.form,this.form.id) 
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
