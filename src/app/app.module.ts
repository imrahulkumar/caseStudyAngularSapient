
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'animation-banner', loadChildren: () => import('./animation-banner/animation-banner.module').then(m => m.AnimationBannerModule)  },
  { path: 'e-commerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'count-down', loadChildren: () => import('./coutdown/coutdown.module').then(m => m.CoutdownModule) },
  // { path: 'timer', component: TimerComponent },
  // { path: 'dynamic-table', component: DynamicTableComponent },
  // { path: 'dynamic-alert', component: DynamicAlertComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
