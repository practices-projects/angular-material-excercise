import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearDateComponent } from './month-year-date.component';

describe('MonthYearDateComponent', () => {
  let component: MonthYearDateComponent;
  let fixture: ComponentFixture<MonthYearDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthYearDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthYearDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
