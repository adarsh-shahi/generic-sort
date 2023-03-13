// interface Sortable {
// 	length: number;
// 	compare(leftIndex: number, rightIndex: number): boolean;
// 	swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;

	public bubbleSort(): void {
		for (let i = 0; i < this.length; i++) {
			let isSorted: boolean = true;
			for (let j = 0; j < this.length - 1 - i; j++) {
				if (this.compare(j, j + 1)) {
					isSorted = false;
					this.swap(j, j + 1);
				}
			}
			if (isSorted) return;
		}
	}
}
