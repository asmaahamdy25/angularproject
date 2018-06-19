import { Component, OnInit, Input } from '@angular/core';
import { IDentistList } from '../../shared/models/interfaces/IDentistList';
import { DentistService } from '../../shared/models/Services/dentist.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

  @Input() dentist: IDentistList;
  constructor() {
  }

  ngOnInit() {
    console.log(this.dentist);
  }

}
