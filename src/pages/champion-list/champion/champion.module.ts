import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionPage } from './champion';

@NgModule({
  declarations: [
    ChampionPage
  ],
  imports: [
    IonicPageModule.forChild(ChampionPage),
    ComponentsModule
  ],
})
export class ChampionPageModule {}
