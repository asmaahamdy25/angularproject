import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PatientProfileComponent } from './profiles/patient-profile/patient-profile.component';
import { ProfileModule } from './profiles/profile.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
  ProfileModule,
  RouterModule.forRoot([
    {path: 'patien-profile',
     component: PatientProfileComponent}
  ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
