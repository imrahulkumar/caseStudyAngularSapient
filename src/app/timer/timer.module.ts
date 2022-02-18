import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TimerComponent }
];

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TimerModule { }
