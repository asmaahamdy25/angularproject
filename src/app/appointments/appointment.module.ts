import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentsRoutingModule } from './appointments-Routing.module';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sharedModule } from '../shared/shared.module';
@NgModule({
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
})
export class AppointmentModule {
 }
