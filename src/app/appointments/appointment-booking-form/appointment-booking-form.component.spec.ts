import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentBookingFormComponent } from './appointment-booking-form.component';

describe('AppointmentBookingFormComponent', () => {
  let component: AppointmentBookingFormComponent;
  let fixture: ComponentFixture<AppointmentBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
