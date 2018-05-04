import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { DataServiceProvider } from '../providers/data-service/data-service';

import { AddPostPage } from '../pages/add-post/add-post';
import { EditPostsPage } from '../pages/edit-posts/edit-posts';
import { SearchProvider } from '../providers/search/search';

import { BooksCartPage } from '../pages/books-cart/books-cart';
//import { AddBooksPage } from '../pages/add-books/add-books';
import { AddActivitiesPage } from '../pages/add-activities/add-activities';
import { IonicImageLoader } from 'ionic-image-loader';
import { EditBooksPage } from '../pages/edit-books/edit-books';

@NgModule({
  declarations: [
    MyApp,
    BooksCartPage,
    AddActivitiesPage,
    EditBooksPage
   // ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    ComponentsModule,
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BooksCartPage,
    AddActivitiesPage,
    EditBooksPage
   // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    SearchProvider
  ]
})
export class AppModule {}
