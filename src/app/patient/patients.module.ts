import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientCardComponent } from './patient-card-list/patient-card/patient-card.component';
import { PatientCardListComponent } from './patient-card-list/patient-card-list.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';


@NgModule({
  declarations: [
      PatientComponent,
      PatientCardComponent,
      PatientCardListComponent,
      SearchFiltersComponent
  ],
  imports: [
      CommonModule,
      PatientRoutingModule
  ]
})
export class PatientsModule { }
