import { UtilToolService } from './../../services/utiltool.service';
import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input , DoCheck} from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Category} from "../../interface/category"
import {SubCategory} from "../../interface/subcategory"


import { SubcategoryService } from "../../services/subcategory.service"
import { CategoriaService } from '../../services/categoria.service'
import { Type } from '../../interface/form.interface'

import {  GetSubByIdService } from '../../services/get-sub-by-id.service'



@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContenidoComponent implements OnInit, DoCheck {

  public input : Array<Number> = []

  @Output() public childEvent = new EventEmitter();
  @Output() public formulario = new EventEmitter();

  public titulo_formulario : string 
  public titulo_input = []
  public valor_categoria : string 
  public type_input = []
  public disable : boolean = true

  public form : Type = {
    formulario: '',
    nombre_input : [''],
    tipo_input : [''],
    nombre_categoria: ''
  }

  public subCategory = []
  public category : Category[] = []
  public type : Array<String> = ['Number' , 'Date', 'String', 'Time']
  public idSub


  public valorSub = []


  constructor(private alertController: AlertController, 
    private crud: CategoriaService, 
    private sub : SubcategoryService,
    private getSub : GetSubByIdService) { 
  }

  onChangeCategoria(value){
    this.valor_categoria = value.detail.value
    this.getSub.getSubcategoryByCategory(this.valor_categoria).subscribe(res => {
      this.valorSub = res
    })
   
  }
  
  ngDoCheck(): void {

    const inputSend = this.titulo_input.filter(element => {
      return element != null
    })

    const typeInput = this.type_input.filter(element => {
      return element != null
    })

    this.form = {
      formulario: this.titulo_formulario,
      nombre_input : [...inputSend], 
      tipo_input : [...typeInput],
      nombre_categoria: this.valor_categoria
    }

    this.formulario.emit(this.form)


  }


  

  ngOnInit() {

    this.childEvent.emit('true')
    this.crud.getCategories().subscribe(res => {
      this.category = res 
      console.log(this.category)
    })
   }

  agregar () {    
    this.input.push(this.input.length + 1)
    if (this.input.length >= 1){
      this.childEvent.emit('false')
  }
}

  eliminar () {
    this.input.pop()
  if(this.input.length == 0) {
    this.childEvent.emit('true')
    this.alertaVacio()
  }
  this.titulo_input.pop()
  }
  
  async alertaVacio() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'problema',
      message: 'Por favor agregue inputs',
      buttons: ['OK']
    });

    await alert.present();
  }


}
