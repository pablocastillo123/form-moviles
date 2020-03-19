import { Injectable } from '@angular/core';

import  {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'

import { SubCategory } from '../interface/subcategory'

import { Observable } from 'rxjs'

import { map } from 'rxjs/operators'

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class GetSubByIdService {

  private subcategoryCollection : AngularFirestoreCollection<SubCategory>;

  private subcategories : Observable<SubCategory[]>;

  idSelect

  db: AngularFirestore


  constructor(db: AngularFirestore) {
 
    this.db = db

  }

   getSubcategoryByCategory (categoria) {
    this.subcategoryCollection = this.db.collection('category', ref => 
    ref.where('categoria', "==" , categoria)
  )

  this.subcategories = this.subcategoryCollection.snapshotChanges().pipe(map(
    actions => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id
        return {id, ...data}
      })
    }
  ))
  return this.subcategories
   }






}
