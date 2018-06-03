import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCommentsListComponent } from './review-comments-list.component';

describe('ReviewCommentsListComponent', () => {
  let component: ReviewCommentsListComponent;
  let fixture: ComponentFixture<ReviewCommentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCommentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
