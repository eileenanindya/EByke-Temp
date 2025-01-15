import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeveloperProfilePage } from './developer-profile.page';

describe('DeveloperProfilePage', () => {
  let component: DeveloperProfilePage;
  let fixture: ComponentFixture<DeveloperProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
