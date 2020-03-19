import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { CategoriaService } from "../../services/categoria.service"

import { Router } from '@angular/router';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  public category = {
    categoria : ''
  }

  public categoria_valor : string

  public subcategory : string

  public disable : boolean = true

  public obtenerById

  constructor(private menuCtrl : MenuController, private categoria : CategoriaService, 
    private router: Router) {}

  ngOnInit() {
  }

  toggleMenu () {
    this.menuCtrl.toggle()
  }

  createCategory () {
    this.category = {
      categoria : this.categoria_valor,
    }
    this.categoria.addCategory(this.category).then(() => {
      this.router.navigateByUrl("/admin/tabs/formulario")
    })
    this.categoria_valor = ""
    this.subcategory = ""
  }

  ngDoCheck(): void {

  if (this.categoria_valor == null && this.subcategory == null) {
    this.disable = true
  } else {
    this.disable = false
  }




}

}
