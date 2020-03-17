import { Injectable } from '@angular/core';

import  {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'

import { Category } from '../interface/category'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoryCollection : AngularFirestoreCollection<Category>;

  private categories : Observable<Category[]>;

  constructor(db: AngularFirestore , datos : AngularFirestore) {
    this.categoryCollection= db.collection<Category>('category')
    this.categories = this.categoryCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      }
    ))
   }

    getCategories() {
    return this.categories
   }

    updateCategory (form: Category , id: string) {
    return this.categoryCollection.doc<Category>(id).update(form)
   }

  addCategory (input: Category) {
    return this.categoryCollection.add(input) 
  }

  removeCategory (id: string) {
    return this.categoryCollection.doc(id).delete()
  }
}
