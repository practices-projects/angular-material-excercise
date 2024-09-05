import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-min-max-date',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './min-max-date.component.html',
  styleUrl: './min-max-date.component.scss',
})
export class MinMaxDateComponent {
  private readonly _currentYear = new Date().getFullYear();
  readonly minDate = new Date(this._currentYear - 1, 0, 1);
  readonly maxDate = new Date();
}
