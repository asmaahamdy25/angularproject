import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRaysComponent } from './x-rays.component';

describe('XRaysComponent', () => {
  let component: XRaysComponent;
  let fixture: ComponentFixture<XRaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
