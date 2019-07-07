import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-products-add',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css', '../../styles/dialogs.css']
})
export class AddProductDialogComponent {
  name: string;
  price: number;
  isShown: boolean;
  imageUrl: string = '';
  constructionUrl: string;
  get owner(): string {
    return 'User';
  }
  onImageError(e: Element): void {
    e.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png');
  }
  onCreateClicked(): void {
    console.log('Creating !');
    this.isShown = false;
  }
}
