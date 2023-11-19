import {Beverage} from "./beverage";
import {
  CoffeePreparationEnum,
  CoffeeStrenghtEnum,
  MilkEnum,
  SugarEnum
} from "../shared/enums/beverages-characteristics-enum";

export class Coffee {
  forWhom?: string;
  preparation: CoffeePreparationEnum;
  strength: CoffeeStrenghtEnum;
  milk: MilkEnum;
  sugar: SugarEnum;

  constructor(preparation: CoffeePreparationEnum, strength: CoffeeStrenghtEnum, milk: MilkEnum, sugar: SugarEnum) {
    this.preparation = preparation;
    this.strength = strength;
    this.milk = milk;
    this.sugar = sugar;
    }
}
