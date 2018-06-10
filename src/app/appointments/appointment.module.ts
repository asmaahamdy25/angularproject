import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-Routing.module';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sharedModule } from '../shared/shared.module';
@NgModule({
<<<<<<< HEAD
  declarations: [

  ],
  imports: [
    RouterModule,
    CommonModule,
    AppointmentsRoutingModule 

  ]
=======
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    appointmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    sharedModule
  ],
  exports: [FormsModule]
>>>>>>> 179632b7d01c2cd5d19f782ea1ca6eb5a18945a6
})
export class AppointmentModule {
 }
