import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddActivitiesPage } from './add-activities';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AddActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddActivitiesPage),
    ComponentsModule
  ],
})
export class AddActivitiesPageModule {}
