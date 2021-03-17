import { Champion } from './../../../app/types.d';
import { ChampionsProvider } from './../../../providers/champions/champions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-champions-new',
  templateUrl: 'champions-new.html',
})
export class ChampionsNewPage {

  public championForm: FormGroup;

  public champion: Champion = {
    isWomen: null,
    image: null,
    name: null,
    passive: null,
    age: null,
    skillQ: null,
    skillE: null,
    skillW: null,
    skillR: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Champion: ChampionsProvider,
    private formBuilder: FormBuilder
  ) {
    this.championForm = this.formBuilder.group({
      isWomen: ['', Validators.required],
      name: ['', Validators.required],
      skillQ: ['', Validators.required],
      skillW: ['', Validators.required],
      skillE: ['', Validators.required],
      skillR: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  onAdd() {
    this.Champion.saveNewChampion(this.champion).subscribe(() => {
      this.champion = {
        isWomen: null,
        image: null,
        name: null,
        passive: null,
        age: null,
        skillQ: null,
        skillE: null,
        skillW: null,
        skillR: null
      };

      this.navCtrl.pop();
    })
  }

}
