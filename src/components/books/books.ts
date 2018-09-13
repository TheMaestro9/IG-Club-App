import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage';
// import { EditBooksPage } from '../../pages/edit-books/edit-books';

/**
 * Generated class for the BooksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'books',
  templateUrl: 'books.html'
})
export class BooksComponent {

  @Input('books') books;
  @Input('cartBtn') cartBtn;
  admin = false;

  user_info;
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public ds: DataServiceProvider) {
    this.user_info = {
      user_email: "",
      phone_no: "",
    }
    this.checkAdmin();
    //console.log("hello iam here ")
    //this.getUserInfo();
  }

  checkAdmin() {
    this.storage.get("admin").then(admin => {
      this.admin = admin;
      console.log("in books the admin is", admin)
    })
  }

  addToCart(book) {
    book.requested = !book.requested
  }


  /* getUserInfo() {
   var url = '/user/user-info'
   this.ds.get(url).subscribe(res=>{
     console.log(res)
     if(res.success) {
       this.user_info = res.userInfo
     }
   })
 } */

  ngOnInit() {
    // var bookModule = this ;
    // setTimeout(function() {
    //   bookModule.handleImgUrl() ;
    // }, 1000);
  }

  // handleImgUrl() {
  //   console.log(this.books)
  //   console.log("iam listening")
  //   for (var i ; i < this.books.length ; i++){

  //     if (this.books[i].imgUrl == null || this.books[i].imgUrl =='null'){
  //       console.log("found a funcken bug")
  //       this.books[i].imgUrl = 'assets/imgs/default-book.jpg';
  //     }
  //   }
  // }

  editBook(book) {
    // this.navCtrl.push(EditBooksPage, book);
  }

  deleteBook(id) {

  }
}
