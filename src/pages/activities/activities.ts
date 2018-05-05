import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { AddActivitiesPage } from '../add-activities/add-activities';
import { Storage } from '@ionic/storage';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  pageTitle
  admin :boolean = true; 
  editPageName ='AddActivitiesPage';
  deleteUrl = '/home/posts/'; 
  posts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public sp:SearchProvider, public store: Storage, public ds:DataServiceProvider) {

    this.pageTitle = navParams.get('title');
    /* this.adminBtn = navParams.get('adminBtn');
    this.manageBtn = navParams.get('manageBtn'); */
    this.getActivities();
    this.checkAdmin();
  }

  ionViewDidLoad() {
  }

  
  ionViewDidLeave(){
    this.sp.posts=[];
   }

   checkAdmin () {
     this.store.get("admin").then(admin => {
       this.admin = true;
       console.log('the admin is', admin)
     })
   }
 
  getActivities() {
      var url = '/activities?type=' + this.pageTitle ;
      this.ds.get(url).subscribe(res=>{
        this.posts=res.activities ;
      },err=>(console.log(err)))   
  }

  search (event) {
    this.posts= this.sp.search(event , this.posts);
   }

   addActivitiesPage (pageTitle) {
     this.navCtrl.push("AddActivitiesPage", {pageTitle:pageTitle , post:{'id': ''}});
   }

   deleteAll (posts) {
    var post = this.posts.forEach(post => {
      console.log(post.id);
      var url = '/activities/'+post.id ;
      this.ds.delete(url).subscribe(res=>{
       console.log(res) 
     },err=>(console.log(err)));
   });
 this.posts=[] 
   }

}
