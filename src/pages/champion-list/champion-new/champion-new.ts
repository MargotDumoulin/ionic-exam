import { Champion } from '../../../app/types';
import { ChampionProvider } from '../../../providers/champion/champion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-champion-new',
  templateUrl: 'champion-new.html',
})
export class ChampionNewPage {

  validationRules: any = {};
  errors: any = {};
  errorsLength = 0;
  confirm: boolean;
  champion: Champion = {
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
    private Champion: ChampionProvider,
    private Toast: ToastController
  ) {
    this.validationRules = this.Champion.getValidationRules();
  }

  onAdd() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
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

        const toast = this.Toast.create({
          message: "Votre champion a été sauvegardé.",
          duration: 2000
        });

        toast.present();
        this.navCtrl.pop();
      });
    }
  }

  // Check each field with a its dedicated validation rule
  // Register an error in errors array if there is one
  validateFields() {
    const champion = Object.entries(this.champion);
    champion.forEach(field => {
      if (this.validationRules[field[0]](field[1])) {
        this.errors[field[0]] = true;
      } else {
        delete this.errors[field[0]];
      }
    });
  }

}
