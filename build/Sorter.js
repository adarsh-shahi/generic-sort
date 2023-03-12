"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    bubbleSort() {
        for (let i = 0; i < this.collection.length; i++) {
            let isSorted = true;
            for (let j = 0; j < this.collection.length - 1 - i; j++) {
                if (this.collection.compare(j, j + 1)) {
                    isSorted = false;
                    this.collection.swap(j, j + 1);
                }
            }
            if (isSorted)
                return;
        }
    }
}
exports.Sorter = Sorter;
