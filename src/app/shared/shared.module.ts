import { NgModule } from '@angular/core';
// import { PatientAppointmentQueueComponent } from '../src/app/appointments/patient-appointment-queue/patient-appointment-queue';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({

    declarations: [
        HeaderComponent,
        FooterComponent,
        MenuComponent
    ],
    exports: [
       HeaderComponent,
       FooterComponent
    ]
})
export class SharedModule {
}
