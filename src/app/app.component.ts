import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateRangeComponent } from './date-range/date-range.component';
import { MinMaxDateComponent } from './min-max-date/min-max-date.component';
import { MonthYearDateComponent } from './month-year-date/month-year-date.component';
import { DefaultDatepickerComponent } from './default-datepicker/default-datepicker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateRangeComponent, MinMaxDateComponent, MonthYearDateComponent, DefaultDatepickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Material';
}
