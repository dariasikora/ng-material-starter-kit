import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoChipsListComponent } from './crypto-chips-list.component';

@NgModule({
  imports: [MatButtonToggleModule, MatChipsModule, CommonModule, MatListModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [CryptoChipsListComponent],
  providers: [],
  exports: [CryptoChipsListComponent]
})
export class CryptoChipsListComponentModule {
}
