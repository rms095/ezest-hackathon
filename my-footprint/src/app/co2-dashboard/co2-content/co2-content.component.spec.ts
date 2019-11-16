import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2ContentComponent } from './co2-content.component';

describe('Co2ContentComponent', () => {
  let component: Co2ContentComponent;
  let fixture: ComponentFixture<Co2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
