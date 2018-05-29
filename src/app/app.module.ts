import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { PatientProfileComponent } from './profiles/patient-profile/patient-profile.component';
import { ProfileModule } from './profiles/profile.module';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';
import {CoreModule} from './core/core.module';
import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { PatientAppointmentQueueComponent } from './appointments/patient-appointment-queue/patient-appointment-queue';
// import {LoginComponent} from './core/login/login.component';
// import {SignupComponent} from './core/signup/signup.component';


//  import{appoinmentCardService} from '../shared/models/Services/appointmentcard-service'
import { CalenderComponent } from './profiles/patient-profile/calender/calender.component';
import { HomeComponent } from './home/home.component';
import { sharedModule } from './shared/shared.module';
import { appoinmentCardService } from './shared/models/Services/appointmentcard-service';
// import { TreatmentComponent } from './treatments/treatment/treatment.component';
// import { AppointmentBookingFormComponent } from './appointments/appointment-booking-form/appointment-booking-form.component';
// import { MyhomeComponent } from './home/myhome/myhome.component';
// import { DoctorSearchComponent } from './profiles/patient-profile/doctor-search/doctor-search.component';
// import { DoctorItemComponent } from './profiles/patient-profile/doctor-item/doctor-item.component';
@NgModule({
  declarations: [
    AppComponent 
    ],

  imports: [
    ProfileModule,
    BrowserModule,
    TreatmentModule,
    HomeModule,
    FacilityModule,
    CoreModule ,
    sharedModule 
    ,
    RouterModule.forRoot([
      {
        path:'', component:HomeComponent
      }
    ]),
    // RouterModule.forRoot([
    //   { path: 'patient-profile', component: PatientProfileComponent },
    //   { path: 'treatment', component: TreatmentComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'signup', component: SignupComponent },
    //   { path: 'home', component: MyhomeComponent }


    // ]),
    AppointmentModule
    
    

  ],
  providers: [appoinmentCardService],
  bootstrap: [AppComponent]
})





export class AppModule { }
