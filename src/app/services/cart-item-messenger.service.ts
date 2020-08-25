import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartItemMessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(cartItem: CartItem) {
    this.subject.next(cartItem); //Trigerring an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
