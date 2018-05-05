import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the AddActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-activities',
  templateUrl: 'add-activities.html',
})
export class AddActivitiesPage {

  post;
  btnTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataServiceProvider) {
    this.post = this.navParams.get('post');
    this.post.type = this.navParams.get('pageTitle');

    if (this.post.id == '') {
      this.btnTitle = "Add";
      console.log('I know its empty');        
    } else {
      this.btnTitle = "Update";
      console.log(this.post);
      }
  }

  submit () {
    if (this.post.id == '') {
      console.log(this.post);
      var url = '/activities'; 
      this.ds.post(url, this.post).subscribe((res)=>{
        console.log(res);
        if(res) {
          this.navCtrl.pop(); 
        }
      } , (error)=>{console.log(error)});
    } else {
    url = '/activities/' + this.post.id;
    this.ds.put(url, this.post).subscribe((res) => {
      console.log(res);
    }, (error) => { console.log(error) });
    this.navCtrl.pop();
      }
  }

}
