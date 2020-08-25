import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartItemMessengerService } from "src/app/services/cart-item-messenger.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  constructor(private msg: CartItemMessengerService) { }

  ngOnInit(): void {
  }

  handleRemoveCartItem() {
    this.msg.sendMsg(this.cartItem);
  }

}
