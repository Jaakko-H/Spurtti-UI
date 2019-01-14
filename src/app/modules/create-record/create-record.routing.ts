import { Routes, RouterModule } from '@angular/router';
import { CreateRecordComponent } from './pages/create-record.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CreateRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecordRoutingModule { }
