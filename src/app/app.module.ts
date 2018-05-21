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
import { AppointmentComponent } from './appointments/apponitment';
import { AppointmentBookingFormComponent } from './appointments/appointment-booking-form/appointment-booking-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'treatment', component: TreatmentComponent },
      { path: 'appointment', component: AppointmentComponent }
    ]),
    BrowserModule,
    TreatmentModule,
    AppointmentModule,
    ProfileModule,
    HomeModule,
    FacilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
