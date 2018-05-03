import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBooksPage } from './edit-books';

@NgModule({
  declarations: [
    EditBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBooksPage),
  ],
})
export class EditBooksPageModule {}
