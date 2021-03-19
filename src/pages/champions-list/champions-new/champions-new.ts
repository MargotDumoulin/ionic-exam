import { Champion } from './../../../app/types.d';
import { ChampionsProvider } from './../../../providers/champions/champions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-champions-new',
  templateUrl: 'champions-new.html',
})
export class ChampionsNewPage {

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
    private Champions: ChampionsProvider,
    private Toast: ToastController
  ) {
    this.validationRules = this.Champions.getValidationRules();
  }

  onAdd() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
      this.Champions.saveNewChampion(this.champion).subscribe(() => {
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
          message: "Votre champion a été sauvegardé",
          duration: 2000
        });

        toast.present();
        this.navCtrl.pop();
      });
    }
  }

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
