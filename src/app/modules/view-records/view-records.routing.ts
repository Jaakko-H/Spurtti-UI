import { Routes, RouterModule } from '@angular/router';
import { ViewRecordsComponent } from './pages/view-records.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ViewRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRecordsRoutingModule { }
