import { Product } from '../components/product/product';
import { ProductsService } from '../services/products.service';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AddProductDialogComponent } from '../components/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../styles/flexGrid.css']
})
export class ProductsComponent implements OnInit {
  columnCount: number;
  gridContainer: Element;
  productsService: ProductsService;
  @ViewChild('addProductDialog', { read: null, static: false }) addProductDialog: AddProductDialogComponent;
  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }
  get ps(): Product[] {
    return this.productsService.allAvailableProducts;
  }
  ngOnInit() {
    this.gridContainer = document.getElementById('gridContainer');
    this.onResize();
  }
  OnAddButtonClicked(): void {
    if (this.addProductDialog === null) {
      console.error('addProductDialog is null');
    } else {
      this.addProductDialog.isShown = true;
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
