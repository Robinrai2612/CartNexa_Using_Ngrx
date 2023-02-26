import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { cartState } from './cart.state';

export const selectStore = (state: AppState) => state.cart;

export const selectProducts = createSelector(
  selectStore,
  (state: cartState) => state.product
);
export const selectProductCount = createSelector(
  selectStore,
  (state: cartState) => state.count
);
