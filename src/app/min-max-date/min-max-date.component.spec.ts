import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxDateComponent } from './min-max-date.component';

describe('MinMaxDateComponent', () => {
  let component: MinMaxDateComponent;
  let fixture: ComponentFixture<MinMaxDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinMaxDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinMaxDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
