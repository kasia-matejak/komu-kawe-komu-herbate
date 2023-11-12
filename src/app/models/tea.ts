import {Beverage} from "./beverage";

export interface Tea extends Beverage {
  type: string;
  sugar: string;
}
