import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentsRoutingModule } from './appointments-Routing.module';
import { RouterModule } from '@angular/router';
//import { AppointmentCardComponent } from './patient-appointment-queue/appointment-card/appointment-card.component';

@NgModule({
  declarations:[
    
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    appointmentsRoutingModule 
   
    
  ]
})
export class AppointmentModule { }
