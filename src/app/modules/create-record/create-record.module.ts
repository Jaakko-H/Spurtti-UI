import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './pages/create-record.component';
import { CreateRecordRoutingModule } from './create-record.routing';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    CreateRecordComponent
  ],
  imports: [
    CommonModule,
    CreateRecordRoutingModule,
    SharedModule
  ]
})
export class CreateRecordModule { }
