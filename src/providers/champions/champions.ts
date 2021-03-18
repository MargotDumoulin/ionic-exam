import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ChampionsProvider {

  private champions: any = [];
  private validationRules: any = {
    age: (e) => isNaN(e) || e === null || e === '' || e <= 0,
    image: (e) => e === null || e === '',
    isWomen: (e) => e === null || e === undefined,
    passive: (e) => e === null || e === '',
    name: (e) => e === null || e === '',
    skillQ: (e) => e === null || e === '',
    skillW: (e) => e === null || e === '',
    skillE: (e) => e === null || e === '',
    skillR: (e) => e === null || e === '',
    id: () => false // skip id validation :p
  };

  championsSubject = new Subject<any[]>();

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllChampions();
  }

  emitChampionsSubject() {
    this.championsSubject.next(this.champions.slice());
  }

  getChampionById(id: string) {
    for (const champion of this.champions) {
      if (champion.id == id) return champion;
    }
  }

  saveNewChampion(champion: any) {
    return new Observable(obs => {
      this.db.collection('champions').add(champion).then(() => {
        console.log('success');
        obs.next();
      })
    })
  }

  getAllChampions() {
    return this.db.collection('champions').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.champions = res.map((champion: any) => ({ ...champion.data, id: champion.id }));
      this.emitChampionsSubject();
    });
  }

  getValidationRules() {
    return this.validationRules;
  }

  update(champion: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`films/${id}`).update(champion);
      obs.next();
    })
  }

  delete(id: any) {
    this.db.doc(`champions/${id}`).delete();
  }
}
