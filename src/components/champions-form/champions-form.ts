import { Champion } from './../../app/types.d';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'champions-form',
  templateUrl: 'champions-form.html'
})
export class ChampionsFormComponent {

  @Input() champion: Champion;
  @Input() errors: any = {};

  constructor() {}

}
