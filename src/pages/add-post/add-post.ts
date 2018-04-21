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

  title;
  url= null;
  content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public ds:DataServiceProvider) {
  }


  addPost () {
    var post_info = {
      'title': this.title, 
      'url': this.url,
      'content': this.content
    }
    console.log(post_info);
    var url = 'http://ig-club.eu-gb.mybluemix.net/home/posts'; 
    this.ds.post(url, post_info).subscribe((res)=>{
      console.log(res);
    } , (error)=>{console.log(error)});
    this.navCtrl.pop(); 
  }

}
