import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment/treatment.component';
import { PatientBriefInfoComponent } from './treatment/patient-brief-info/patient-brief-info.component';
import { MedicalHistoryComponent } from './treatment/patient-brief-info/medical-history/medical-history.component';
import { PrevVisitsComponent } from './treatment/patient-brief-info/prev-visits/prev-visits.component';
import { PatientBasicInfoComponent } from './treatment/patient-brief-info/patient-basic-info/patient-basic-info.component';
import { TeethChartComponent } from './treatment/teeth-chart/teeth-chart.component';
import { DiseasesComponent } from './treatment/teeth-chart/diseases/diseases.component';
import { TeethComponent } from './treatment/teeth-chart/teeth/teeth.component';
import { ToothComponent } from './treatment/teeth-chart/teeth/tooth/tooth.component';
import { AppointmentModule } from '../appointments/appointment.module';
// import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule
  
    // ,
    // sharedModule
  ],
  declarations: [
    TreatmentComponent,
    PatientBriefInfoComponent,
    MedicalHistoryComponent,
    PrevVisitsComponent,
    PatientBasicInfoComponent,
    TeethChartComponent,
    DiseasesComponent,
    TeethComponent,
    ToothComponent
  ],
  exports: [
  ]
})
export class TreatmentModule { }
