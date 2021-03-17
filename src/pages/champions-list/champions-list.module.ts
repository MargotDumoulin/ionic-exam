import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionsListPage } from './champions-list';

@NgModule({
  declarations: [
    ChampionsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionsListPage),
  ],
})
export class ChampionsListPageModule {}
