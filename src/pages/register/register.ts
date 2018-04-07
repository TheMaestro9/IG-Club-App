import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  emael
  children:any=[];
  
  constructor(public navCtrl: NavController) {
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
    var user_info = { 
      'username':this.userName  
    }

    console.log(user_info)
  }


}
