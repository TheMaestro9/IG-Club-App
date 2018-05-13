import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Storage } from '@ionic/storage'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  Selection; 
  Increase;
  userName ; 
  password ; 
  email; 
  mobile;
  school ; 
  grade =null;  
  children:any=[];
  
  constructor(public navCtrl: NavController ,public ds:DataServiceProvider ,
              public storage: Storage , public menuCtrl :MenuController ) {
    this.children.push({ 'name': ''  , 'age':''});

  }

  indexToWord (index) {
    var Word = ["First" , "Sencond" , "Third" ,"Forth", "Fifth"]
    return Word[index] ;  
  }
  addInputs() {
    this.children.push({ 'name': ''  , 'age':''});
  }

  register() { 

    if(this.children!=null &&this.children[0].name=='')
      this.children=null ;
    
    var user_info = { 
      'username':this.userName, 
      'email':this.email,
      'password':this.password,
      'mobile':this.mobile, 
      'grade':this.grade, 
      'school':this.school, 
      'children':this.children
    }

    console.log(user_info);
    var url = '/signup' ; 
    this.ds.post(url, user_info).subscribe((res)=>{
      console.log(res);
      this.navCtrl.push('LoginPage' , {cameFromRegPage:true})
      if(res.success){ 
        this.navCtrl.push('LoginPage' , {cameFromRegPage:true})
      }
    } , (error)=>{console.log(error)})

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false); 
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
    }
}
