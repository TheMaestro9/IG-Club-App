import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksCartPage } from './books-cart';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BooksCartPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksCartPage),
    ComponentsModule
  ],
})
export class BooksCartPageModule {}
