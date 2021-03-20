import { Champion } from '../../app/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'champion-form',
  templateUrl: 'champion-form.html'
})
export class ChampionFormComponent {

  @Input() champion: Champion;
  @Input() errors: any = {};

  constructor() {}

}
