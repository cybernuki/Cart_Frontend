import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartId: string = '';

  cartItems = [
    /*     { id: 1, productId: 1, cartId: 1, productName: 'Test 1', quantity: 4, price: 100, },
        { id: 2, productId: 3, cartId: 1, productName: 'Test 3', quantity: 5, price: 30, },
        { id: 3, productId: 2, cartId: 1, productName: 'Test 2', quantity: 10, price: 50, },
        { id: 4, productId: 4, cartId: 1, productName: 'Test 4', quantity: 20, price: 20, }, */
  ];

  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
    //search if cartId is saved in lcoal storage
    //search it in the api
    //if found:
    //Populate data:
    //Else:
    //create new cart
  }

  addProductToCart(product: Product) {
    let found = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].quantity++;
        found = true;
        break;
      }
    }
    if (!found) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price
      })
    }
    //TODO move this function to an another one
    //save into the api
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    });
  }

}
