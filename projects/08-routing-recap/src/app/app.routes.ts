import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details/:id', // path cannot start with "/"
    component: DetailsComponent,
  },
];
