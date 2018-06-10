import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
import { DrugsModule } from './drugs/drugs.module';
import { PatientAppointmentQueueComponent } from './appointments/patient-appointment-queue/patient-appointment-queue';
import {SignupComponent} from './core/signup/signup.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { appoinmentCardService } from './shared/models/Services/appointmentcard-service';
// import { TreatmentComponent } from './treatments/treatment/treatment.component';
// import { AppointmentBookingFormComponent } from './appointments/appointment-booking-form/appointment-booking-form.component';
// import { MyhomeComponent } from './home/myhome/myhome.component';
// import { DoctorSearchComponent } from './profiles/patient-profile/doctor-search/doctor-search.component';
// import { DoctorItemComponent } from './profiles/patient-profile/doctor-item/doctor-item.component';
=======
import { sharedModule } from './shared/shared.module';
import { AppoinmentCardService } from './shared/models/Services/appointmentcard-service';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './DEMO/module';

>>>>>>> 179632b7d01c2cd5d19f782ea1ca6eb5a18945a6
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
    CoreModule ,
<<<<<<< HEAD
    SharedModule ,
=======
    sharedModule,
    AppointmentModule,
    DemoModule,
>>>>>>> 179632b7d01c2cd5d19f782ea1ca6eb5a18945a6
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      }
    ]),
    // RouterModule.forRoot([
    //   { path: 'patient-profile', component: PatientProfileComponent },
    //   { path: 'treatment', component: TreatmentComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'signup', component: SignupComponent },
    //   { path: 'home', component: MyhomeComponent }


    // ]),
<<<<<<< HEAD
    AppointmentModule

=======
>>>>>>> 179632b7d01c2cd5d19f782ea1ca6eb5a18945a6
  ],
  providers: [AppoinmentCardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
