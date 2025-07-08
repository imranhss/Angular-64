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
import { AdminGuardGuard } from './guards/adminguard';
import { UserGurd } from './guards/user-guard';
import { AuthGuard } from './guards/authguard';
import { Addpolicestation } from './police-station/addpolicestation/addpolicestation';
import { AddDistrict } from './district/add-district/add-district';
import { ViewAllDistricts } from './district/view-all-districts/view-all-districts';
import { AddDivisionComponent } from './division/add-division-component/add-division-component';
import { AddCountry } from './country/add-country/add-country';
import { AddEmployee } from './employee/add-employee/add-employee';
import { ViewEmployees } from './employee/view-employees/view-employees';
import { Viewemp } from './employee/viewemp/viewemp';



const routes: Routes = [
  { path: 'reg', component: Registrationt },
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'userprofile', component: Userprofile, canActivate: [UserGurd] },
  { path: 'logout', component: Logout },
  { path: 'adminprofile', component: Admin, canActivate: [AdminGuardGuard] },
  { path: 'allstu', component: Viewallstudent, canActivate: [AdminGuardGuard] },
  { path: 'allloc', component: Viewalllocation, canActivate: [AdminGuardGuard] },
  { path: 'addstu', component: Addstudent, canActivate: [AuthGuard] },
  { path: 'addloc', component: Addlocation, canActivate: [AdminGuardGuard] },
  { path: 'police', component: Addpolicestation },
  { path: 'adddis', component: AddDistrict },
  { path: 'viewalldis', component: ViewAllDistricts },
  { path: 'adddiv', component: AddDivisionComponent },
  { path: 'addcou', component: AddCountry },
  { path: 'addemp', component: AddEmployee },
  { path: 'allemp', component: ViewEmployees },
  { path: 'sinemp/:id', component: Viewemp },
  { path: 'edit-employee/:id', component: AddEmployee },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
