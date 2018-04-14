import { Component } from '@angular/core';
import { NavController, IonicPage,NavParams } from 'ionic-angular';


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
  boolArr = [false , false , false , false] 
  Names = ['zayed', 'new' , 'helo' , 'man']
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
    console.log(obj)

    console.log('len' , this.boolArr.length)
    for ( var i = 0  ; i < this.boolArr.length ; i++ ){
      if(this.boolArr[i])
        obj.area+=this.Names[i] + ','
      console.log('ohhh')
    }

    console.log(obj)
    if(this.otherCheckBox)
        obj.area+=this.otherText 
      else 
        obj.area = obj.area.slice(0, obj.area.length-1)

    console.log(obj)


    console.log('ya kber' , this.boolArr)
  }



}
