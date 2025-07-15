import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Addstudent } from './student/addstudent/addstudent';

const routes: Routes = [
  {path: '' , component:Addstudent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
