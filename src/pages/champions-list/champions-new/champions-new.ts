import { ChampionsProvider } from './../../../providers/champions/champions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-champions-new',
  templateUrl: 'champions-new.html',
})
export class ChampionsNewPage {

  public champion: any = {
    title: null,
    country: null,
    onAir: false,
    pictureLink: null,
    productor: null,
    realisator: null,
    releaseDate: null,
    scenario: null,
    synopsis: null,
    time: null,
    music: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Champion: ChampionsProvider
  ) {}

  onAdd() {
    this.Champion.saveNewChampion(this.champion).subscribe(() => {
      this.champion = {
        title: null,
        country: null,
        onAir: false,
        pictureLink: null,
        productor: null,
        realisator: null,
        releaseDate: null,
        scenario: null,
        synopsis: null,
        time: null,
        music: null
      };

      this.navCtrl.pop();
    })
  }

}
