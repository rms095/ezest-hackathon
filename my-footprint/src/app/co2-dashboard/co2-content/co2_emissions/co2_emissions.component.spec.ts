import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2EmissionsComponent } from './co2_emissions.component';

describe('Co2EmissionsComponent', () => {
  let component: Co2EmissionsComponent;
  let fixture: ComponentFixture<Co2EmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2EmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2EmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
