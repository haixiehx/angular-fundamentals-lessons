import { GreetingsComponent } from './greetings.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // add a default path to greetings component
    path: '',
    component: GreetingsComponent,
  },
];
