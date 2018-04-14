import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EslPage } from './esl';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [EslPage],
  imports: [IonicPageModule.forChild(EslPage) ,
  ComponentsModule],
})
export class EslPageModule { }