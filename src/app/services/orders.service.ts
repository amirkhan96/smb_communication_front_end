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
      'Group ' + i.toString(),
      'Group ' + (i + 1).toString(),
      'Group ' + (i + 2).toString()
    );
  }
}
