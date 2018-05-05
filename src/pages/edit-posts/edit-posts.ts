import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-edit-posts',
  templateUrl: 'edit-posts.html',
})
export class EditPostsPage {

  post = {
    id: '',
    title: '',
    url: '',
    content: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataServiceProvider, public storage: Storage) {
    this.post = this.navParams.get('post')
  }

  /* updatePost(post, id) {
    var url = '/home/posts/' + this.post.id;
    this.ds.put(url, this.post).subscribe((res) => {
      console.log(res);
    }, (error) => { console.log(error) });
    this.navCtrl.pop();
  } */

}
