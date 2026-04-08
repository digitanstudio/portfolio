import {Routes} from '@angular/router';
import {Portfolio} from './portfolio';

export const routes: Routes = [
  { path: '', component: Portfolio },
  { path: '**', redirectTo: '' }
];
