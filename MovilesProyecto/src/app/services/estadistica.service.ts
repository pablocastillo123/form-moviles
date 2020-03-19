import { Injectable } from '@angular/core';
import  {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  private estadis_Collection : AngularFirestoreCollection;
  private estadis;

  constructor(private db: AngularFirestore) {
    this.estadis_Collection= db.collection('estadistica')
    this.estadis = this.estadis_Collection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      }
    ))
   }

  getDataEstadis(){
    return this.estadis
  }

  updateForm (data, id: string) {
    return this.estadis_Collection.doc(id).update(data);
  }

  setData(data,form) {
    return this.estadis_Collection.doc(form).set(data) 
  }

  getDataEstadisForm (id: string) {
    return this.estadis_Collection.doc(id).snapshotChanges()
  }
}
