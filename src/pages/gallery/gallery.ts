import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Checkbox} from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  
  path="assets/imgs/";
  array1d:string[];
  grid: any; 
  array2d=[]; 
  count=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.array1d=['assets/imgs/11.jpg','assets/imgs/33.jpg','assets/imgs/22.jpg', 'assets/imgs/33.jpg','assets/imgs/44.jpg','assets/imgs/11.jpg'];

    for(let i=0;i<this.array1d.length;i+=2){
      this.array2d[i] = [];

      for(let j=0;j<2;j++){
        if (this.count<this.array1d.length)
       { this.array2d[i][j] = this.array1d[this.count]; 
        this.count++;
        
      }
    }
  }

//   for(let i=0;i<this.array2d.length;i++){
//     for(let j=0;j<2;j++){
//       //console.log(this.array2d[i][j])

//   }
// }
    // this.grid= [[this.path+'11.jpg', this.path+'22.jpg'], [this.path+'33.jpg',this.path+'44.jpg']];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
