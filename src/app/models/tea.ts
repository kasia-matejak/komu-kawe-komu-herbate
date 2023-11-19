import {Beverage} from "./beverage";
import {
  SugarEnum,
  TeaTypeEnum
} from "../shared/enums/beverages-characteristics-enum";

export class Tea {
  forWhom?: string;
  type: TeaTypeEnum;
  sugar: SugarEnum;

  constructor(type: TeaTypeEnum, sugar: SugarEnum) {
    this.type = type;
    this.sugar = sugar;
  }
}
