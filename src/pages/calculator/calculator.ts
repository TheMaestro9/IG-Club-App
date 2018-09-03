import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  oLevelS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  olevels() {
    var olevels = this.oLevelS;
    var olevelS = olevels.options[olevels.selectedIndex].value;

    console.log(this.oLevelS + ' ' + olevelS);

    /* var e = document.getElementById("olevelA");
    var olevelA = e.options[e.selectedIndex].value;

    var e = document.getElementById("olevelB");
    var olevelB = e.options[e.selectedIndex].value;

    var e = document.getElementById("olevelC");
    var olevelC = e.options[e.selectedIndex].value;

    var olevelscore = new Array(2);

    olevelscore[0] = (parseInt(olevelS) * 100) + (parseInt(olevelA) * 95) + (parseInt(olevelB) * 85) + (parseInt(olevelC) * 67.5);

    olevelscore[1] = (parseInt(olevelS)) + (parseInt(olevelA)) + (parseInt(olevelB)) + (parseInt(olevelC));

    return olevelscore; */


  }



}
