import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Checkbox, AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-universities',
  templateUrl: 'universities.html',
})
export class UniversitiesPage {

  admin = true;
  universities = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public store: Storage, public ds: DataServiceProvider,public alertController: AlertController) {
    this.checkAdmin() ;
  }

  ionViewDidEnter(){
    this.getUniversities();

  }

  checkAdmin(){
    this.store.get("admin").then(admin=>{
      this.admin = admin ;
      console.log('the admin is ',admin)
    })
  }

  getUniversities(){
    var url = '/universities/get-universities' ;
    this.ds.get(url).subscribe(res=>{
      this.universities=res.universities ;
    },err=>(console.log(err)))
}

  openPage(university) {
    console.log(university);
    this.navCtrl.push('UniversityProfilePage', {university});
  }

  openManagePage (){
    this.navCtrl.push('ManageUniversitiesPage', {university: {'id': ''}}) ;
  }

  editUniversity(university) {
    console.log(university);
    this.navCtrl.push('ManageUniversitiesPage',{university});
  }

  deleteUniversity(university) {
    var id = university.id ;
    console.log(id);
    this.universities.splice(this.universities.indexOf(university) , 1)
      var url = '/universities/delete-university/' +id;
      this.ds.delete(url).subscribe((res)=>{
        console.log(res);
      } , (error)=>{console.log(error)})

  }

  createComfirmationAlert(university) {
    let confirm = this.alertController.create({
      title: 'Confirm',
      message: "Are You Sure You Want to delete this university",
      buttons: [
        { text: 'Cancel', role: 'cancel', },
        {
          text: 'Delete' , handler: () => {
            this.deleteUniversity(university)
          }
        }
      ]
    });
    confirm.present();
  }

}
