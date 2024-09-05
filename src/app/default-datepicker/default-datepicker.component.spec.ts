import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDatepickerComponent } from './default-datepicker.component';

describe('DefaultDatepickerComponent', () => {
  let component: DefaultDatepickerComponent;
  let fixture: ComponentFixture<DefaultDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
