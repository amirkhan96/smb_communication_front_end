import { Component, Input } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() o: Order;
  get deadline(): string {
    return this.o.deadline;
  }
}
