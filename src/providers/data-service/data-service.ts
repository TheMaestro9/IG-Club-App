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
  host="http://ig-club.eu-gb.mybluemix.net";
  //host="http://localhost:6001" ; 
  constructor(public http: Http, public storage: Storage) {

    console.log('constructor DS')
    this.getToken() ; 
  }

   getToken(){
    return this.storage.get('token').then(token => {
      console.log('token in DS', token)
      if (typeof (token) == 'undefined')
        token = '';
      console.log('will change the token now')
      this.token = token;
    })
  }

   get(url) {
    
    url = this.host + url ; 
    url += "?token=" + this.token ; 
    console.log('sending get Request with url' , url )

    return this.http.get(url)
      .map(res => res.json());
  }


post(url, data){
  url = this.host + url ; 
  data['token'] = this.token ; 
  return this.http.post(url, data)
    .map(res => res.json());
}

  put(url, data) {
    url = this.host + url ; 
    data['token'] = this.token ; 
    return this.http.put(url, data)
      .map(res=>res.json());
  }

  delete(url, id) {
    url = this.host + url ; 
    return this.http.delete(url, id)
    .map(res=>res.json());
  }
  
  deletePosts(url, data) {
    url = this.host + url ; 
    data['token'] = this.token ; 
    return this.http.delete(url, data)
    .map(res=>res.json());
  }

}
