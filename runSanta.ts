import { Bag } from "./bag";
import { BagType } from "./BagType";
import { Present } from "./present";
import { PresentType } from "./PresentType";
import { Santa } from "./Santa";
import { Sled } from "./Sled";

const ourSanta = new Santa("Klaus", 86);

console.log(ourSanta);

const ourSled = new Sled(ourSanta);
const Present1 = new Present("Car", 8, PresentType.Hard);
const Present2 = new Present("Dinosaur", 3, PresentType.Soft);

ourSled.addPresentAndNewBagIfNeeded(Present1);
ourSled.addPresentAndNewBagIfNeeded(Present2);

console.log(ourSled);
