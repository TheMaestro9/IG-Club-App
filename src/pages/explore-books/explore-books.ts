import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksCartPage } from '../books-cart/books-cart';

/**
 * Generated class for the ExploreBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore-books',
  templateUrl: 'explore-books.html',
})
export class ExploreBooksPage {

  iconName: boolean = false;
  itemCount = 0;
  @Input ('highlighted') isSelected: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openCart () {
    this.navCtrl.push(BooksCartPage);
  }

  addToCart () {
    this.iconName = !this.iconName;
    this.isSelected = !this.isSelected;
    this.itemCount += (this.isSelected) ? 1 : -1;
    /* if (this.iconName && book) {
      console.log('book added');
      this.itemCount++;
    } else {
      console.log('book removed');
      this.itemCount--;   
    } */
  }

}
