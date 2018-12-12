import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';
import { ViewRecordsComponent } from './view-records/view-records.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-records', component: ViewRecordsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
