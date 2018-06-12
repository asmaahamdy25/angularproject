import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-Routing.module';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentModule {
 }
