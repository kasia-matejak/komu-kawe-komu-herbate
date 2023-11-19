import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddBeverageComponent } from './components/add-beverage/add-beverage.component';
import { BeverageOrderComponent } from './components/beverage-order/beverage-order.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HeaderComponent, AddBeverageComponent, BeverageOrderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
