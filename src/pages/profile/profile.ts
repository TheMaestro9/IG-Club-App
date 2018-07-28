import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { DataServiceProvider } from '../../providers/data-service/data-service';

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
    private store: Storage , public DS :DataServiceProvider) {

    this.user_info= {
      user_email: "",
      phone_no : "",
      school: ""
    }
    this.getUserInfo();
  }
  getUserInfo() {
      var url = '/user/user-info'
      this.DS.get(url).subscribe(res=>{
        console.log(res)
        if(res.success){
          this.user_info= res.userInfo
        }
        else{
          alert("coudn't get Your info")
        }
      })
  }

	logout() {
    this.store.set('token', "");
    this.store.set('admin', false) ;
    this.navCtrl.setRoot("LoginPage");
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
