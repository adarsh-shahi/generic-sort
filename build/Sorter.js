"use strict";
// interface Sortable {
// 	length: number;
// 	compare(leftIndex: number, rightIndex: number): boolean;
// 	swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    bubbleSort() {
        for (let i = 0; i < this.length; i++) {
            let isSorted = true;
            for (let j = 0; j < this.length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    isSorted = false;
                    this.swap(j, j + 1);
                }
            }
            if (isSorted)
                return;
        }
    }
}
exports.Sorter = Sorter;
