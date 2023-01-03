import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories-selection-list',
  styleUrls: ['./categories-selection-list.component.scss'],
  templateUrl: './categories-selection-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesSelectionListComponent {
  readonly selectionList$: Observable<string[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
