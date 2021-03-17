import { AboutPage } from './../about/about';
import { ChampionsListPage } from './../champions-list/champions-list';
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
  champions = ChampionsListPage;
  about = AboutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
