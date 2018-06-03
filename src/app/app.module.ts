import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileModule } from './profiles/profile.module';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';
<<<<<<< HEAD
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent} from './header-footer/footer/footer.component';




import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { AppointmentComponent } from './appointments/apponitment';
import { AppointmentBookingFormComponent } from './appointments/appointment-booking-form/appointment-booking-form.component';
import { MyhomeComponent } from './home/myhome/myhome.component';
import { HeaderandFooterModule } from './header-footer/headerand-footer.module';

=======
import {CoreModule} from './core/core.module';
import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatientsModule } from './patient/patients.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DrugsModule } from './drugs/drugs.module';
import { PatientAppointmentQueueComponent } from './appointments/patient-appointment-queue/patient-appointment-queue';
import {SignupComponent} from './core/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { sharedModule } from './shared/shared.module';
import { AppoinmentCardService } from './shared/models/Services/appointmentcard-service';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './DEMO/module';
>>>>>>> f5bd22fedcd2c9bb3e2ac12dd3cfc7e03a988d22

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
<<<<<<< HEAD
    CoreModule,
    HeaderandFooterModule

    ,
    RouterModule.forRoot([
      { path: 'patien-profile', component: PatientProfileComponent },
      { path: 'treatment', component: TreatmentComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: MyhomeComponent },
      
      


    ]),


=======
    AppRoutingModule,
    PatientsModule,
    ReviewsModule,
    DrugsModule,
    CoreModule ,
    sharedModule ,
    AppointmentModule,
    DemoModule
>>>>>>> f5bd22fedcd2c9bb3e2ac12dd3cfc7e03a988d22
  ],
  providers: [AppoinmentCardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
