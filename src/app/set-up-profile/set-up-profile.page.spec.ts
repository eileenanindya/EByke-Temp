import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetUpProfilePage } from './set-up-profile.page';

describe('SetUpProfilePage', () => {
  let component: SetUpProfilePage;
  let fixture: ComponentFixture<SetUpProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
