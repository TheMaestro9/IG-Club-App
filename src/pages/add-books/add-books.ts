import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { DataServiceProvider } from '../../providers/data-service/data-service';

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
  admin ; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public store :Storage , public Ds: DataServiceProvider) {
    this.checkAdmin(); 
  }

  checkAdmin(){
    this.store.get('admin').then(admin=>{
      this.admin =  admin 
    })
  }
  sellBook () {
    var book_info = {
      'bookTitle': this.title,
      'imgUrl': this.url,
      'ISBN': this.isbn,
      'price': this.price,
      'paymentMethod': this.payMethod,
      'category': this.category,
      'bookCondition': this.condition,
      'byAdmin': this.admin
    }
    console.log(book_info);
    var url = "/books/add-book"
    this.Ds.post(url , book_info).subscribe(res=>{
      this.navCtrl.setRoot('HomePage') ;  
      console.log(res)
    }, (error=>{console.log(error)}))
  }

}
