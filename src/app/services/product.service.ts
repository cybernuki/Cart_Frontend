import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'product1', '123', 'This is the product 1 description', 200),
    new Product(2, 'product2', '128', 'This is the product 2 description', 300),
    new Product(3, 'product3', '127', 'This is the product 3 description', 500),
    new Product(4, 'product4', '126', 'This is the product 4 description', 600),
    new Product(5, 'product5', '125', 'This is the product 5 description', 800),
    new Product(6, 'product6', '124', 'This is the product 6 description', 50),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an observable
    return this.products;
  }
}
