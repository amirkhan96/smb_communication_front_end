import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { ProductComponent } from './product/product.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    ProductComponent,
    AddProductDialogComponent
  ],
  exports: [
    AppMaterialModule,
    ProductComponent
  ]
})
export class ComponentsModule { }
