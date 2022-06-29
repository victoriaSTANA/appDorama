import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DoramaService {
  collection: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  criarDorama(dorama: any){
    dorama.id = this.db.createId();
    this.collection = this.db.collection('dorama');
    return this.collection.doc(dorama.id).set(dorama);
  }

  listarTodosDoramas(){
    this.collection = this.db.collection('dorama');
    return this.collection.valueChanges();
  }

  selecionarPorId(id: any){
    this.collection = this.db.collection('dorama');
    return this.collection.doc(id).get();
  }

  remove(dorama: any){
    this.collection = this.db.collection('dorama');
    this.collection.doc(dorama.id).delete();
  }

  edit(dorama: any){
    this.collection = this.db.collection('dorama');
    this.collection.doc(dorama.id).update(dorama);
  }


}
