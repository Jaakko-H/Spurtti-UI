import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'create-record',
    loadChildren: './modules/create-record/create-record.module#CreateRecordModule'
  },
  {
    path: 'view-records',
    loadChildren: './modules/view-records/view-records.module#ViewRecordsModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
