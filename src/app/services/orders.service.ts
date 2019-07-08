import { Injectable } from '@angular/core';
import { Order } from '../components/order/order';
import { getLocaleDateTimeFormat, FormatWidth } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private os: Order[];
  get allAvailableOrders(): Order[] { return this.os; }
  constructor() {
    this.os = [];
    for (let i = 0; i < 10; i++) {
      this.os[i] = this.GenerateDebugOrder(i);
    }
  }
  private GenerateDebugOrder(i: number): Order {
    return new Order(
      'Order ' + i.toString(),
      (i * 13 + 11) % 6,
      'Creator' + i.toString(),
      new Date(Date.now()).toISOString(),
      'G' + (1 + (i % 4)).toString(),
      'G' + (1 + ((i + 1) % 6)).toString(),
      'G' + (1 + ((i + 2) % 6)).toString()
    );
  }
}
