import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetEntriesComponent } from './offset-entries.component';

describe('OffsetEntriesComponent', () => {
  let component: OffsetEntriesComponent;
  let fixture: ComponentFixture<OffsetEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
