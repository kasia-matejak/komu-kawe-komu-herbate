import { Tea } from "./tea";
import { Coffee } from "./coffee";
import {BeverageEnum} from "../shared/enums/beverages-enum";

export class Beverage {
  name?: BeverageEnum;
  icon?: string;
  order?: Tea | Coffee;
}
