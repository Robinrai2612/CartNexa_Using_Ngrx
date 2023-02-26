import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productList: Product[] = [];
  constructor(private service: CartService) {
    this.service.getProducts.subscribe((products) =>
      this.productList= products
    );
    console.log(this.productList);
  }
}
