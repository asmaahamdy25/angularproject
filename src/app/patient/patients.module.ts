import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientCardListComponent } from './patient-card-list/patient-card-list.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { PatientCardComponent } from './patient-card/patient-card.component';


@NgModule({
  declarations: [
      PatientComponent,
      PatientCardComponent,
      PatientCardListComponent,
      SearchFiltersComponent
,
    PatientCardComponent
],
  imports: [
      CommonModule,
      PatientRoutingModule
  ]
})
export class PatientsModule { }
