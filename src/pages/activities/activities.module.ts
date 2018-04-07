import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesPage } from './activities';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesPage),
    ComponentsModule
  ],
})
export class ActivitiesPageModule {}
