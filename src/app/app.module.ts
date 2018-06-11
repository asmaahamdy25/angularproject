import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileModule } from './profiles/profile.module';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { HomeModule } from './home/home.module';
import {CoreModule} from './core/core.module';
import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatientsModule } from './patient/patients.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DrugsModule } from './drugs/drugs.module';
import { PatientAppointmentQueueComponent } from './appointments/patient-appointment-queue/patient-appointment-queue';
import {SignupComponent} from './core/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { sharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './DEMO/module';
import { AppoinmentCardService } from './shared/models/Services/appointmentcard-service';
import {FacilitesModule} from './facilites/facilites.module';
import { ChartsComponent } from './facilites/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent
    ],

  imports: [
     BrowserModule,
    ProfileModule,
    FormsModule,
    TreatmentModule,
    HomeModule,
    AppRoutingModule,
    PatientsModule,
    ReviewsModule,
    DrugsModule,
    CoreModule ,
    sharedModule,
    AppointmentModule,
    DemoModule,
    FacilitesModule,

    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {path:'chart',component: ChartsComponent
    }
    ]),
    // RouterModule.forRoot([
    //   { path: 'patient-profile', component: PatientProfileComponent },
    //   { path: 'treatment', component: TreatmentComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'signup', component: SignupComponent },
    //   { path: 'home', component: MyhomeComponent }


    // ]),
  ],
  providers: [AppoinmentCardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
