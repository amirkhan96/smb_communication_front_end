import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { ProductComponent } from './product/product.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { OrderComponent } from './order/order.component';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    ProductComponent,
    OrderComponent,
    AddOrderDialogComponent,
    AddProductDialogComponent
  ],
  exports: [
    CommonModule,
    OrderComponent,
    ProductComponent,
    AppMaterialModule,
    AddOrderDialogComponent,
    AddProductDialogComponent
  ]
})
export class ComponentsModule { }
