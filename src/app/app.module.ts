import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientProfileComponent } from './profiles/patient-profile/patient-profile.component';
import { ProfileModule } from './profiles/profile.module';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';
import {CoreModule} from './core/core.module';
import {LoginComponent} from './core/login/login.component';
import {SignupComponent} from './core/signup/signup.component';




import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { AppointmentComponent } from './appointments/apponitment';
import { AppointmentBookingFormComponent } from './appointments/appointment-booking-form/appointment-booking-form.component';
import { MyhomeComponent } from './home/myhome/myhome.component';
import { DoctorSearchComponent } from './profiles/patient-profile/doctor-search/doctor-search.component';
import { DoctorItemComponent } from './profiles/patient-profile/doctor-item/doctor-item.component';
import { PackagesComponent } from './facilities/packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorSearchComponent,
    DoctorItemComponent,
    AppointmentComponent



  ],

  imports: [

    ProfileModule,
    BrowserModule,
    TreatmentModule,
    AppointmentModule,
    HomeModule,
    FacilityModule,
    CoreModule

    ,
    RouterModule.forRoot([
      { path: 'patien-profile', component: PatientProfileComponent },
      { path: 'treatment', component: TreatmentComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: MyhomeComponent },
      { path: 'packages', component: PackagesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
