import { cartstore } from '../cart';
import { Product } from '../product';

export interface cartState {
  product: cartstore[];
  count: number;
}
