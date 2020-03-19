import { UtilToolService } from './../../services/utiltool.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormService } from './../../services/form.service';
import { Type } from '../../interface/form.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  public collec_form: Type[];
  public button_user_admin: boolean = false;

  constructor(
    private menuCtrl : MenuController,private utilTool:UtilToolService,
    private firestore: AngularFirestore,private userform : FormService
  ){}

  ngOnInit() {
    this.userform.getForms().subscribe(res =>{
      this.collec_form = res;
    })
   
  }
  
  toggleMenu () {
    this.menuCtrl.toggle()
  }

}
