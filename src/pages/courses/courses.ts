import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, Checkbox } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage';


@IonicPage()

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursesPage {
  courseName;
  pageTitle;
  Selection;
  Increase;
  time;
  courseData;
  checked = [false, false, false, false, false]
  checkBoxes = ['Mohandeseen', 'Naser City', 'New Cairo', 'Zayed', 'Maadi']
  otherCheckBox;
  otherText;

  admin: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ds: DataServiceProvider, public store: Storage) {
    this.courseData = {
      currentRound: 'current Round',
      nextRoundTime: '2/5/2018',
      cost: '2000'
    }
    this.courseName = this.navParams.get('courseName');
    this.pageTitle = this.courseName;
    this.getCourseData();
    this.checkAdmin()
  }

  checkAdmin() {
    this.store.get("admin").then(admin => {
      this.admin = admin;
      console.log('the admin is', admin)
    })
  }

  getCourseData() {
    var url = "/courses/course-info?courseName=" + this.courseName.replace(" " , "%20");
    this.ds.get(url).subscribe(res => {
      if (res.success) {
        res = res.courseData
        res.nextRound = new Date(res.nextRound).toDateString()
        res.currentPeriod = new Date(res.currentPeriod).toDateString()
        this.courseData = res;
      }
      else {
        alert("server is not available")
      }
    })

  }

  addEslRequest() {
    var courseRequest = {
      'communicationTime': this.time,
      'courseArea': '',
      'courseDate': new Date(this.courseData.currentPeriod).toISOString(),
      'courseId':this.courseData.id
    };

    for (var i = 0; i < this.checked.length; i++) {
      if (this.checked[i])
        courseRequest.courseArea += this.checkBoxes[i] + ','
    }

    if (this.otherCheckBox)
      courseRequest.courseArea += this.otherText
    else
      courseRequest.courseArea = courseRequest.courseArea.slice(0, courseRequest.courseArea.length - 1)

    console.log(courseRequest)
    var url = "/courses/course-request"
    this.ds.post(url, courseRequest).subscribe(res => {
      console.log(res)
      if(res.success){
        this.navCtrl.setRoot('HomePage') ;
      }
    })
  }


  openEditCourse(courseData) {
    this.navCtrl.push('EditCoursePage', { courseData })
  }



}
