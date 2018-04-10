import { Component , Input } from '@angular/core';

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
  constructor() {
    }
    
    ngOnInit(){
      this.posts.forEach(post => {
        if(typeof(post.img)  == 'undefined') 
          post['img'] == null      
      });  
    }

}
