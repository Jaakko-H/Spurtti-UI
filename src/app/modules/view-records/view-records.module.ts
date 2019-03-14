import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRecordsComponent } from './pages/view-records.component';
import { SharedModule } from '@app/shared';
import { ViewRecordsRoutingModule } from './view-records.routing';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    ViewRecordsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    ViewRecordsRoutingModule
  ]
})
export class ViewRecordsModule { }
