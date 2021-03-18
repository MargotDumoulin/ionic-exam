import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChampionsFormComponent } from './champions-form/champions-form';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [ChampionsFormComponent],
	imports: [
    CommonModule,
    IonicModule
  ],
	exports: [ChampionsFormComponent]
})
export class ComponentsModule {}
