import { ComponentsModule } from './../../../components/components.module';
import { ChampionsFormComponent } from './../../../components/champions-form/champions-form';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionsPage } from './champions';

@NgModule({
  declarations: [
    ChampionsPage
  ],
  imports: [
    IonicPageModule.forChild(ChampionsPage),
    ComponentsModule
  ],
})
export class ChampionsPageModule {}
