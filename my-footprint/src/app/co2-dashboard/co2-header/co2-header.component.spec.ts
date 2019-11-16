import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2HeaderComponent } from './co2-header.component';

describe('Co2HeaderComponent', () => {
  let component: Co2HeaderComponent;
  let fixture: ComponentFixture<Co2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
