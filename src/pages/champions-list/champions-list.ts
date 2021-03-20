import { ChampionsProvider } from './../../providers/champions/champions';
import { ChampionsPage } from './champions/champions';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private Champions: ChampionsProvider
  ) {}

  ngOnInit() {
    const loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      content: 'Les champions sont en train d\'être chargés...',
      duration: 2000
    });
    loading.present();
    this.championsSubscription = this.Champions.championsSubject.subscribe(listChampions => {
      this.champions = listChampions;
    });
    this.Champions.emitChampionsSubject();
  }

  onGoToCreate() {
    this.navCtrl.push(ChampionsNewPage);
  }

  onGoToChampion(_id: string) {
    this.navCtrl.push(ChampionsPage, { id: _id });
  }

  ngOnDestroy() {
    this.championsSubscription.unsubscribe();
  }

}
