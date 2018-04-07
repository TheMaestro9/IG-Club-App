import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string ; 
  password :string ; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public ds:DataServiceProvider) {
  }


  loginButtonClicked(){ 
    console.log('welcome') ; 
    var user_info = {
      'email':this.email,
      'password':this.password
    }
    var url = 'http://ig-club.eu-gb.mybluemix.net/login'
    this.ds.post(url , user_info).subscribe((data)=>{
        console.log(data); 
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
