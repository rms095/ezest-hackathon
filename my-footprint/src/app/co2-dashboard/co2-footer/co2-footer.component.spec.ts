import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2FooterComponent } from './co2-footer.component';

describe('Co2FooterComponent', () => {
  let component: Co2FooterComponent;
  let fixture: ComponentFixture<Co2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
