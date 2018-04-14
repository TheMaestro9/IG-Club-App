import { Component , Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPostsPage } from '../../pages/edit-posts/edit-posts';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      console.log(id,title, content, url);
      this.navCtrl.push(EditPostsPage, {
        id: id,
        title: title,
        content: content,
        url: url
      });
    }

    deletePost(id) {
      console.log(id);
      this.posts.remove(id);
    }

}
