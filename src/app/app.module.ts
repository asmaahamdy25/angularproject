import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { ProfileModule } from './profiles/profile.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';

import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatientsModule } from './patient/patients.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    TreatmentModule,
    AppointmentModule,
    ProfileModule,
    HomeModule,
    FacilityModule,
    AppRoutingModule,
    PatientsModule,
    ReviewsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
