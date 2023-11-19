import {Component, NgModule, OnInit} from '@angular/core';
import {EventService} from "../../shared/services/event.service";
import {Beverage} from "../../models/beverage";
import {Coffee} from "../../models/coffee";
import {
  CoffeePreparationEnum,
  CoffeeStrenghtEnum,
  MilkEnum,
  SugarEnum,
  TeaTypeEnum
} from "../../shared/enums/beverages-characteristics-enum";
import {Tea} from "../../models/tea";
import {BeverageEnum} from "../../shared/enums/beverages-enum";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beverage-order',
  templateUrl: './beverage-order.component.html',
  styleUrls: ['./beverage-order.component.scss']
})
export class BeverageOrderComponent implements OnInit {
  beverages: Beverage[] = [];
  CoffeePreparationMethods = [CoffeePreparationEnum.WITH_GROUNDS, CoffeePreparationEnum.INSTANT, CoffeePreparationEnum.COFFEE_MAKER]
  CoffeeStrengthOptions = [CoffeeStrenghtEnum.WATERY, CoffeeStrenghtEnum.STANDARD, CoffeeStrenghtEnum.STRONG]
  TeaTypes = [TeaTypeEnum.BLACK, TeaTypeEnum.GREEN, TeaTypeEnum.FRUITY]
  MilkOptions = [MilkEnum.ONE_THIRD, MilkEnum.TWO_THIRDS]
  SugarOptions = [SugarEnum.ONE_SPOON, SugarEnum.TWO_SPOONS, SugarEnum.THREE_SPOONS]
  selectedMethod?: CoffeePreparationEnum;
  selectedStrength?: CoffeeStrenghtEnum;
  selectedType?: TeaTypeEnum;
  selectedSugar?: SugarEnum;
  selectedMilk?: MilkEnum;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.BeverageAdded.subscribe((chosenBeverage: Beverage) => {
      this.beverages.push(chosenBeverage);
      this.specifyBeverage(this.beverages)
    });

  }
  specifyBeverage(beverages: Beverage[]) {
    beverages.forEach((el) => {
      if (el.order != undefined) return;
      if (el.name == BeverageEnum.COFFEE) {
        el.order = new Coffee(CoffeePreparationEnum.WITH_GROUNDS, CoffeeStrenghtEnum.STANDARD, MilkEnum.NONE, SugarEnum.NONE)
      }
      else {
        el.order = new Tea(TeaTypeEnum.BLACK, SugarEnum.NONE);
      }
    })
  }
  isCoffee(order: Coffee | Tea | undefined): order is Coffee {
    return !!order && (order as Coffee).strength !== undefined;
  }
  isTea(order: Coffee | Tea | undefined): order is Tea {
    return !!order && (order as Tea).type !== undefined;
  }

  protected readonly BeverageEnum = BeverageEnum;
}

