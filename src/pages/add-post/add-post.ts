import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {

  post;
  btnTitle;
  myPost;
  /* lang;
  align; */

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public ds:DataServiceProvider) {
    this.post = this.navParams.get('post');

    if (this.post.id == '') {
      this.btnTitle = "Add Post";
      console.log(this.post);
    } else {
      this.btnTitle = "Update";
      console.log(this.post);
    }
  }

  submit () {
    if (this.post.id == '') {
      var content = JSON.stringify(this.post.content);
      var post_info = {
        'title': this.post.title,
        'imageUrl': this.post.imageUrl,
        'content': content
      }
      console.log(post_info);
      var url = '/home/posts';

      /* if (this.lang == 'en') {
        this.align = 'left';
      } else {
        this.align = 'right';
      } */

      this.ds.post(url, post_info).subscribe((res)=>{
        console.log(res);
        if(res) {
          //this.navParams.get(this.align);
          this.navCtrl.pop();
        }
      } , (error)=>{console.log(error)});
    } else {
    url = '/home/posts/' + this.post.id;
    this.ds.put(url, this.post).subscribe((res) => {
      console.log(res);
      this.navCtrl.pop();
    }, (error) => { console.log(error) });
      }
  }


  /* addPost () {
    var post_info = {
      'title': this.title,
      'url': this.url,
      'content': this.content
    }
    console.log(post_info);
    var url = '/home/posts';
    this.ds.post(url, post_info).subscribe((res)=>{
      console.log(res);
      if(res) {
        this.navCtrl.pop();
      }
    } , (error)=>{console.log(error)});
  } */

}
