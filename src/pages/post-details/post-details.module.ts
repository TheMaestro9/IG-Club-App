import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDetailsPage } from './post-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDetailsPage),
    ComponentsModule
  ],
})
export class PostDetailsPageModule {}
