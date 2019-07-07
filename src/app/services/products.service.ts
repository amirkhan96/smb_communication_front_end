import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ps: Product[];
  get allAvailableProducts(): Product[] { return this.ps; }
  constructor() {
    this.ps = [];
    for (let i = 0; i < 10; i++) {
      this.ps[i] = this.GenerateDebugProduct(i);
    }
  }
  private GenerateDebugProduct(i: number): Product {
    return new Product(
      i.toString(),
      'Product ' + i.toString(),
      'https://picsum.photos/id/' + (i + 1).toString() + '00/256/256',
      'User ' + (i % 3).toString(),
      'This is Product number ' + i.toString(),
    );
  }
}
