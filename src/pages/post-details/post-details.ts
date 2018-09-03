import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  posts;
  post;
  contentAlign;
  titleAlign;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('post');
    if (this.post.title.search('ت') != -1) {
      this.titleAlign = 'right';
    } else {
      this.titleAlign = 'left';
    }
    if (this.post.content.search('ت') != -1) {
      this.contentAlign = 'right';
    } else {
      this.contentAlign = 'left';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
  }

}
