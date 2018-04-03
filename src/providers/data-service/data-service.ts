import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: Http) {
  }


  get(url) {
    return this.http.get(url)
      .map(res => res.json());
  }


}
