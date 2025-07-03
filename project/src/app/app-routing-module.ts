import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registrationt } from './auth/registrationt/registrationt';
import { Login } from './auth/login/login';
import { Userprofile } from './auth/userprofile/userprofile';
import { Logout } from './auth/logout/logout';
import { Admin } from './auth/admin/admin';

const routes: Routes = [

{path: 'reg', component:Registrationt},
{path: 'login', component:Login},
{path: 'userprofile', component:Userprofile},
{path: 'logout', component:Logout},
{path: 'adminprofile', component:Admin},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
