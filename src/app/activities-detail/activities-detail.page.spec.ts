import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitiesDetailPage } from './activities-detail.page';

describe('ActivitiesDetailPage', () => {
  let component: ActivitiesDetailPage;
  let fixture: ComponentFixture<ActivitiesDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
