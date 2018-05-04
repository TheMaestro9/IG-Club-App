import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPostsPage } from './edit-posts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPostsPage),
    ComponentsModule
  ],
})
export class EditPostsPageModule {}
