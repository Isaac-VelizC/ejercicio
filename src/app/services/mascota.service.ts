import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mascota as Coleccion } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor( private dbf: AngularFirestore) { }

  getItem( id:string ) {
    return this.dbf.collection('mascotas').doc(id).snapshotChanges();
  }

  addMascota( mascota: any ) {
    return this.dbf.collection<Coleccion>('mascotas').doc().set(Object.assign({}, mascota))
  }

  allMascota() {
    return this.dbf.collection<Coleccion>('mascotas').snapshotChanges();
  }

  delete( id:string ) {
    return this.dbf.collection('mascotas').doc(id).delete();
  }

  updateMascota( id:string, data:Coleccion ) {
    return this.dbf.collection('mascotas').doc(id).update(data);
  }
}
