import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'dialog-orders-add',
  templateUrl: './add-order-dialog.component.html',
  styleUrls: ['./add-order-dialog.component.css', '../../styles/dialogs.css']
})
export class AddOrderDialogComponent {
  isShown = false;
  productsService: ProductsService;
  product: string;
  count: number;
  deadline: Date;
  requestGroup: string[];
  constructor(productsService: ProductsService) {
    this.requestGroup = [];
    this.productsService = productsService;
  }
  get ps() { return this.productsService.allAvailableProducts; }
  addGroup(g: any): void {
    console.log(typeof(g));
    if (this.requestGroup.indexOf(g.value) < 0) {
      this.requestGroup.push(g.value);
      g.value = '';
    }
  }
  delGroup(g: string): void {
    if (this.requestGroup.indexOf(g) >= 0) {
      this.requestGroup.splice(this.requestGroup.indexOf(g), 1);
    }
  }
  onSubmit(): void {
    console.log('Creating !');
    this.isShown = false;
  }
}
