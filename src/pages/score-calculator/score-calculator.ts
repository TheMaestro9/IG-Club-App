import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoreCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-calculator',
  templateUrl: 'score-calculator.html'
})
export class ScoreCalculatorPage {
  link 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.link = "http://www.theigclub.com/how-to-calculate-my-igcse-score/"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreCalculatorPage');
  }

}
