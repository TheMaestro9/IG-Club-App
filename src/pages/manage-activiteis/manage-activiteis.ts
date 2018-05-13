import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicTapInput } from 'ionic-angular';
import { ActivitiesPage } from '../activities/activities';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ManageActiviteisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-activiteis',
  templateUrl: 'manage-activiteis.html',
})
export class ManageActiviteisPage {

  allUserInterests = []
  specificUserInterests = []
  deleteUrl = "/activities/remove-interest/"
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Ds: DataServiceProvider) {
    this.getRequests();
  }

  filter(value) {

    var url = "/activities/user-interests"
    this.Ds.get(url).subscribe(res => {
      if (res.success) {
        this.allUserInterests = res.userInterests
        this.specificUserInterests = res.userInterests


        this.specificUserInterests = []
        if (value == "All") {
          this.specificUserInterests = this.allUserInterests;
        } else {
          this.allUserInterests.forEach(interest => {
            if (interest.type == value)
              this.specificUserInterests.push(interest)
          });
        }
      }
      console.log(res)
    })
  }

  getRequests() {

    var url = "/activities/user-interests"
    this.Ds.get(url).subscribe(res => {
      if (res.success) {
        this.allUserInterests = res.userInterests
        this.specificUserInterests = res.userInterests
      }
      console.log(res)
    })
  }

}
