import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientCardComponent } from './patient-card/patient-card.component';

const routes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'patient/card', component: PatientCardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
