import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { ProfileComponent } from './patient-profile/profile/profile.component';
import { InvoicesComponent } from './patient-profile/invoices/invoices.component';
import { ReferralComponent } from './patient-profile/referral/referral.component';
import { XRayComponent } from './patient-profile/x-ray/x-ray.component';
import { DoctorCardComponent } from './patient-profile/doctor-card/doctor-card.component';
import { CalenderComponent } from './patient-profile/calender/calender.component';
// import $ = require("jquery");
// import * as $ from "jquery";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatientProfileComponent, ProfileComponent, InvoicesComponent, ReferralComponent, XRayComponent, DoctorCardComponent, CalenderComponent]
})
export class ProfileModule { }
