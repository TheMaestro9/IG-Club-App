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
      'bookTitle': 'sea monsters',
      'category': 'edexcel | cambridge',
      'price': '16$',
      'paymentMethod': 'cash on delivery'
    },
    {
      'imgUrl': 'assets/imgs/book.jpg',
      'bookTitle': 'path of the dead',
      'category': 'IGCSEs | cambridge',
      'price': '24$',
      'paymentMethod': 'via vodafone cash'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public ds :DataServiceProvider) {
      this.getUserBooks() ; 
  }

  openCart () {
    this.navCtrl.push(BooksCartPage);
  }

  getUserBooks(){
    var url = '/books/books-for-user' 
    this.ds.get(url).subscribe(res=>{
      if(res.success){
        this.books = res.books; 
        console.log(res.books)
      }
      else 
        console.log(res.error)
    })
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
