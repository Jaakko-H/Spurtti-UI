import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/pages/home.component';
import { ViewRecordsComponent } from 'src/app/view-records/view-records.component';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-records',
    component: ViewRecordsComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
