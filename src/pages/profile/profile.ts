import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user_info; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: Storage) {

    this.user_info= {
      user_email: "walid@zezo.com", 
      phone_no : "010010010010", 
      school: "PortSaid"
    }
  }

  
	logout() {
		this.store.set('user_id', "");
    this.navCtrl.setRoot("LoginPage");
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
