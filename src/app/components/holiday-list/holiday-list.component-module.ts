import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { HolidayListComponent } from './holiday-list.component';

@NgModule({
  imports: [MatButtonToggleModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule, MatCardModule],
  declarations: [HolidayListComponent],
  providers: [],
  exports: [HolidayListComponent]
})
export class HolidayListComponentModule {
}
