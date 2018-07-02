import { Component, Input } from '@angular/core';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RequestsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'requests',
  templateUrl: 'requests.html'
})
export class RequestsComponent {

  text: string;
  @Input('requests') requests;
  @Input('moreDetails') moreDetails;
  @Input('deleteUrl') deleteUrl;

  constructor(public Ds: DataServiceProvider,public alertController: AlertController) {
    console.log('Hello RequestsComponent Component');
  }


   
  createComfirmationAlert(request) {
    let confirm = this.alertController.create({
      title: 'Confirm',
      message: "Are You Sure You Want to delete this Post",
      buttons: [
        { text: 'Cancel', role: 'cancel', },
        {
          text: 'Delete' , handler: () => {
            this.deleteRequest(request)
          } 
        }
      ]
    });
    confirm.present();
  }

  deleteRequest(request) {
    var url = this.deleteUrl + request.RelatedTableId + "/" + request.UserId
    this.Ds.delete(url).subscribe(res => {
      console.log(res)
      if (res.success)
        this.requests.splice(this.requests.indexOf(request), 1)
    })
  }

}
