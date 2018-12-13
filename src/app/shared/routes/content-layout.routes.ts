import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'view-records',
    loadChildren: './modules/view-records/view-records.module#ViewRecordsModule'
  }
];
