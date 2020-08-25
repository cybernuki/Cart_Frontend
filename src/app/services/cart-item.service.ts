import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { CartItem } from '../models/cart-item';
import { productCarsUrl } from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http: HttpClient) { }

  updateCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.put<CartItem>(`${productCarsUrl}/${cartItem.id}`, cartItem);
  }

  createCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`${productCarsUrl}`, {
      product_id: cartItem.product.id,
      cart_id: cartItem.cartId,
      quantity: 1
    });
  }

  deleteCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.delete<CartItem>(`${productCarsUrl}/${cartItem.id}`);
  }
}
