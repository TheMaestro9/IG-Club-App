import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage'
/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  token: string;
  constructor(public http: Http, public storage: Storage) {

    this.storage.get('token').then(token => {
      if (typeof (token) == 'undefined')
        token = ''
      this.token = token;
    })

  }


  get(url) {
    url += "?token=" + this.token ; 
    return this.http.get(url)
      .map(res => res.json());
  }


post(url, data){
  data['token'] = this.token ; 
  return this.http.post(url, data)
    .map(res => res.json());
}

}
