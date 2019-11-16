import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2DashboardComponent } from './co2-dashboard.component';

describe('Co2DashboardComponent', () => {
  let component: Co2DashboardComponent;
  let fixture: ComponentFixture<Co2DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
