import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-holiday-list',
  styleUrls: ['./holiday-list.component.scss'],
  templateUrl: './holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayListComponent {
  readonly holidays$: Observable<HolidaysModel[]> = this._holidayService.getAll();

  constructor(private _holidayService: HolidayService) {
  }
}
