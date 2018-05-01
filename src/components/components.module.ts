import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { PostsComponent } from './posts/posts';
import { BooksComponent } from './books/books';
@NgModule({
	declarations: [HeaderComponent,
    PostsComponent,
    BooksComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PostsComponent,
    BooksComponent]
})
export class ComponentsModule {}
