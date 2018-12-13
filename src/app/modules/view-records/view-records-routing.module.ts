import { Routes, RouterModule } from '@angular/router';
import { ViewRecordsComponent } from './pages/view-records.component';

const routes: Routes = [
  {
    path: '',
    component: ViewRecordsComponent
  }
];

export const ViewRecordsRoutes = RouterModule.forChild(routes);
