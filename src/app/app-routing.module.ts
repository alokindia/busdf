import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { AddpassComponent } from './addpass/addpass.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // { path: 'login', component: LoginComponent },

  // { path: '', redirectTo: 'addpass', pathMatch: 'full' },

  // { path: 'addpass', component:AddpassComponent},

  //  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  //  { path: 'dashboard', component:DashboardComponent},

   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

   {path: 'search', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
