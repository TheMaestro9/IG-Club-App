import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage'; 
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DataServiceProvider } from '../providers/data-service/data-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";
  showSubmenu = [false , false , false] ; 
  
  pages: Array<{title: string, component: any }>;


  constructor(public platform: Platform, public statusBar: StatusBar,
     public splashScreen: SplashScreen , public store:Storage , public DS :DataServiceProvider) {
       // we are making object form DataServiceProvider to initialize the token in it 
    this.initializeApp();
    this.routeUser() ; 
    splashScreen.show() 
  }

  routeUser(){
    this.store.get('token').then(token=>{
      console.log('welcome' , token)
      if(token=="" || token == null || typeof(token)=='undefined')
        this.rootPage='LoginPage';
    })
  }
  menuItemHandler(index): void {
    this.showSubmenu[index] = !this.showSubmenu[index];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page , forwardData?) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(forwardData)
      this.nav.setRoot(page ,forwardData);
    else 
      this.nav.setRoot(page)
  }
}
