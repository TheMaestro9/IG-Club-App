import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";
  showSubmenu = [false , false , false] ; 
  firstSubMenu = false ; 
  
  pages: Array<{title: string, component: any }>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();



    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'What is IGCSE', component: "HomePage" } ,
      { title: 'Chat With Us', component: "LoginPage" } ] 
    //   { title: 'Academic Programs', component: HomePage },
    //   { title: 'Activities', component: ListPage },
    //   { title: 'BookStore', component: HomePage },
    //   { title: 'StudentResorses', component: ListPage }
    // ];

  }
  menuItemHandler(index): void {
    console.log("ya naaas ", this.showSubmenu)
    this.showSubmenu[index] = !this.showSubmenu[index];
    this.firstSubMenu= !this.firstSubMenu; 
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
}
