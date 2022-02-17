import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationBannerComponent } from './animation-banner.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnimationBannerComponent },
];

@NgModule({
  declarations: [
    AnimationBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnimationBannerModule { }
