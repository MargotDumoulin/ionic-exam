import { ChampionsFormComponent } from './../../../components/champions-form/champions-form';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionsNewPage } from './champions-new';

@NgModule({
  declarations: [
    ChampionsNewPage,
    ChampionsFormComponent
  ],
  imports: [
    IonicPageModule.forChild(ChampionsNewPage),
  ],
})
export class ChampionsNewPageModule {}
