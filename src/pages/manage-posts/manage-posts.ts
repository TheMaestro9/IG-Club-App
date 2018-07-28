import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { SearchProvider } from '../../providers/search/search';

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
  posts=[];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,
    public ds :DataServiceProvider , public sp:SearchProvider) {
    this.toolBarColor = 'dark';
    this.toolBartextColor='light';
    this.initializeItems();
  }

  ionViewDidEnter () {
    this.getPosts();
    // this.posts=[
    //   {
    //     title:"hello",
    //     content:"man where are you"
    //   }
    // ]
  }

  ionViewDidLeave(){
   this.sp.posts=[];
  }

  initializeItems () {
  }

  search(ev: any) {
    this.posts=this.sp.search(ev , this.posts)
  }

  getPosts(){
    var url = '/home/posts' ;
      console.log(url);
      this.ds.get(url).subscribe(res=>{
        console.log(res)
        this.posts=res.posts ;
      },err=>(console.log(err)))
  }



}
