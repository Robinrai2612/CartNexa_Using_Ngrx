import { Injectable } from '@angular/core';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  API_LINK = 'https://fakestoreapi.com/products';

 getProducts = from(fetch(this.API_LINK)).pipe(switchMap((response) =>response.json()));
  constructor() {}
}
