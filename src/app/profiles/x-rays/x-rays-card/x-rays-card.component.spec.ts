import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRaysCardComponent } from './x-rays-card.component';

describe('XRaysCardComponent', () => {
  let component: XRaysCardComponent;
  let fixture: ComponentFixture<XRaysCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRaysCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRaysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
