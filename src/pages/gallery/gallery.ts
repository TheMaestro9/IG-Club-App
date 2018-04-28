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
   
    this.array1d=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUgBLPUoHSJik_qvMMyLbNRciAADDwk_3pvyWp7P9lGEE6bqB',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzXRmyDHyjAahOjkWdmOybQjJntmUYpjPEW9goRDtEgL7XRmi',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPoMaUL5jNxaoB6IbFa3jVOf2P9vVsK8tfm9hesFlcDTi09-mh', 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCNEo13b_7O18ptCKvjX7iOLUdmJq7xnzQ6VGOFgeHpUMqxW_',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_ruvvmPT-TikARpkAnIM4Ra2FQOBGlaKCYfGfEMV0luSEjnlZA',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEE2YF9UYX83oN8YRE_eANlSDF_lvMUFyt16HtcLYSvX4r_kQaQ'];

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
