import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  @Input() p: Product;
  ngOnInit() {
  }
}
