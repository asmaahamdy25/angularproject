import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { ProfileComponent } from './patient-profile/profile/profile.component';
import { InvoicesComponent } from './patient-profile/invoices/invoices.component';
import { ReferralComponent } from './patient-profile/referral/referral.component';
import { XRayComponent } from './patient-profile/x-ray/x-ray.component';
import { DoctorCardComponent } from './patient-profile/doctor-card/doctor-card.component';

import { CalendarModule } from 'angular-calendar';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    
    CommonModule
  ],
  declarations: [PatientProfileComponent,
     ProfileComponent, InvoicesComponent,
      ReferralComponent, XRayComponent,
       DoctorCardComponent]
})
export class ProfileModule { }
