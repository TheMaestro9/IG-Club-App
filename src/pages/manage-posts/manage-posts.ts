import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPostPage } from '../add-post/add-post';
import {Storage} from '@ionic/storage';
import {DataServiceProvider} from '../../providers/data-service/data-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public ds :DataServiceProvider) {
    this.toolBarColor = 'dark';
    this.toolBartextColor='light';
    this.initializeItems();
    this.getPosts();
  }
  initializeItems () {
    this.posts=[ {
      "title":"First Post",
      "content":"Ig club is the best in the area", 
    }, 
    {
      "title":"Second Post",
      "content":"this is how posts with images will look like.", 
      "img" : "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg" 
    },
    {
      "title":"Third Post",
      "content":"this is how posts with images will look like.", 
      "img" : null 
    },
    {
      "title":"Fourth Post",
      "content":"this is how posts with images will look like.", 
      "img" : "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg" 
    }
    
  ]
  }

  search(ev: any) {
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

  getPosts(){ 
    var url = 'http://ig-club.eu-gb.mybluemix.net/home/posts' ;
      console.log(url);  
      this.ds.get(url).subscribe(res=>{
        console.log(res)
        this.posts=res.posts ;
      },err=>(console.log(err)))
  }

  openPage() {
    this.navCtrl.push(AddPostPage);
  }

}
