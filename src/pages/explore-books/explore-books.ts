import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { DataServiceProvider } from '../../providers/data-service/data-service';
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

  books = [
    {
      //'url': 'assets/imgs/default-book.jpg',
      'title': 'sea monsters',
      'category': 'edexcel | cambridge',
      'price': '16$',
      'payMethod': 'cash on delivery'
    },
    {
      'url': 'assets/imgs/book.jpg',
      'title': 'path of the dead',
      'category': 'IGCSEs | cambridge',
      'price': '24$',
      'payMethod': 'via vodafone cash'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public ds :DataServiceProvider) {
  }

  openCart () {
    this.navCtrl.push(BooksCartPage);
  }

  /* addToCart () {
    this.iconName = !this.iconName;
    this.isSelected = !this.isSelected;
    this.itemCount += (this.isSelected) ? 1 : -1;
    /* if (this.iconName && book) {
      console.log('book added');
      this.itemCount++;
    } else {
      console.log('book removed');
      this.itemCount--;   
    } 
  } */

}
