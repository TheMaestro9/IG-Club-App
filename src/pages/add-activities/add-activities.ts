import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-activities',
  templateUrl: 'add-activities.html',
})
export class AddActivitiesPage {

  title;
  url= null;
  content;
  type;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get('pageTitle');
  }

  addTrip () {
    var trip_info = {
      'title': this.title, 
      'url': this.url,
      'content': this.content,
      'type': this.type
    }
    console.log(trip_info);
  }

}
