import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePostsPage } from './manage-posts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManagePostsPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(ManagePostsPage),
  ],
})
export class ManagePostsPageModule {}
