import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { Updatestudent } from './updatestudent/updatestudent';
import { ViewAllLocation } from './location/view-all-location/view-all-location';
import { Addlocation } from './location/addlocation/addlocation';
import { UpdateLocation } from './location/update-location/update-location';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';


const routes: Routes = [
   {path: '', component:Home},

   {path: 'allstu', component:ViewAllStudent},
   
   {path: 'addStu', component:Addstudent},
   {path: 'updatestudent/:id', component:Updatestudent},
   {path: 'updatelocation/:id', component:UpdateLocation},
   {path: 'allloc', component:ViewAllLocation},
   {path: 'addloc', component:Addlocation},
   {path: 'reg', component:Registration},
   {path: 'userprofile', component:Userprofile},
   {path: 'login', component:Login},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
