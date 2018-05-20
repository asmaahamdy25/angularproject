import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PatientProfileComponent } from './profiles/patient-profile/patient-profile.component';
import { ProfileModule } from './profiles/profile.module';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';

import { TreatmentComponent } from './treatments/treatment/treatment.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
  ProfileModule,
  RouterModule.forRoot([
    {path: 'patien-profile',
     component: PatientProfileComponent},
     { path: 'treatment', component: TreatmentComponent }

  ])
,
    TreatmentModule,
    AppointmentModule,
    HomeModule,
    FacilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
