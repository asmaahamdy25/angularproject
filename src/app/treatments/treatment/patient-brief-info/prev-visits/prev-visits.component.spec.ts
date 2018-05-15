import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevVisitsComponent } from './prev-visits.component';

describe('PrevVisitsComponent', () => {
  let component: PrevVisitsComponent;
  let fixture: ComponentFixture<PrevVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
