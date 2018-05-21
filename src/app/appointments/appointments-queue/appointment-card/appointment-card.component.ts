import { Component, OnInit, Output, Input } from '@angular/core';
import { IAppointmentcard } from '../../../../../shared/models/classes/appointmentcard';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {

   @Input() public appointmentCards: IAppointmentcard;

  constructor() {
  }
  ngOnInit() {
  }

}
