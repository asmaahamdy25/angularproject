import {NgModule} from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import {CreatePatientComponent} from './create-patient/create-patient.component';
import {PatientAppointmentQueueComponent} from './patient-appointment-queue/patient-appointment-queue';
import { CreateFormComponent } from './create-patient/create-form/create-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppointmentCardComponent } from './patient-appointment-queue/appointment-card/appointment-card.component';

const appointmentsRoutes: Routes = [
{path: 'appointments/create-patient', component: CreatePatientComponent}

];
@NgModule({
    declarations: [

        CreatePatientComponent,
        CreateFormComponent,
        PatientAppointmentQueueComponent,
        AppointmentCardComponent

    ],
imports: [

    CommonModule,

    SharedModule,
    RouterModule.forChild(appointmentsRoutes)
]
,
exports: [

    RouterModule
    ]
})

export class AppointmentsRoutingModule {

}
