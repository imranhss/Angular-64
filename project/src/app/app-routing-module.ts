import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registrationt } from './auth/registrationt/registrationt';
import { Login } from './auth/login/login';
import { Userprofile } from './auth/userprofile/userprofile';
import { Logout } from './auth/logout/logout';
import { Admin } from './auth/admin/admin';
import { Viewallstudent } from './student/viewallstudent/viewallstudent';
import { Viewalllocation } from './location/viewalllocation/viewalllocation';
import { Addstudent } from './student/addstudent/addstudent';
import { Addlocation } from './location/addlocation/addlocation';
import { AdminGuardGuard } from './guards/admin.guard-guard';
import { UserGurd } from './guards/user-guard';


const routes: Routes = [


{path: 'reg', component:Registrationt},
{path: '', component:Login},
{path: 'login', component:Login},
{path: 'userprofile', component:Userprofile},
{path: 'logout', component:Logout},
{path: 'adminprofile', component:Admin},
{path: 'allstu', component:Viewallstudent , canActivate:[AdminGuardGuard]},
{path: 'allloc', component:Viewalllocation},
{path: 'addstu', component:Addstudent, canActivate:[UserGurd, AdminGuardGuard]},
{path: 'addloc', component:Addlocation, canActivate:[AdminGuardGuard] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
