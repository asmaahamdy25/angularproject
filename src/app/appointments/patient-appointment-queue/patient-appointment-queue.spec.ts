import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PatientAppointmentQueueComponent  } from './patient-appointment-queue';

describe('CreatePatientComponent', () => {
  let component: PatientAppointmentQueueComponent;
  let fixture: ComponentFixture<PatientAppointmentQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppointmentQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
