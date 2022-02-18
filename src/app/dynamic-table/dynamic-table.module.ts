import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { DynamicTableService } from './dynamic-table.service';

const routes: Routes = [
  { path: '', component: DynamicTableComponent },
];

@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [DynamicTableService]
})
export class DynamicTableModule { }
