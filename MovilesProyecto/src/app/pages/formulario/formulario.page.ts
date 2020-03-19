import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';

import { AlertController, NavController, MenuController } from '@ionic/angular';

import {FormService} from '../../services/form.service'

import { GetSubByIdService } from '../../services/get-sub-by-id.service'

import  {Type} from "../../interface/form.interface"
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.css'],
})
export class FormularioPage {
  
  form : Type[]

  private result 


  constructor(private router: Router, private crud : FormService,
    private afAuth : AngularFireAuth, private getSub : GetSubByIdService) {

    }


   ngOnInit() {
     this.crud.getForms().subscribe(res => {
      this.form = res 
    }) 
  }

  onLogout () {
    this.afAuth.auth.signOut()
    this.router.navigateByUrl('/login')
    console.log(this.result)
  }

  

}
