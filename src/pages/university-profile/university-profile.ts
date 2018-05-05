import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UniversityProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-university-profile',
  templateUrl: 'university-profile.html',
})
export class UniversityProfilePage {

  universities;
  university

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.university = this.navParams.get('university');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversityProfilePage');
  }

}
