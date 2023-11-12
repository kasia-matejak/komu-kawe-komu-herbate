import { Component, EventEmitter } from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {Beverage} from "../../models/beverage";
@Component({
  selector: 'app-add-beverage',
  templateUrl: './add-beverage.component.html',
  styleUrls: ['./add-beverage.component.scss']
})
export class AddBeverageComponent {
  buttons: Beverage[] = [
    {name: 'kawa', icon: 'assets/images/coffee-bean.svg'},
    {name: 'herbata', icon: 'assets/images/tea-leaf.svg'}
  ]
  constructor(private eventService: EventService) {
  }
  addClicked(buttonClicked: Beverage) {
    console.log("Emited BeverageAdded", buttonClicked)
    this.eventService.emitBeverageAdded(buttonClicked)
  }

}

