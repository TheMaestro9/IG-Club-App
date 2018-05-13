import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events, MenuController} from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage'
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

  email: string;
  password: string;
  cameFromRegPage
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ds: DataServiceProvider, public store: Storage,
    public alertController: AlertController, public events: Events , 
    public menuCtrl :MenuController ) {

    this.showRegistrationAlert();

  }


  showRegistrationAlert() {
    this.cameFromRegPage = this.navParams.get('cameFromRegPage')
    if (typeof (this.cameFromRegPage) == 'undefined')
      this.cameFromRegPage = false;

    if (this.cameFromRegPage) {
      let confirm = this.alertController.create({
        title: 'Email Verifications',
        message:
          '<p>An email was sent to you to verify your email</p>',
        buttons: [
          {
            text: 'Send Again',
            handler: () => {
              this.showRegistrationAlert()
            }
          },
          { text: 'Done', role: 'cancel', },

        ]
      });
      confirm.present();
    }
  }
  loginButtonClicked() {
    var user_info = {
      'email': this.email,
      'password': this.password
    }
    var url = '/login'
    this.ds.post(url, user_info).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.store.set('admin', res.admin);
        this.events.publish("login:admin", res.admin)
        this.store.set('token', res.token).then(res => {
          this.ds.getToken().then(data => {
            this.navCtrl.setRoot('HomePage')
          });
        })
      }
      else
        alert(res.err)

    }, err => {
      console.log(err)
      // if (err._body.message) {
      //   alert(err._body.message)
      // }else if(err._body.err.message)
      //   alert(err._body.err.message)
      
      // if(err._body.message == "Verify your email")
      //   alert ('please verify your email first')
      // else 
      //   alert("couldn't connect to server") ; 
      //         console.log(err) }

    })
  }
  signUpButtonClicked() {
    console.log("wow ")
    this.navCtrl.push('RegisterPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false); 
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
    }

}
