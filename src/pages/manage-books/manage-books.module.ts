import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageBooksPage } from './manage-books';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManageBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageBooksPage),
    ComponentsModule
  ],
})
export class ManageBooksPageModule {}
