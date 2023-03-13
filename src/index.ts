import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([5, 6, 3, 8, -1, 2]);

numbersCollection.bubbleSort();
console.log(numbersCollection.getData());

const charactersCollection = new CharactersCollection("zmHda");
charactersCollection.bubbleSort();
console.log(charactersCollection.getData());

const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(4);
linkedList.add(5);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.bubbleSort();
linkedList.print();
