import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './users/authguard.service';
import { AnonymousGuard } from './users/anonymousguard.service';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
