import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ManageUniversitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-universities',
  templateUrl: 'manage-universities.html',
})
export class ManageUniversitiesPage {

  university;
  btnTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataServiceProvider) {
    this.university = this.navParams.get('university');

    if (this.university.id == '') {
      this.btnTitle = "Add";
      console.log('I know its empty');        
    } else {
      this.btnTitle = "Update";
      console.log(this.university);
      }

      /* this.university.forEach(university => {
        console.log(university.imgUrl)
        if(university.imgUrl == null)
        university.imgUrl = 'assets/imgs/default-book.jpg'; 
      }); */
  }
  submit () {
    if (this.university.id == '') {
      console.log(this.university);
      var url = '/universities/add-university/'; 
      this.ds.post(url, this.university).subscribe((res)=>{
        console.log(res);
        if(res) {
          this.navCtrl.pop(); 
        }
      } , (error)=>{console.log(error)});
    } else {
    url = '/universities/edit-university';
    this.ds.put(url, this.university).subscribe((res) => {
      console.log(res);
    }, (error) => { console.log(error) });
    this.navCtrl.pop();
      }
  }

}
