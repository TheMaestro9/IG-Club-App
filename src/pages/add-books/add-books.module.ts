import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBooksPage } from './add-books';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AddBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBooksPage),
    ComponentsModule
  ],
})
export class AddBooksPageModule {}
