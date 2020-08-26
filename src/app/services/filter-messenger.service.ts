import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterMessengerService {

  subject = new Subject();
  constructor() { }

  sendMsgNewProduct(product) {
    this.subject.next(product); //Trigerring an event
  }

  getMsgNewProduct() {
    return this.subject.asObservable()
  }
}
