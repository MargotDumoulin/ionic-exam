import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionNewPage } from './champion-new';

@NgModule({
  declarations: [
    ChampionNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionNewPage),
    ComponentsModule
  ],
})
export class ChampionNewPageModule {}
