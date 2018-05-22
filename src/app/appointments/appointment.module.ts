import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsQueueComponent } from './appointments-queue/appointments-queue.component';
import { AppointmentBookingFormComponent } from './appointment-booking-form/appointment-booking-form.component';
import { AppointmentCardComponent } from './appointments-queue/appointment-card/appointment-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppointmentsQueueComponent,
    AppointmentBookingFormComponent,
    AppointmentCardComponent
],
  exports: [
    AppointmentsQueueComponent,
    AppointmentBookingFormComponent
  ],
})
export class AppointmentModule { }
