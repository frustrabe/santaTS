import { Bag } from "./bag";
import { BagType } from "./BagType";
import { Present } from "./present";
import { Santa } from "./Santa";

export class Sled {
  santa: Santa;
  bags: Bag[] = [];

  constructor(santa: Santa) {
    this.santa = santa;
  }
  addBag(bag: Bag) {
    this.bags.push(bag);
  }
  setSanta(santa: Santa) {
    this.santa = santa;
  }

  addPresentAndNewBagIfNeeded(present: Present) {
    // Checking the weight not exceeding the amount so it doesnt follow through
    if (present.weight > 10) {
      return false;
    }
    // Initial bag
    let ourBag: Bag;
    // If no bags are on sled
    if (this.bags.length === 0) {
      // Make a new bag
      ourBag = new Bag(10, BagType.Canvas);
      // Add the present to the bag
      ourBag.addPresent(present);
      // Add bag to the sled
      this.addBag(ourBag);
      return;
      // If bags on sled
    } else {
      // Get the last bag on the sled
      ourBag = this.bags[this.bags.length - 1];
      // Trying to add the present to the bag
      if (ourBag.addPresent(present) === false) {
        // Make a new bag
        ourBag = new Bag(10, BagType.Canvas);
        // Add the present to the bag
        ourBag.addPresent(present);
        // Add bag to the sled
        this.addBag(ourBag);
      }
    }
  }
}
