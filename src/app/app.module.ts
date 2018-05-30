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
import { HomeComponent } from './home/home.component';
import { sharedModule } from './shared/shared.module';
import { appoinmentCardService } from './shared/models/Services/appointmentcard-service';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import{DemoUtilsModule}from '../app/profiles/demo-utils/module/module.module'
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './Demo/component';
import { DemoModule } from './Demo/module';
import { FormsModule } from '@angular/forms';
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
    CoreModule ,
    sharedModule ,
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
    AppointmentModule
    
    

  ],
  providers: [appoinmentCardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
