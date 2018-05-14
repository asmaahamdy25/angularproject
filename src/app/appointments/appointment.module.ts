import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmetsQueueComponent } from './appointmets-queue/appointmets-queue.component';
import { ComponentCardComponent } from './appointmets-queue/component-card/component-card.component';
import { AppointmentBookingFormComponent } from './appointment-booking-form/appointment-booking-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppointmetsQueueComponent, ComponentCardComponent, AppointmentBookingFormComponent]
})
export class AppointmentModule { }
