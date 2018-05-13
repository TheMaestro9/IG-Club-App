import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import {Storage} from '@ionic/storage';


/**
 * Generated class for the AddPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {

  post;
  btnTitle;

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
      var post_info = {
        'title': this.post.title, 
        'imageUrl': this.post.imageUrl,
        'content': this.post.content
      }
      console.log(post_info);
      var url = '/home/posts'; 
      this.ds.post(url, post_info).subscribe((res)=>{
        console.log(res);
        if(res) {
          this.navCtrl.pop(); 
        }
      } , (error)=>{console.log(error)});
    } else {
    url = '/home/posts/' + this.post.id;
    this.ds.put(url, this.post).subscribe((res) => {
      console.log(res);
    }, (error) => { console.log(error) });
    this.navCtrl.pop();
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
