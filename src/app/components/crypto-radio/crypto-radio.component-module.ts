import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CryptoRadioComponent } from './crypto-radio.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatCardModule],
  declarations: [CryptoRadioComponent],
  providers: [],
  exports: [CryptoRadioComponent]
})
export class CryptoRadioComponentModule {
}
