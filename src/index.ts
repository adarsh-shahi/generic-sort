import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([5, 6, 3, 8, -1, 2]);

const sorter = new Sorter(numbersCollection);
sorter.bubbleSort();
console.log(numbersCollection.getData());
