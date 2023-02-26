import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { cartstore} from 'src/app/cart';
import {
  selectProducts,
  selectProductCount,
} from 'src/app/store/cart.selector';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<cartstore[]>;
  count$: Observable<number>;
  price: number | undefined;

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select(selectProducts);
    this.count$ = this.store.select(selectProductCount);
    this.cart$.subscribe((data) => {
      this.price = data.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    });
  }
  ngOnInit(): void {}

  removeProducts(removeProduct: cartstore) {
    this.store.dispatch({ type: 'Remove Products', product: removeProduct });
  }
}
