
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  { path: 'animation-banner', loadChildren: () => import('./animation-banner/animation-banner.module').then(m => m.AnimationBannerModule)  },
  { path: 'e-commerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'count-down', loadChildren: () => import('./coutdown/coutdown.module').then(m => m.CoutdownModule) },
  { path: 'count-down-timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },
  { path: 'dynamic-table',  loadChildren: () => import('./dynamic-table/dynamic-table.module').then(m => m.DynamicTableModule) },
  { path: 'dynamic-alert', loadChildren: () => import('./dynamic-alert/dynamic-alert.module').then(m => m.DynamicAlertModule) }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
