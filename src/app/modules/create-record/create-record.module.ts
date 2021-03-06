import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './pages/create-record.component';
import { CreateRecordRoutingModule } from './create-record.routing';
import { SharedModule } from '@app/shared';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateRecordComponent
  ],
  imports: [
    CommonModule,
    CreateRecordRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule
  ]
})
export class CreateRecordModule { }
