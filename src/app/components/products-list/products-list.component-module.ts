import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatCardModule],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
