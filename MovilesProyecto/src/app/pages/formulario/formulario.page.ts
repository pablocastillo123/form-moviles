import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';

import { AlertController, NavController, MenuController } from '@ionic/angular';

import {FormService} from '../../services/form.service'

import  {Type} from "../../interface/form.interface"
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.css'],
})
export class FormularioPage {
  
  form : Type[]

  constructor(private router: Router, private crud : FormService,
    private afAuth : AngularFireAuth) {}

   ngOnInit() {
     this.crud.getForms().subscribe(res => {
      this.form = res 
    })
  }

  onLogout () {
    this.afAuth.auth.signOut()
    this.router.navigateByUrl('/login')
  }

  

}
