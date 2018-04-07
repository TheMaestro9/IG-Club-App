import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { PostsComponent } from './posts/posts';
@NgModule({
	declarations: [HeaderComponent,
    PostsComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    PostsComponent]
})
export class ComponentsModule {}
