import { Component, OnInit } from '@angular/core';
import { IAppointmentcard } from '../../../../shared/models/classes/appointmentcard';

@Component({
  selector: 'app-appointments-queue',
  templateUrl: './appointments-queue.component.html',
  styleUrls: ['./appointments-queue.component.css']
})
export class AppointmentsQueueComponent implements OnInit {


  public appointmentCard: IAppointmentcard[];
  constructor() {

    this.appointmentCard = [
      {
        patientName: 'Abdurrahman Mohamed',
        patientNum: 2032,
        appointmentTime: '04:30 PM',
        DrName: 'Dr. Dalia Hany',
        num1: 32,
        num2: 0,
    },
    {
      patientName: 'Asmaa',
      patientNum: 2033,
      appointmentTime: '04:30 PM',
      DrName: 'Dr. Dalia Hany',
      num1: 33,
      num2: 0,
  },
  {
    patientName: 'Rawaa',
    patientNum: 2033,
    appointmentTime: '04:30 PM',
    DrName: 'Dr. Dalia Hany',
    num1: 34,
    num2: 0,
},
{
  patientName: 'Asmaa',
  patientNum: 2033,
  appointmentTime: '04:30 PM',
  DrName: 'Dr. Dalia Hany',
  num1: 35,
  num2: 0,
},
{
  patientName: 'Asmaa',
  patientNum: 2033,
  appointmentTime: '04:30 PM',
  DrName: 'Dr. Dalia Hany',
  num1: 33,
  num2: 0,
},
{
  patientName: 'Asmaa',
  patientNum: 2033,
  appointmentTime: '04:30 PM',
  DrName: 'Dr. Dalia Hany',
  num1: 33,
  num2: 0,
},
    ];
   }

  ngOnInit() {
  }

}
