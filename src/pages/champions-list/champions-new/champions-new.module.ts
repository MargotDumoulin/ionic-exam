import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionsNewPage } from './champions-new';

@NgModule({
  declarations: [
    ChampionsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionsNewPage),
    ComponentsModule
  ],
})
export class ChampionsNewPageModule {}
