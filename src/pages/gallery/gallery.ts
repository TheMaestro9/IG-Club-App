import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  images:any;
  path="assets/imgs/";
  rows:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rows=[1,2]
    this.images= [this.path+'11.jpg', this.path+'22.jpg', this.path+'33.jpg',this.path+'44.jpg'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
