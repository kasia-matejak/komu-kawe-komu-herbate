import {EventEmitter, Injectable} from '@angular/core';
import {Beverage} from "../../models/beverage";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  BeverageAdded: EventEmitter<any> = new EventEmitter<any>();

  emitBeverageAdded(buttonClicked: Beverage) {
    this.BeverageAdded.emit(buttonClicked);
  }
}
