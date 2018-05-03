import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-books',
  templateUrl: 'add-books.html',
})
export class AddBooksPage {

  title;
  url=null;
  isbn;
  price;
  payMethod;
  category;
  condition;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sellBook () {
    var book_info = {
      'title': this.title,
      'url': this.url,
      'isbn': this.isbn,
      'price': this.price,
      'paymentMethod': this.payMethod,
      'category': this.category,
      'condition': this.condition
    }
    console.log(book_info);
  }

}
