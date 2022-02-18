import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoutdownComponent } from './coutdown/coutdown.component';
import { CountdownTimerViewComponent } from './countdown-timer-view/countdown-timer-view.component';
import { CountdownTimerControlComponent } from './countdown-timer-control/countdown-timer-control.component';
import { CountdownTimerLogComponent } from './countdown-timer-log/countdown-timer-log.component';
import { CountdownTimerStatusComponent } from './countdown-timer-status/countdown-timer-status.component';
import { RouterModule, Routes } from '@angular/router';
import { NumberDirective } from '../sharedContent/numbers-only.directive';
import { SharedModule } from '../sharedContent/shared.module';

const routes: Routes = [
  { path: '', component: CoutdownComponent }
];

@NgModule({
  declarations: [
    CoutdownComponent,
    CountdownTimerViewComponent,
    CountdownTimerControlComponent,
    CountdownTimerLogComponent,
    CountdownTimerStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CoutdownModule { }
