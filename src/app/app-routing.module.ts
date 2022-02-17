import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationBannerComponent } from './animation-banner/animation-banner.component';
import { DynamicAlertComponent } from './dynamic-alert/dynamic-alert.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'animation-banner', component: AnimationBannerComponent },
  { path: 'e-commerce', component: EcommerceComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'dynamic-table', component: DynamicTableComponent },
  { path: 'dynamic-alert', component: DynamicAlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
