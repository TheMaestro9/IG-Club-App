import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPostsPage } from './edit-posts';

@NgModule({
  declarations: [
    EditPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPostsPage),
  ],
})
export class EditPostsPageModule {}
