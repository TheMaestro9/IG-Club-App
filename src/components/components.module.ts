import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { PostsComponent } from './posts/posts';
import { BooksComponent } from './books/books';
import { IonicImageLoader } from 'ionic-image-loader';
import { RequestsComponent } from './requests/requests';
@NgModule({
	declarations: [
        HeaderComponent,
        PostsComponent,
        BooksComponent,
    RequestsComponent
    ],
	imports: [
        IonicModule,
        IonicImageLoader
    ],
	exports: [
        HeaderComponent,
        PostsComponent,
        BooksComponent,
    RequestsComponent
    ]
})
export class ComponentsModule {}
