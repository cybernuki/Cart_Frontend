import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FilterMessengerService } from 'src/app/services/filter-messenger.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  model: any = {
  };

  constructor(
    private msg: FilterMessengerService,
    private productService: ProductService) { }

  ngOnInit(): void {
  }

  HandleAddProduct() {
    if (this.validateFormFields()) {
      const product = new Product(this.model.name,
        this.model.sku,
        this.model.description,
        this.model.price);
      this.productService.createProduct(product).subscribe((product: Product) => {
        this.msg.sendMsgNewProduct(product);
        this.cleanFields();
      })
    }
  }

  cleanFields() {
    this.model.name = "";
    this.model.sku = "";
    this.model.description = "";
    this.model.price = "";
  }

  validateFormFields(): Boolean {
    if (!this.model.name) {
      alert('missing name');
      return false;
    } else if (!this.model.description) {
      alert('missing description');
      return false;
    } else if (!this.model.sku) {
      alert('missing sku');
      return false;
    } else if (!this.model.price) {
      alert('missing price');
      return false;
    } else {
      return true;
    }
  }
}
