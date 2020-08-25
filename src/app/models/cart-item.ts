import { Product } from './product';

export class CartItem {
    id: number;
    cartId: number;
    product: Product;
    quantity: number;

    constructor(product: Product, cartId: number, quantity = 1) {
        this.cartId = cartId
        this.product = product;
        this.quantity = quantity;
    }
}
