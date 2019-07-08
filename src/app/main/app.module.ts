import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { MessagesComponent } from './messages/messages.component';
import { OrdersComponent } from './orders/orders.component';
import { ComponentsModule } from '../components/components.module';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    MessagesComponent,
    OrdersComponent,
    GroupsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
