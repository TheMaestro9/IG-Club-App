import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetablePage } from './timetable';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(TimetablePage),
    ComponentsModule
  ],
})
export class TimetablePageModule {}
