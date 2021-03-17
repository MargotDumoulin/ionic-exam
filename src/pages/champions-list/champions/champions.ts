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
  title: string;
  id: string;
  champion: any;

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
  }

  onUpdate() {
    this.Champions.update(this.champion.data, this.champion.id).subscribe(() => {
      const toast = this.Toast.create({
        message: "Vos changements ont été sauvegardés",
        duration: 2000
      });

      toast.present();
      this.update = false;
    })
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
}
