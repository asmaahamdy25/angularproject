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
import { AppRoutingModule } from './/app-routing.module';
import { PatientsModule } from './patient/patients.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DrugsModule } from './drugs/drugs.module';
import { PatientAppointmentQueueComponent } from './appointments/patient-appointment-queue/patient-appointment-queue';
// import {LoginComponent} from './core/login/login.component';
 import {SignupComponent} from './core/signup/signup.component';


//  import{appoinmentCardService} from '../shared/models/Services/appointmentcard-service'
import { HomeComponent } from './home/home.component';
import { sharedModule } from './shared/shared.module';
import { AppoinmentCardService } from './shared/models/Services/appointmentcard-service';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './Demo/component';
import { DemoModule } from './Demo/module';

@NgModule({
  declarations: [
    AppComponent
    ],

  imports: [
     BrowserModule,
    ProfileModule,
    FormsModule,
    TreatmentModule,
    HomeModule,
    FacilityModule,
    AppRoutingModule,
    PatientsModule,
    ReviewsModule,
    DrugsModule,
    AngularFontAwesomeModule,
    CoreModule ,
    sharedModule ,
<<<<<<< HEAD
=======
    NgbModule.forRoot(),
    CalendarModule.forRoot()
   
  ,
  DemoModule,
       
    
    RouterModule.forRoot([
      {
        path:'', component:HomeComponent}
      ,
      {
        path:'calender', component:DemoComponent
      }
    ]),
>>>>>>> 440b7016eba4624ae25d0a9fbd2603c8e6ba2c56
    AppointmentModule
  ],
  providers: [AppoinmentCardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
