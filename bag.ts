import { BagType } from "./BagType";
import { Present } from "./present";
import { PresentType } from "./PresentType";

export class Bag {
  maxWeight: number;
  bagType: BagType;
  presents: Present[] = [];

  constructor(maxWeight: number, bagType: BagType) {
    this.maxWeight = maxWeight;
    this.bagType = bagType;
  }

  totalWeight(): number {
    let sum: number = 0;

    this.presents.forEach((present) => {
      sum = sum + present.weight;
    });
    return sum;
  }

  addPresent(present: Present) {
    if (this.totalWeight() + present.weight > this.maxWeight) {
      console.log("Sorry the weight was exceeded! TOO HEAVY!");
      return false;
    }
    if (
      this.bagType === BagType.Paper &&
      present.presentType === PresentType.Soft
    ) {
      console.log("Sorry the bag type is wrong! Change it to proceed forward");
      return false;
    }
    this.presents.push(present);
    return true;
  }
}
