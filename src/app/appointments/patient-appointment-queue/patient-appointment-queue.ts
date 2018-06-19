import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAppointment } from '../../shared/models/interfaces/IAppointment';
import { AppoinmentCardService } from '../../shared/models/Services/appointmentcard-service';


@Component({
  selector: 'app-patient-appointment-queue',
  templateUrl: './patient-appointment-queue.html',
  styleUrls: ['./patient-appointment-queue.css']
})
export class PatientAppointmentQueueComponent implements OnInit {


  public appointmentcards: IAppointment[];
  constructor(private appoinmentCardService: AppoinmentCardService) {

    this.appointmentcards = appoinmentCardService.getAll();
  }

  ngOnInit() {
  }

}
