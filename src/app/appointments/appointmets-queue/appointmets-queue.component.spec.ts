import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmetsQueueComponent } from './appointmets-queue.component';

describe('AppointmetsQueueComponent', () => {
  let component: AppointmetsQueueComponent;
  let fixture: ComponentFixture<AppointmetsQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmetsQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmetsQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
