import { ChampionProvider } from '../../providers/champion/champion';
import { ChampionPage } from './champion/champion';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChampionNewPage } from './champion-new/champion-new';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-champion-list',
  templateUrl: 'champion-list.html',
})
export class ChampionListPage implements OnInit {

  champions: any = [];
  championsSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private Champion: ChampionProvider
  ) {}

  ngOnInit() {
    // Display a loading message while champions are being load
    const loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      content: 'Les champions sont en train d\'être chargés...',
      duration: 2000
    });
    loading.present();
    this.championsSubscription = this.Champion.championSubject.subscribe(listChampions => {
      this.champions = listChampions;
    });
    this.Champion.emitChampionsSubject();
  }

  onGoToCreate() {
    this.navCtrl.push(ChampionNewPage);
  }

  onGoToChampion(_id: string) {
    this.navCtrl.push(ChampionPage, { id: _id });
  }

  ngOnDestroy() {
    this.championsSubscription.unsubscribe();
  }

}
