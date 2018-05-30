import { Component, OnInit } from '@angular/core';
import { RouterModule ,RouterOutlet} from '@angular/router';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { CommonModule } from '@angular/common/src/common_module';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})

export class CreatePatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
