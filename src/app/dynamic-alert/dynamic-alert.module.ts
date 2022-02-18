import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicAlertComponent } from './dynamic-alert.component';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', component: DynamicAlertComponent }
];

@NgModule({
  declarations: [
    DynamicAlertComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    ToastrModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class DynamicAlertModule { }
