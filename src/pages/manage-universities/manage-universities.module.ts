import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageUniversitiesPage } from './manage-universities';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManageUniversitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageUniversitiesPage),
    ComponentsModule
  ],
})
export class ManageUniversitiesPageModule {}
