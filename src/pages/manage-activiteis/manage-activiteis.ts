import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicTapInput } from 'ionic-angular';
import { ActivitiesPage } from '../activities/activities';

/**
 * Generated class for the ManageActiviteisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-activiteis',
  templateUrl: 'manage-activiteis.html',
})
export class ManageActiviteisPage {

  title

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openActivities (title) {
    var adminBtn = true;
    var manageBtn = true;
    this.navCtrl.push("ActivitiesPage", {title, adminBtn, manageBtn});
    }

  }
