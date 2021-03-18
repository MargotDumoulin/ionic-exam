import { Champion } from './../../../app/types.d';
import { ChampionsProvider } from './../../../providers/champions/champions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-champions',
  templateUrl: 'champions.html',
})
export class ChampionsPage {

  update: boolean = false;
  validationRules: any = {};
  errors: any = {};
  id: string;
  title: string;
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
    public alertCtrl: AlertController,
    private Champions: ChampionsProvider,
    private Toast: ToastController
  ) {}

  ngOnInit() {
    this.title = this.navParams.get('title');
    this.id = this.navParams.get('id');
    this.champion = this.Champions.getChampionById(this.id);
    this.validationRules = this.Champions.getValidationRules();
  }

  onUpdate() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
      this.Champions.update(this.champion).subscribe(() => {
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
          message: "Vos changements ont été sauvegardés",
          duration: 2000
        });

        toast.present();
        this.navCtrl.pop();
        this.update = false;
      });
    }
  }

  onSupp() {
    this.Champions.delete(this.champion.id)
    this.navCtrl.pop();
  }

  onGoAccessUpdate() {
    const alert = this.alertCtrl.create({
      title: "Etes-vous sûr de vouloir modifier ?",
      subTitle: "Vous rendrez possible la modification",
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: 'Confirmer',
          handler: () => { this.update = !this.update }
        }
      ]
    });

    alert.present();
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
