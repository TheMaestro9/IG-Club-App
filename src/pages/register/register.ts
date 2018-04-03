import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  children:any=[];
  
  constructor(public navCtrl: NavController) {
    this.children.push({ 'value': ''  , 'age':''});

  }

  indexToWord (index) {
    var Word = ["First" , "Sencond" , "Third" ,"Forth", "Fifth"]
    return Word[index] ;  
  }
  addInputs() {
    this.children.push({ 'value': ''  , 'age':''});
  }


}
