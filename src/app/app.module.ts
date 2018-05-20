import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TreatmentModule } from './treatments/treatment.module';
import { AppointmentModule } from './appointments/appointment.module';
import { ProfileModule } from './profiles/profile.module';
import { HomeModule } from './home/home.module';
import { FacilityModule } from './facilities/facility.module';
import {CoreModule} from './core/core.module';
import{LoginComponent} from './core/login/login.component';
import{SignupComponent} from './core/signup/signup.component';




import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { MyhomeComponent } from './home/myhome/myhome.component';



@NgModule({
  declarations: [
    AppComponent,
  
   
    
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'treatment', component: TreatmentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: MyhomeComponent }


    ]),
    BrowserModule,
    TreatmentModule,
    AppointmentModule,
    ProfileModule,
    HomeModule,
    FacilityModule,
    CoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
