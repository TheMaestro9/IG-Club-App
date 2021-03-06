import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
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
  posts = []
  admin :boolean = true;
  editPageName ='AddActivitiesPage';
  deleteUrl = '/activities/';
  /* adminBtn
  manageBtn; */

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public sp:SearchProvider, public store: Storage, public Ds :DataServiceProvider) {

    this.pageTitle = navParams.get('title');
    /* this.adminBtn = navParams.get('adminBtn');
    this.manageBtn = navParams.get('manageBtn'); */
    this.checkAdmin();
  }

  ionViewWillEnter() {
    this.getActivities();

  }


  ionViewDidLeave(){
    this.sp.posts=[];
   }

   checkAdmin () {
     this.store.get("admin").then(admin => {
       this.admin = admin;
       console.log('the admin is', admin)
     })
   }

  getActivities() {
    this.posts=[]
    var url = '/activities?type='+ this.pageTitle
    this.Ds.get(url).subscribe(res=>{
      console.log(res)
      this.posts=res.activeties ;
    })
    // if (this.pageTitle == 'International Trips') {
    //   this.posts = [{
    //     "title": "Paris Visit",
    //     "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg",
    //     "content": "visiting paris for 5 days, the trip includes lots of activities such as " +
    //       " visiting the eviel tower. it will cost around 230$ per person all inclusive ",
    //     "interested": true
    //   },
    //   {
    //     "title": "Second Activity",
    //     "content": "the unicorn",
    //     "url": "https://vyrez.com/wp-content/uploads/2012/12/unicorn-wallpaper.jpg",
    //     "interested": false
    //   }
    //   ]
    // }
    // else if (this.pageTitle == 'Domestic Trips') {
    //   this.posts = [{
    //     "title": "Gamasa ",
    //     "url": "http://mw2.google.com/mw-panoramio/photos/medium/37541012.jpg",
    //     "content": "For Gamsa Lovers only",
    //     "interested": false

    //   }]

    // }
    // else
    //   this.posts = []
  }

  search (event) {
    this.posts= this.sp.search(event , this.posts);
   }

   addActivitiesPage () {
     this.navCtrl.push("AddActivitiesPage", {pageTitle:this.pageTitle , post:{}});
   }

   deleteAll (posts) {
    var url = this.deleteUrl;
    this.Ds.delete(url).subscribe((res) => {
      console.log(res);
      if (res.success)
        this.posts.splice(this.posts.indexOf(posts), 1)

    }, (error) => { console.log(error) })
   }

}
