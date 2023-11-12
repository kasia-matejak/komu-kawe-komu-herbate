import { Component } from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {Beverage} from "../../models/beverage";

@Component({
  selector: 'app-beverage-order',
  templateUrl: './beverage-order.component.html',
  styleUrls: ['./beverage-order.component.scss']
})
export class BeverageOrderComponent {
  beverages: Beverage[] = [];

  constructor(private eventService: EventService) {
    this.eventService.BeverageAdded.subscribe((chosenBeverage: Beverage) => {
      this.beverages.push(chosenBeverage);
      console.log(this.beverages)
    })
  }
}
