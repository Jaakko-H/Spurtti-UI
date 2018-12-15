import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRecordsComponent } from './pages/view-records.component';
import { SharedModule } from '@app/shared';
import { ViewRecordsRoutingModule } from './view-records.routing';

@NgModule({
  declarations: [
    ViewRecordsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewRecordsRoutingModule
  ]
})
export class ViewRecordsModule { }
