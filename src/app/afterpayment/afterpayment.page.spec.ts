import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterpaymentPage } from './afterpayment.page';

describe('AfterpaymentPage', () => {
  let component: AfterpaymentPage;
  let fixture: ComponentFixture<AfterpaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
