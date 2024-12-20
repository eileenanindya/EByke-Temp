import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorytransaksiPage } from './historytransaksi.page';

describe('HistorytransaksiPage', () => {
  let component: HistorytransaksiPage;
  let fixture: ComponentFixture<HistorytransaksiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorytransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
