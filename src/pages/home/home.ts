import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts; 
  toolBarColor;
  toolBartextColor;

  searchQuery: string = '';

  constructor(public navCtrl: NavController) {

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
}
