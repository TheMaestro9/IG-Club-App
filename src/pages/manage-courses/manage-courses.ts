import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ManageCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-courses',
  templateUrl: 'manage-courses.html',
})
export class ManageCoursesPage {

  allUserRequests = []
  specificUserRequests = []
  deleteUrl = "/courses/remove-request/"


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Ds: DataServiceProvider) {
    this.getRequests();
  }

  filter(value) {

    var url = "/courses/user-requests"
    this.Ds.get(url).subscribe(res => {
      if (res.success) {

        this.allUserRequests = res.userRequests
        this.specificUserRequests = []
        if (value == "All") {
          this.specificUserRequests = this.allUserRequests;
        } else {
          this.allUserRequests.forEach(interest => {
            if (interest.title == value)
              this.specificUserRequests.push(interest)
          });
        }
       
      }
      console.log(res)
    })

  }

  getRequests() {

    var url = "/courses/user-requests"
    this.Ds.get(url).subscribe(res => {
      if (res.success) {
        this.allUserRequests = res.userRequests
        this.specificUserRequests = res.userRequests
      }
      console.log(res)
    })
  }


}
