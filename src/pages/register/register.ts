import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  Selection;
  Increase;
  userName;
  password;
  email;
  mobile;
  school;
  grade = null;
  children: any = [];

  constructor(public navCtrl: NavController, public ds: DataServiceProvider,
    public storage: Storage, public menuCtrl: MenuController,
    public alertController: AlertController) {
    this.children.push({ 'name': '', 'age': '' });

  }

  indexToWord(index) {
    var Word = ["First", "Sencond", "Third", "Forth", "Fifth"]
    return Word[index];
  }
  addInputs() {
    this.children.push({ 'name': '', 'age': '' });
  }

  register() {

    if (this.children != null && this.children[0].name == '')
      this.children = null;

    var user_info = {
      'username': this.userName,  
      'email': this.email,
      'password': this.password,
      'mobile': this.mobile,
      'grade': this.grade,
      'school': this.school,
      'children': this.children
    }

    console.log(user_info);
    var url = '/signup';
    this.ds.post(url, user_info).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.storage.set("token", res.token).then(res => {
          this.ds.getToken().then(data => {
            this.navCtrl.setRoot('HomePage')
          });
        })
      }
    }, (err) => {
      console.log(err)
      this.createErrorAlert(JSON.parse(err._body).err.message)
    })


  }

  createErrorAlert(msg) {
    let confirm = this.alertController.create({
      title: 'Error',
      message: msg,
      buttons: [
        { text: 'OK', role: 'cancel', },
      ]
    });
    confirm.present();
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
