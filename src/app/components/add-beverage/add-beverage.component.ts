import {Component} from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {Beverage} from "../../models/beverage";
import {BeverageEnum} from "../../shared/enums/beverages-enum";

@Component({
  selector: 'app-add-beverage',
  templateUrl: './add-beverage.component.html',
  styleUrls: ['./add-beverage.component.scss']
})
export class AddBeverageComponent {
  buttons: Beverage[] = [
    {name: BeverageEnum.COFFEE, icon: 'assets/images/coffee-bean.svg'},
    {name: BeverageEnum.TEA, icon: 'assets/images/tea-leaf.svg'}
  ]
  constructor(private eventService: EventService) {
  }
  addClicked(buttonClicked: Beverage) {
    this.eventService.emitBeverageAdded(buttonClicked)
  }

}

