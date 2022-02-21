import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { Routes, RouterModule } from '@angular/router';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { TimerStatusComponent } from './timer-status/timer-status.component';
import { TimerViewComponent } from './timer-view/timer-view.component';
import { FormsModule } from '@angular/forms';
import { TimerService } from './timer.service';
import { CountdownService } from './countdown.service';


const routes: Routes = [
  { path: '', component: TimerComponent }
];

@NgModule({
  declarations: [
    TimerComponent,
    TimerViewComponent,
    TimerControlComponent,
    TimerLogComponent,
    TimerStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[TimerService, CountdownService]
})
export class TimerModule { }
