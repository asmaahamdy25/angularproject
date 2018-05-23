import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFavouriteDoctorsComponent } from './patient-favourite-doctors.component';

describe('PatientFavouriteDoctorsComponent', () => {
  let component: PatientFavouriteDoctorsComponent;
  let fixture: ComponentFixture<PatientFavouriteDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFavouriteDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFavouriteDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
