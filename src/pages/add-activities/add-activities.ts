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
    if(this.navParams.get('pageTitle')  != null)
      this.post['type'] = this.navParams.get('pageTitle');
    console.log(this.post)

    if (this.post.type != null) {
      this.btnTitle = "Add";
      console.log('I know its empty');
    } else {
      this.btnTitle = "Update";
      console.log(this.post);
    }
  }


  submit() {
    console.log("here")
    if (this.post.id == null) {
      console.log('there')
      var post_info = this.post
      console.log(post_info);
      var url = '/activities';
      this.ds.post(url, post_info).subscribe((res) => {
        console.log(res);
        if (res) {
          this.navCtrl.pop();
        }
      }, (error) => { console.log(error) });
    } else {
      url = '/activities/' + this.post.id;
      this.ds.put(url, this.post).subscribe((res) => {
        console.log(res);
      }, (error) => { console.log(error) });
      this.navCtrl.pop();
    }
  }




  /* addTrip () {
    var trip_info = {
      'title': this.title, 
      'url': this.url,
      'content': this.content,
      'type': this.type
    }
    console.log(this.post);
  } */

}
