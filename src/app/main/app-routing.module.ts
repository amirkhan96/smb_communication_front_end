import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MessagesComponent } from './messages/messages.component';
import { OrdersComponent } from './orders/orders.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
