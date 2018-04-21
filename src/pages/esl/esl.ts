import { Component } from '@angular/core';
import { NavController, IonicPage,NavParams, Checkbox } from 'ionic-angular';


@IonicPage() 

@Component({
  selector: 'page-esl',
  templateUrl: 'esl.html'
})
export class EslPage{
  Selection; 
  Increase;
  time ;
  currentRound='current Round';
  nextRoundTime='2/5/2018';
  cost = '2000';
  zayed;
  newcairo;
  checked = [false , false , false , false , false] 
  checkBoxes = ['Mohandeseen', 'Naser City' , 'New Cairo' ,'Zayed' ,'Maadi']
  otherCheckBox ; 
  otherText ; 
  constructor(public navCtrl: NavController,public navParams: NavParams)
   {
  
  }

  makeObj ( ){ 
    var obj = {
      'time':this.time,
      'area':''

    };

    console.log('len' , this.checked.length)
    for ( var i = 0  ; i < this.checked.length ; i++ ){
      if(this.checked[i])
        obj.area+=this.checkBoxes[i] + ','
    }

    if(this.otherCheckBox)
        obj.area+=this.otherText 
      else 
        obj.area = obj.area.slice(0, obj.area.length-1)

    console.log(obj)
  }



}
