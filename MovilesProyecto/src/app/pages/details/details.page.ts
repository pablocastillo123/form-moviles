import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

import { NavController, LoadingController } from '@ionic/angular' 

import {  Type } from '../../interface/form.interface'

import { FormService } from '../../services/form.service'

import { CategoriaService } from '../../services/categoria.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    formul : Type = {
    formulario: '',
    nombre_input : [''],
    tipo_input : [''],
    nombre_categoria: ''
  }
 
  formId = null

  public categories = []

  constructor(private route : ActivatedRoute, private nav: NavController, 
    private form : FormService, 
    private loadingController : LoadingController,
    private categoriaServ : CategoriaService ) { }

  ngOnInit() {
    this.formId = this.route.snapshot.params["id"]
    if(this.formId) {
      this.loadForm()
    }
  }

  async loadForm () {
    const loading = await this.loadingController.create({
      message : 'Loading.....'
    })
    await loading.present()
    this.form.getForm(this.formId).subscribe(res => {
      loading.dismiss()
      this.formul = res
    })
  }

  onRemove (formul : string) {
    this.form.removeForm(formul)
  }

  onChangeSubCategoria (e) {
    console.log(e.target.textContent)
  }


}
