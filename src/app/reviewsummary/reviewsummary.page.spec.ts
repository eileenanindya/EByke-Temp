import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsummaryPage } from './reviewsummary.page';

describe('ReviewsummaryPage', () => {
  let component: ReviewsummaryPage;
  let fixture: ComponentFixture<ReviewsummaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
