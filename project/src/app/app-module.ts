import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Registrationt } from './auth/registrationt/registrationt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Login } from './auth/login/login';
import { Userprofile } from './auth/userprofile/userprofile';
import { Logout } from './auth/logout/logout';
import { Admin } from './auth/admin/admin';
import { Addstudent } from './student/addstudent/addstudent';
import { Viewallstudent } from './student/viewallstudent/viewallstudent';
import { Editstudent } from './student/editstudent/editstudent';
import { Addlocation } from './location/addlocation/addlocation';
import { Viewalllocation } from './location/viewalllocation/viewalllocation';
import { Updatelocation } from './location/updatelocation/updatelocation';
import { Addpolicestation } from './police-station/addpolicestation/addpolicestation';

import { AddDistrict } from './district/add-district/add-district';
import { ViewAllDistricts } from './district/view-all-districts/view-all-districts';
import { AddDivisionComponent } from './division/add-division-component/add-division-component';
import { AddCountry } from './country/add-country/add-country';
import { AddEmployee } from './employee/add-employee/add-employee';
import { ViewEmployees } from './employee/view-employees/view-employees';
import { Viewemp } from './employee/viewemp/viewemp';


@NgModule({
  declarations: [
    App,    
    Registrationt, 
    Login, 
    Userprofile, 
    Logout, 
    Admin, 
    Addstudent, 
    Viewallstudent, 
    Editstudent, 
    Addlocation, 
    Viewalllocation, 
    Updatelocation, 
    Addpolicestation,
     AddDistrict,
     ViewAllDistricts,
     AddDivisionComponent,
     AddCountry,
     AddEmployee,
     ViewEmployees,
     Viewemp, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
     provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
