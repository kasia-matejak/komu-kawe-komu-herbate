import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddBeverageComponent } from './header/add-beverage/add-beverage.component';
import { BeverageOrderComponent } from './orders-list/beverage-order/beverage-order.component';
import { HeaderComponent } from './header/header.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

const components = [
  HeaderComponent,
  AddBeverageComponent,
  OrdersListComponent,
  BeverageOrderComponent,
  MainPageComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, MainPageRoutingModule],
  exports: [RouterModule, ...components],
})
export class MainPageModule {}
