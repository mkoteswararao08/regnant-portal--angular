import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavBarComponent} from './navbar/navbar.component';
import{ HRNavBarComponent } from './hr-navbar/hr-navbar.component'
import {HomeBodyComponent } from './home-body/home-body.component';
import{ HRLoginComponent} from './hr-login/hr-login.component';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import {HRHomeBodyComponent} from './hr-home-body/hr-home-body.component';

const routes: Routes = [
  {path :'hrnavbar',component:HRNavBarComponent,outlet:"nav"},
  {path:'',component:NavBarComponent, outlet: "nav" },
  {path:'hrlogin',component:HRLoginComponent},
  {path:'employeelogin', component:EmployeeLoginComponent },
  {path:'home',component:HomeBodyComponent},
  {path:'hr-home', component:HRHomeBodyComponent},
  {path:'',  redirectTo:'/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
