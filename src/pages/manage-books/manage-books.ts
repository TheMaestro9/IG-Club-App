import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBooksPage } from '../add-books/add-books';
import { Storage } from '@ionic/storage';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ManageBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-books',
  templateUrl: 'manage-books.html',
})
export class ManageBooksPage {

  books = [
    {
      'title': 'sea monsters',
      'category': 'edexcel | cambridge',
      'price': '16',
      'payMethod': 'cash on delivery'
    },
    {
      'title': 'path of the dead',
      'category': 'IGCSEs | cambridge',
      'price': '24',
      'payMethod': 'via vodafone cash'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, 
    public ds :DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageBooksPage');
  }

  openPage() {
    this.navCtrl.push(AddBooksPage);
  }

}
