import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/components/accounting/group';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/components/order/order';
import { AddGroupDialogComponent } from 'src/app/components/add-group-dialog/add-group-dialog.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css', '../../styles/flexGrid.css']
})
export class GroupsComponent {
  groupsService: GroupsService;
  ordersService: OrdersService;
  private g: Group = null;
  selectedOrders: Order[];
  @ViewChild('addGroupsDialog', { read: null, static: false }) addGroupsDialog: AddGroupDialogComponent;
  private refreshSelectedOrders(): void {
    this.selectedOrders = [];
    if (this.g == null) {
      return;
    }
    console.log('Orders for : ' + this.g.name);
    this.ordersService.allAvailableOrders.forEach(o => {
      if (o.requestGroup.indexOf(this.g.name) >= 0) {
        this.selectedOrders.push(o);
      }
    });
  }
  selectGroup(g: Group): void {
    this.g = g;
    this.refreshSelectedOrders();
  }
  get gs(): Group[] { return this.groupsService.allAvailableGroups; }
  constructor(groupsService: GroupsService, ordersService: OrdersService) {
    this.groupsService = groupsService;
    this.ordersService = ordersService;
    this.selectedOrders = [];
  }
  onAddGroupClicked(): void {
    if (this.addGroupsDialog === null) {
      console.error('addGroupsDialog is null');
    } else {
      this.addGroupsDialog.isShown = true;
    }
  }
}
