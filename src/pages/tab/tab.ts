import { LocationPage } from './../location/location';
import { AboutPage } from './../about/about';
import { ChampionListPage } from '../champion-list/champion-list';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  home = HomePage;
  champions = ChampionListPage;
  about = AboutPage;
  location = LocationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
