import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';
import { Coffee } from 'src/app/models/coffee';
import {
  CoffeePreparationEnum,
  CoffeeStrenghtEnum,
  MilkEnum,
  SugarEnum,
  TeaTypeEnum,
} from '../../../../shared/enums/beverages-characteristics-enum';
import { Tea } from 'src/app/models/tea';
import { Beverage } from 'src/app/models/beverage';
import { BeverageEnum } from 'src/app/shared/enums/beverages-enum';

@Component({
  selector: 'app-beverage-order',
  templateUrl: './beverage-order.component.html',
  styleUrls: ['./beverage-order.component.scss'],
})
export class BeverageOrderComponent implements OnInit {
  beverages: Beverage[] = [];
  CoffeePreparationMethods = [
    CoffeePreparationEnum.WITH_GROUNDS,
    CoffeePreparationEnum.INSTANT,
    CoffeePreparationEnum.COFFEE_MAKER,
  ];
  CoffeeStrengthOptions = [
    CoffeeStrenghtEnum.WATERY,
    CoffeeStrenghtEnum.STANDARD,
    CoffeeStrenghtEnum.STRONG,
  ];
  TeaTypes = [TeaTypeEnum.BLACK, TeaTypeEnum.GREEN, TeaTypeEnum.FRUITY];
  MilkOptions = [MilkEnum.ONE_THIRD, MilkEnum.TWO_THIRDS];
  SugarOptions = [
    SugarEnum.ONE_SPOON,
    SugarEnum.TWO_SPOONS,
    SugarEnum.THREE_SPOONS,
  ];
  selectedMethod?: CoffeePreparationEnum;
  selectedStrength?: CoffeeStrenghtEnum;
  selectedType?: TeaTypeEnum;
  selectedSugar?: SugarEnum;
  selectedMilk?: MilkEnum;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.BeverageAdded.subscribe((chosenBeverage: Beverage) => {
      this.beverages.push(chosenBeverage);
      this.specifyBeverage(this.beverages);
    });
  }
  specifyBeverage(beverages: Beverage[]) {
    beverages.forEach((el) => {
      if (el.order != undefined) return;
      if (el.name == BeverageEnum.COFFEE) {
        el.order = new Coffee(
          CoffeePreparationEnum.WITH_GROUNDS,
          CoffeeStrenghtEnum.STANDARD,
          MilkEnum.NONE,
          SugarEnum.NONE
        );
      } else {
        el.order = new Tea(TeaTypeEnum.BLACK, SugarEnum.NONE);
      }
    });
  }
  isCoffee(order: Coffee | Tea | undefined): order is Coffee {
    return !!order && (order as Coffee).strength !== undefined;
  }
  isTea(order: Coffee | Tea | undefined): order is Tea {
    return !!order && (order as Tea).type !== undefined;
  }

  protected readonly BeverageEnum = BeverageEnum;
}
