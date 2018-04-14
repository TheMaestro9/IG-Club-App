import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExploreBooksPage } from './explore-books';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExploreBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(ExploreBooksPage),
    ComponentsModule
  ],
})
export class ExploreBooksPageModule {}
