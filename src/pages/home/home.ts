import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts = [];
  toolBarColor;
  toolBartextColor;

  constructor(public navCtrl: NavController , public storage: Storage,
              public ds :DataServiceProvider, public sp: SearchProvider) {

    this.toolBarColor = 'dark';
    this.toolBartextColor='light';
    this.getPosts();
  }

  ionViewDidLeave(){
    this.sp.posts=[];
   }
  
  getPosts(){ 
      var url = 'http://ig-club.eu-gb.mybluemix.net/home/posts' ;
      console.log(url);  
      this.ds.get(url).subscribe(res=>{
        console.log(res)
        this.posts=res.posts ;
      },err=>(console.log(err)))
  }

  search (event) {
   this.posts= this.sp.search(event , this.posts);
  }
  
}
