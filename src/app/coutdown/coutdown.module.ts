import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoutdownComponent } from './coutdown/coutdown.component';
import { CountdownTimerViewComponent } from './countdown-timer-view/countdown-timer-view.component';
import { CountdownTimerControlComponent } from './countdown-timer-control/countdown-timer-control.component';
import { CountdownTimerLogComponent } from './countdown-timer-log/countdown-timer-log.component';
import { CountdownTimerStatusComponent } from './countdown-timer-status/countdown-timer-status.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../sharedContent/shared.module';
import { CountdownService } from './countdown.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    FormsModule,                            
    ReactiveFormsModule,   
    RouterModule.forChild(routes)
  ],
  providers:[CountdownService]
})
export class CoutdownModule { }
