import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipsListComponent } from './crypto-chips-list.component';

@NgModule({
  imports: [MatButtonToggleModule, MatChipsModule, CommonModule, MatListModule, MatCardModule],
  declarations: [CryptoChipsListComponent],
  providers: [],
  exports: [CryptoChipsListComponent]
})
export class CryptoChipsListComponentModule {
}
