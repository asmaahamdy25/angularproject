import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBasicInfoComponent } from './patient-basic-info.component';

describe('PatientBasicInfoComponent', () => {
  let component: PatientBasicInfoComponent;
  let fixture: ComponentFixture<PatientBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
