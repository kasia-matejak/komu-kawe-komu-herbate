import {Beverage} from "./beverage";

export interface Coffee extends Beverage {
  preparation: string;
  strength: string;
  milk: string;
  sugar: string;
}
