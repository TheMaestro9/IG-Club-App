import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-edit-posts',
  templateUrl: 'edit-posts.html',
})
export class EditPostsPage {

  post = {
    id: '',
    title: '',
    content: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataServiceProvider) {
    /* this.post.id = this.navParams.get('id');
    this.post.title = this.navParams.get('title');
    this.post.url = this.navParams.get('url');
    this.post.content = this.navParams.get('content'); */
  }

  updatePost(id, title, content) {
    var update_post = {
      'id' : this.navParams.get('id'),
      'title' : this.navParams.get('title'),
      'content' : this.navParams.get('content')
    }
    var url = 'http://ig-club.eu-gb.mybluemix.net/home/posts'; 
    this.ds.put(url, update_post).subscribe((res)=>{
      console.log(res);
    } , (error)=>{console.log(error)})
  }

}
