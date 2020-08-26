import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from "src/app/models/product";
import { FilterMessengerService } from 'src/app/services/filter-messenger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(
    private productService: ProductService,
    private msg: FilterMessengerService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
    this.msg.getMsgNewProduct().subscribe((product: Product) => {
      this.refreshProducts()
    })
  }

  refreshProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }
}
