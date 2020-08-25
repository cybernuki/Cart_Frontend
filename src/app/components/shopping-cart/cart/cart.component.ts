import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { CartItemService } from 'src/app/services/cart-item.service'
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { CartItemMessengerService } from 'src/app/services/cart-item-messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartId: number = 0;
  private cartStatus: string = '';

  cartItems: CartItem[] = [
  ];

  cartTotal = 0;
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private cartItemService: CartItemService,
    private msgCartItem: CartItemMessengerService
  ) { }

  ngOnInit(): void {
    this.setCart();
    this.refreshCartItems();
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
    this.msgCartItem.getMsg().subscribe((cartItem: CartItem) => {
      this.removeProductToCart(cartItem);
    })
  }

  refreshCartItems() {
    this.cartService.getCartItems(this.cartId).subscribe((cart) => {
      if (cart.id) {
        this.cartItems = cart.cartItems;
        this.cartTotal = 0;
        this.cartItems.forEach(item => {
          this.cartTotal += (item.quantity * item.product.price)
        });
      }
    })
  }

  setCart() {
    this.cartId = Number(localStorage.getItem('cartId'));
    this.cartStatus = localStorage.getItem('cartStatus');
    if (!this.cartId)
      this.cartService.createCart().subscribe((cart: Cart) => {
        this.cartId = cart.id;
        this.cartStatus = cart.status;
        localStorage.setItem('cartId', String(this.cartId));
        localStorage.setItem('cartStatus', String(this.cartStatus));
      })
  }

  removeProductToCart(cartItem: CartItem) {
    this.cartItemService.deleteCartItem(cartItem).subscribe(() => {
      this.refreshCartItems()
    })
  }

  addProductToCart(product: Product) {
    let found = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].product.id === product.id) {
        this.cartItems[i].quantity++;
        this.cartItemService.updateCartItem(this.cartItems[i]).subscribe((cartItem) => { });
        found = true;
        break;
      }
    }
    if (!found) {
      //POST new productcart
      const cartIt = new CartItem(product, this.cartId);
      this.cartItemService.createCartItem(cartIt).subscribe((cartItem) => {
        this.cartItems.push(cartItem);
      });
    }
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.product.price)
    });
  }

  payCart() {
    this.cartService.updateCart(this.cartId).subscribe((cart) => {
    });
    this.cartService.createCart().subscribe((cart) => {
      localStorage.setItem('cartId', String(cart.id));
      localStorage.setItem('cartStatus', cart.status);
      this.setCart();
      this.refreshCartItems();
    })
  }
}
