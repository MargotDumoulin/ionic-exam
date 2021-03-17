import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ChampionsProvider {

  private champions: any = [];
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
