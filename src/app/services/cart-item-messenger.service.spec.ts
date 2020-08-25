import { TestBed } from '@angular/core/testing';

import { CartItemMessengerService } from './cart-item-messenger.service';

describe('CartItemMessengerService', () => {
  let service: CartItemMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
