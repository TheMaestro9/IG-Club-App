import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageCoursesPage } from './manage-courses';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManageCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageCoursesPage),
    ComponentsModule
  ],
})
export class ManageCoursesPageModule {}
