import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-Routing.module';
import { RouterModule } from '@angular/router';
//import { AppointmentCardComponent } from './patient-appointment-queue/appointment-card/appointment-card.component';

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    CommonModule,
    AppointmentsRoutingModule 

  ]
})
export class AppointmentModule { }
