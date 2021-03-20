import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChampionFormComponent } from './champion-form/champion-form';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [ChampionFormComponent],
	imports: [
    CommonModule,
    IonicModule
  ],
	exports: [ChampionFormComponent]
})
export class ComponentsModule {}
