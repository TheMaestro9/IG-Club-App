import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCoursePage } from './edit-course';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(EditCoursePage),
    ComponentsModule
  ],
})
export class EditCoursePageModule {}
