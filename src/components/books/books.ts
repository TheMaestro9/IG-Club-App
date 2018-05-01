import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage';

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

  @Input ('books') books;
  @Input ('cartBtn') cartBtn;
  @Input ('adminBtn') adminBtn;

  user_info;
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public ds: DataServiceProvider) {
      this.user_info= {
        user_email: "", 
        phone_no : ""
      }
      this.getUserInfo();
    }

     getUserInfo() {
      var url = '/user/user-info'
      this.ds.get(url).subscribe(res=>{
        console.log(res)
        if(res.success) {
          this.user_info = res.userInfo
        }
      })
    }

    ngOnInit () {
      this.books.forEach(book => {
        if(book.url == null)
          book.url = 'assets/imgs/default-book.jpg'; 
      });
    }
}
