import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPostPage } from '../add-post/add-post';

/**
 * Generated class for the ManagePostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-posts',
  templateUrl: 'manage-posts.html',
})
export class ManagePostsPage {

  toolBarColor;
  toolBartextColor;
  posts;
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toolBarColor = 'dark';
    this.toolBartextColor='light';
    this.initializeItems();
  }
  initializeItems () {
    this.posts=[ {
      "title":"First Post",
      "text":"Ig club is the best in the area", 
    }, 
    {
      "title":"Second Post",
      "text":"this is how posts with images will look like.", 
      "img" : "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg" 
    },
    {
      "title":"Third Post",
      "text":"this is how posts with images will look like.", 
      "img" : null 
    },
    {
      "title":"Fourth Post",
      "text":"this is how posts with images will look like.", 
      "img" : "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg" 
    }
    
  ]
  }

  getPosts(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.posts = this.posts.filter((item) => {
        if (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return true;
        }
        if (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return true;
        }
        return false;
      })
    }
  }

  openPage() {
    this.navCtrl.push(AddPostPage);
  }

}
