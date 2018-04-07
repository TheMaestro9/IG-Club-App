import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  pageTitle 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pageTitle = navParams.get('title') ; 
    console.log("in activities page " , this.pageTitle)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

}
