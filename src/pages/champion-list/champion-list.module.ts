import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionListPage } from './champion-list';

@NgModule({
  declarations: [
    ChampionListPage
  ],
  imports: [
    IonicPageModule.forChild(ChampionListPage),
  ],
})
export class ChampionListPageModule {}
