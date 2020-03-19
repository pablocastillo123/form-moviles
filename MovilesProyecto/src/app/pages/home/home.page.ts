import { AngularFireAuth } from '@angular/fire/auth';
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
  private result 
  public collec_form: Type[];
  public button_user_admin: boolean = false;

  constructor(
    private menuCtrl : MenuController,private utilTool:UtilToolService,private router:Router,
    private firestore: AngularFirestore,private userform : FormService,private afAuth : AngularFireAuth
  ){}

  ngOnInit() {
    this.userform.getForms().subscribe(res =>{
      this.collec_form = res;
    })
   
  }
  
  toggleMenu () {
    this.menuCtrl.toggle()
  }

  onLogout () {
    this.afAuth.auth.signOut()
    this.router.navigateByUrl('/login')
    console.log(this.result)
  }

}
