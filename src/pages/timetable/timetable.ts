import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
link;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.link = "http://www.theigclub.com/igcse-timetable-generator"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

}
