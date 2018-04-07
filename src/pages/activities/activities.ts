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
  posts
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pageTitle = navParams.get('title');
    this.posts = [{
      "title": "Paris Visit",
      "text": "visiting paris for 5 days, the trip includes lots of activities such as "+
              " visiting the eviel tower. it will cost around 230$ per person all inclusive ",
    },
    {
      "title": "Second Activity",
      "text": "the unicorn",
      "img": "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg"
    }
    ]


  }

  ionViewDidLoad() {
  }

}
