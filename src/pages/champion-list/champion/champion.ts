import { Champion } from '../../../app/types';
import { ChampionProvider } from '../../../providers/champion/champion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-champion',
  templateUrl: 'champion.html',
})
export class ChampionPage {

  update: boolean = false;
  validationRules: any = {};
  errors: any = {};
  id: string;
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
    private Champion: ChampionProvider,
    private Toast: ToastController
  ) {}

  ngOnInit() {
    this.id = this.navParams.get('id');
    this.champion = { ...this.Champion.getChampionById(this.id) };
    this.validationRules = this.Champion.getValidationRules();
  }

  onUpdate() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
      this.Champion.update(this.champion).subscribe(() => {
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

  onDelete() {
    const alert = this.alertCtrl.create({
      title: "Supprimer ce champion",
      subTitle: "Êtes-vous certain de vouloir supprimer ce champion ?",
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.Champion.delete(this.champion.id);
            const toast = this.Toast.create({
              message: "Le champion a été supprimé.",
              duration: 2000
            });

            toast.present();
            this.navCtrl.pop();
          }
        }
      ]
    });

    alert.present();
  }

  // Allows the user to access the modification form
  onGoToUpdate() {
    const alert = this.alertCtrl.create({
      title: "Modifier ce champion",
      subTitle: "Êtes-vous certain de vouloir modifier ce champion ?",
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
