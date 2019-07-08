import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { ProductComponent } from './product/product.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { OrderComponent } from './order/order.component';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    OrderComponent,
    ProductComponent,
    LoginFormComponent,
    SignupFormComponent,
    AddOrderDialogComponent,
    AddProductDialogComponent,
    AddGroupDialogComponent
  ],
  exports: [
    CommonModule,
    OrderComponent,
    ProductComponent,
    AppMaterialModule,
    LoginFormComponent,
    SignupFormComponent,
    AddOrderDialogComponent,
    AddProductDialogComponent,
    AddGroupDialogComponent
  ]
})
export class ComponentsModule { }
