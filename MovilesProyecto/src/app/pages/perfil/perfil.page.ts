import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private db: AngularFirestore,private route:ActivatedRoute,private userServ: UserService) {
   
  }

  ngOnInit() {
    console.log(this.userServ.getUserEmail())
  }



}
