import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CartItem } from '../models/cart-item';
import { carstUrl } from '../config/api';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(`${carstUrl}/${cartId}`);
  }

  createCart(): Observable<Cart> {
    return this.http.post<Cart>(carstUrl, {});
  }

  addProductToCart(product: Product, cart: Cart): Observable<CartItem> {

    return this.http.post<CartItem>(carstUrl, {
      product_id: product.id,
      cart_id: cart.id,
      quantity: 1
    });
  }

  updateCart(cartId: number): Observable<CartItem> {
    return this.http.put<CartItem>(`${carstUrl}/${cartId}`, { status: 'completed' });
  }
}
