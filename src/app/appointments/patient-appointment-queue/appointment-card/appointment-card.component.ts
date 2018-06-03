import { Component, OnInit } from '@angular/core';
import { RouterModule ,RouterOutlet} from '@angular/router';
import { NgModule,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAppointment } from '../../../shared/models/interfaces/IAppointment';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})

export class AppointmentCardComponent implements OnInit {

  @Input()  appointmentcard : IAppointment;

  constructor() { 
  
  }

  ngOnInit() {
  }

}
