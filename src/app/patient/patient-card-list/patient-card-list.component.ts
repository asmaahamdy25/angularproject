import { Component, OnInit, Input } from '@angular/core';
import { IDentistList } from '../../shared/models/interfaces/IDentistList';
import { DentistService } from '../../shared/models/Services/dentist.service';

@Component({
  selector: 'app-patient-card-list',
  templateUrl: './patient-card-list.component.html',
  styleUrls: ['./patient-card-list.component.css']
})
export class PatientCardListComponent implements OnInit {
dentists: IDentistList[];
  constructor(private dentistService: DentistService) {
    this.dentists = dentistService.getAll();
   }

  ngOnInit() {
    console.log(this.dentists);
  }

}
