import { Component } from '@angular/core';
import { NavController, IonicPage,NavParams, Checkbox } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';


@IonicPage() 

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursesPage{
  courseName ; 
  pageTitle ; 
  Selection; 
  Increase;
  time ;
  courseData; 
  checked = [false , false , false , false , false] 
  checkBoxes = ['Mohandeseen', 'Naser City' , 'New Cairo' ,'Zayed' ,'Maadi']
  otherCheckBox ; 
  otherText ; 
  constructor(public navCtrl: NavController,public navParams: NavParams,
              public ds:DataServiceProvider)
   {
     this.courseData={ 
      currentRound:'current Round',
      nextRoundTime:'2/5/2018',
      cost : '2000'
      }
      this.courseName= this.navParams.get('courseName') ;
      this.pageTitle = this.courseName + " Course"
      this.getCourseData()
  }

  getCourseData() { 
    var url = "/courses/course-info?courseName="+this.courseName; 
    this.ds.get(url).subscribe(res=>{
      if(res.success){
        res = res.courseData
        res.nextRound=new Date(res.nextRound).toDateString()
        res.currentPeriod=new Date(res.currentPeriod).toDateString()
        this.courseData= res ; 
      }
      else {
        alert("server is not available")
      }
    })

  }

  addEslRequest ( ){ 
    var courseRequest = {
      'communicationTime':this.time,
      'courseArea':'', 
      'courseDate': new Date(this.courseData.currentPeriod).toISOString()
    };

    console.log('len' , this.checked.length)
    for ( var i = 0  ; i < this.checked.length ; i++ ){
      if(this.checked[i])
      courseRequest.courseArea+=this.checkBoxes[i] + ','
    }

    if(this.otherCheckBox)
    courseRequest.courseArea+=this.otherText 
      else 
      courseRequest.courseArea = courseRequest.courseArea.slice(0, courseRequest.courseArea.length-1)

      console.log(courseRequest)
      var url = "/courses/esl-request"
      this.ds.post(url , courseRequest).subscribe(res=>{
        console.log(res)
      })
    }



}
