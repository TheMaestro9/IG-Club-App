import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataServiceProvider } from '../../providers/data-service/data-service';



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

  postTitle;
  imageLink= null;
  postDescription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:DataServiceProvider) {
  }

  addPost () {
    var post_info = {
      'postTitle': this.postTitle,
      'imageLink': this.imageLink,
      'postDescription': this.postDescription
    }
    console.log(post_info);
  }

}
