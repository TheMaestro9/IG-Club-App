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
  constructor(public navCtrl: NavController) {

    this.toolBarColor = 'dark'
    this.toolBartextColor='light'
    this.posts=[ {
      "title":"First Post",
      "text":"Ig club is the best in the area", 
    }, 
    {
      "title":"Second Post",
      "text":"this is how posts with images will look like.", 
      "img" : "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg" 
    }
    
  ]
  }

}
