import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageActiviteisPage } from './manage-activiteis';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManageActiviteisPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageActiviteisPage),
    ComponentsModule
  ],
})
export class ManageActiviteisPageModule {}
