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
  admin :boolean = false; 
  editPageName ='EditPostsPage';
  deleteUrl = '/home/posts/'; 
  constructor(public navCtrl: NavController , public store: Storage,
              public ds :DataServiceProvider, public sp: SearchProvider) {

    this.toolBarColor = 'dark';
    this.toolBartextColor='light';
    this.checkAdmin() ; 
  }

  ionViewDidEnter(){
    this.getPosts();

  }

  checkAdmin(){ 
    this.store.get("admin").then(admin=>{
      this.admin = admin ; 
      console.log('the admin is ',admin)
    })
  } 
  ionViewDidLeave(){
    this.sp.posts=[];
   }
  
  getPosts(){ 
      var url = '/home/posts' ;
      this.ds.get(url).subscribe(res=>{
        this.posts=res.posts ;
      },err=>(console.log(err)))
  }

  deleteAllPosts () {
    var post = this.posts.forEach(post => {
         console.log(post.id);
         var url = '/home/posts/'+post.id ;
         this.ds.delete(url).subscribe(res=>{
          console.log(res) 
        },err=>(console.log(err)));
      });
    this.posts=[] 
  }

  openAddPage (){
    this.navCtrl.push('AddPostPage') ; 
  }
  search (event) {
   this.posts= this.sp.search(event , this.posts);
  }
  
}
