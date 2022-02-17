import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EcommerceComponent },
];

@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class EcommerceModule { }
