import { CartItem } from './cart-item';

export class Cart {
    id: number;
    status: string;
    cartItems: CartItem[];

    constructor(id: number, status = 'pending') {
        this.id = id;
        this.status = status;
    }
}
