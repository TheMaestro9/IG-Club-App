import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditPostsPage } from '../../pages/edit-posts/edit-posts';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage';
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

  likeIconColor;
  @Input('deleteUrl') deleteUrl;
  @Input('editPageName') editPageName;
  @Input('posts') posts;
  @Input('showButton') showButton;
  @Input('adminBtn') adminBtn;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public ds: DataServiceProvider,public alertController: AlertController) {
    this.likeIconColor = "danger";
  }

  ngOnInit() {
    this.posts.forEach(post => {
      if (typeof (post.img) == 'undefined')
        post['img'] == null
    });
  }
  showInterest(post) {
    post.interested = !post.interested
    if (post.interested) {
      var url = '/activities/' + post.id + '/interest';
      this.ds.post(url, post).subscribe(res => {
        console.log(res);
      });
    }
    else {
      var url = '/remove-interest/activities/' + post.id ;
      this.ds.delete(url).subscribe(res => {
        console.log(res);
      });
    }
  }

  
  createComfirmationAlert(post) {
    let confirm = this.alertController.create({
      title: 'Confirm',
      message: "Are You Sure You Want to delete this Post",
      buttons: [
        { text: 'Cancel', role: 'cancel', },
        {
          text: 'Delete' , handler: () => {
            this.deletePost(post)
          } 
        }
      ]
    });
    confirm.present();
  }

  editPost(post) {
    console.log(post);
    this.navCtrl.push(this.editPageName, { post: post });
  }

  deletePost(post) {
    var id = post.id;
    var url = this.deleteUrl + id;
    this.ds.delete(url).subscribe((res) => {
      console.log(res);
      if (res.success)
        this.posts.splice(this.posts.indexOf(post), 1)

    }, (error) => { console.log(error) })

  }

}
