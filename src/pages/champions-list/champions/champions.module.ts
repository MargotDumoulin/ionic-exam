import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionsPage } from './champions';

@NgModule({
  declarations: [
    ChampionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionsPage),
  ],
})
export class ChampionsPageModule {}
