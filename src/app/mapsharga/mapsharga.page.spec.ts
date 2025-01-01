import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapshargaPage } from './mapsharga.page';

describe('MapshargaPage', () => {
  let component: MapshargaPage;
  let fixture: ComponentFixture<MapshargaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapshargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
