import { Component , Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPostsPage } from '../../pages/edit-posts/edit-posts';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the PostsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'posts',
  templateUrl: 'posts.html'
})
export class PostsComponent {

  @Input('posts') posts ; 
  @Input('showButton') showButton ; 
  @Input('adminBtn') adminBtn ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public ds: DataServiceProvider) {
    }
    
    ngOnInit(){
      this.posts.forEach(post => {
        if(typeof(post.img)  == 'undefined') 
          post['img'] == null      
      });  
    }

    openPage() {
      this.navCtrl.push(EditPostsPage);
    }

    editPost(id, title, content, url) {
      var post = {
        id: id,
        title: title,
        content: content,
        url: url
      }
      console.log(post);
      this.navCtrl.push(EditPostsPage, post);
    }

    deletePost(id) {
      var post = {
        id: id }
      console.log(id);
      this.storage.get('token').then(token=>{
        var url = 'http://ig-club.eu-gb.mybluemix.net/home/posts/'+post.id; 
        this.ds.delete(url, post.id).subscribe((res)=>{
          console.log(res);
        } , (error)=>{console.log(error)})
      })
      
    }

}
