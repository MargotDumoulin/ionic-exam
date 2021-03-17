import { ChampionsProvider } from './../../providers/champions/champions';
import { ChampionsPage } from './champions/champions';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChampionsNewPage } from './champions-new/champions-new';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-champions-list',
  templateUrl: 'champions-list.html',
})
export class ChampionsListPage implements OnInit {

  champions: any = [];
  championsSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Champions: ChampionsProvider) {
  }

  ngOnInit() {
    this.championsSubscription = this.Champions.championsSubject.subscribe(listChampions => {
      this.champions = listChampions;
    })
  }

  onGoToCreate() {
    this.navCtrl.push(ChampionsNewPage);
  }

  onGoToFilm(filmTitle: string, _id: string) {
    this.navCtrl.push(ChampionsPage, { title: filmTitle, id: _id });
  }

}
