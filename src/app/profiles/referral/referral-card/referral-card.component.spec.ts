import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCardComponent } from './referral-card.component';

describe('ReferralCardComponent', () => {
  let component: ReferralCardComponent;
  let fixture: ComponentFixture<ReferralCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
