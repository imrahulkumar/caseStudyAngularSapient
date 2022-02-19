import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { Routes, RouterModule } from '@angular/router';
import { CountdownTimerControlComponent } from './countdown-timer-control/countdown-timer-control.component';
import { CountdownTimerLogComponent } from './countdown-timer-log/countdown-timer-log.component';
import { CountdownTimerStatusComponent } from './countdown-timer-status/countdown-timer-status.component';
import { CountdownTimerViewComponent } from './countdown-timer-view/countdown-timer-view.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: TimerComponent }
];

@NgModule({
  declarations: [
    TimerComponent,
    CountdownTimerViewComponent,
    CountdownTimerControlComponent,
    CountdownTimerLogComponent,
    CountdownTimerStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TimerModule { }
