import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PatientProfileComponent } from './profiles/patient-profile/patient-profile.component';
import { ProfileModule } from './profiles/profile.module';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';
import {CoreModule} from './core/core.module';
import{LoginComponent} from './core/login/login.component';
import{SignupComponent} from './core/signup/signup.component';




import { TreatmentComponent } from './treatments/treatment/treatment.component';



<<<<<<< HEAD

=======
>>>>>>> 5b86d01665e592bec251caf62e895e878b82ac54
@NgModule({
  declarations: [
    AppComponent,
  
   
    
  ],
  imports: [
<<<<<<< HEAD
  BrowserModule,
  ProfileModule,
  RouterModule.forRoot([
    {path: 'patien-profile',
     component: PatientProfileComponent},
     { path: 'treatment', component: TreatmentComponent }

  ])
,
=======
    RouterModule.forRoot([
      { path: 'treatment', component: TreatmentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }


    ]),
    BrowserModule,
>>>>>>> 5b86d01665e592bec251caf62e895e878b82ac54
    TreatmentModule,
    AppointmentModule,
    HomeModule,
    FacilityModule,
    CoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
