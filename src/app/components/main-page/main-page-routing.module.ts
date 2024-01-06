import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { OrdersListComponent } from './orders-list/orders-list.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  // {
  //   path: 'orders',
  //   component: OrdersListComponent,
  //   data: {
  //     title: 'Zamówienia',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
