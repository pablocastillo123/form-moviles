import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'


@Injectable({
  providedIn: 'root'
})

export class UserService {

  public user_id;
  constructor(private db: AngularFirestore) {}

  getUserEmail(){
    return this.user_id;
  }

  setUserEmail(id:string){
    this.user_id = id;
  }
}
