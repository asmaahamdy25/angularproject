import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBriefInfoComponent } from './patient-brief-info.component';

describe('PatientBriefInfoComponent', () => {
  let component: PatientBriefInfoComponent;
  let fixture: ComponentFixture<PatientBriefInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBriefInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBriefInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
