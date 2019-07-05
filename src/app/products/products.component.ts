import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from '../components/product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ps: Product[];
  columnCount: number;
  gridContainer: Element;
  constructor() {
    this.ps = [];
  }
  private GenerateDebugProduct(i: number): Product {
    return new Product(
      'Product ' + i.toString(),
      'https://picsum.photos/id/' + (i + 1).toString() + '00/256/256',
      'User ' + (i % 3).toString(),
      'This is Product number ' + i.toString(),
    );
  }
  ngOnInit() {
    this.gridContainer = document.getElementById('gridContainer');
    for (let i = 0; i < 10; i++) {
      this.ps[i] = this.GenerateDebugProduct(i);
    }
    this.onResize();
  }
  OnAddButtonClicked(): void {
  }
  @HostListener('window:resize', ['$event.target'])
  onResize(): void {
    let cc = (this.gridContainer.clientWidth / 250);
    cc -= (cc % 1.0);
    console.log(cc);
    this.columnCount = cc;
  }
}
