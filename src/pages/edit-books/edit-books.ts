import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-books',
  templateUrl: 'edit-books.html',
})
export class EditBooksPage {

  book = {
    id: '',
    url: '',
    title: '',
    category: '',
    price: '',
    payMethod: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book.id = this.navParams.get('id');
    this.book.title = this.navParams.get('title');
    this.book.url = this.navParams.get('url');
    this.book.category = this.navParams.get('category');
    this.book.price = this.navParams.get('price');
    this.book.payMethod = this.navParams.get('payMethod');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBooksPage');
  }

}
