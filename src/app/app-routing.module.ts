import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoRadioComponent } from './components/crypto-radio/crypto-radio.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CategoriesSelectionListComponent } from './components/categories-selection-list/categories-selection-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CryptoRadioComponentModule } from './components/crypto-radio/crypto-radio.component-module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { CategoriesSelectionListComponentModule } from './components/categories-selection-list/categories-selection-list.component-module';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto', component: CryptoChipsListComponent }, { path: 'checkbox-categories', component: CategoriesComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'list-1-single-radio-crypto', component: CryptoRadioComponent }, { path: 'public-holidays', component: HolidayListComponent }, { path: 'categories', component: CategoriesSelectionListComponent }, { path: 'products', component: ProductsListComponent }]), CryptoChipsListComponentModule, CategoriesComponentModule, CategoriesMenuComponentModule, CryptoRadioComponentModule, HolidayListComponentModule, CategoriesSelectionListComponentModule, ProductsListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
