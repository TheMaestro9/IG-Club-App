import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the EditCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-course',
  templateUrl: 'edit-course.html',
})
export class EditCoursePage {

  courseData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataServiceProvider) {
    this.courseData = this.navParams.get('courseData');
    console.log(this.courseData);
  }

  updateCourse(courseData) {
    var url = '/courses/edit-course';
    this.ds.put(url, this.courseData).subscribe((res) => {
      console.log(res);
    }, (error) => { console.log(error) });
    this.navCtrl.pop();
  }   

}
