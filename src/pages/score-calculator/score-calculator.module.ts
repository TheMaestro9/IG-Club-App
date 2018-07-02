import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreCalculatorPage } from './score-calculator';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ScoreCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreCalculatorPage),
    ComponentsModule
  ],
})
export class ScoreCalculatorPageModule {}
