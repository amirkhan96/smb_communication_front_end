import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Order } from '../../components/order/order';
import { OrdersService } from '../../services/orders.service';
import { AddOrderDialogComponent } from '../../components/add-order-dialog/add-order-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../../styles/flexGrid.css']
})
export class OrdersComponent implements OnInit {
  columnCount: number;
  gridContainer: Element;
  ordersService: OrdersService;
  @ViewChild('addOrderDialog', { read: null, static: false }) addOrderDialog: AddOrderDialogComponent;
  constructor(ordersService: OrdersService) {
    this.ordersService = ordersService;
  }
  get os(): Order[] {
    return this.ordersService.allAvailableOrders;
  }
  ngOnInit() {
    this.gridContainer = document.getElementById('gridContainer');
    this.onResize();
  }
  onAddButtonClicked(): void {
    if (this.addOrderDialog === null) {
      console.error('addOrderDialog is null');
    } else {
      this.addOrderDialog.isShown = true;
    }
  }
  @HostListener('window:resize', ['$event.target'])
  onResize(): void {
    let cc = (this.gridContainer.clientWidth / 250);
    cc -= (cc % 1.0);
    console.log(cc);
    this.columnCount = cc;
  }
}
