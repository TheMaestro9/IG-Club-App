import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataServiceProvider } from '../../providers/data-service/data-service';

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
  
  constructor(public navCtrl: NavController ,public ds:DataServiceProvider) {
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
    var url = 'http://ig-club.eu-gb.mybluemix.net/signup' ; 
    this.ds.post(url, user_info).subscribe((res)=>{
      console.log(res);
    } , (error)=>{console.log(error)})

    
  }


}
