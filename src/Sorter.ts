interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
	private collection: Sortable;

	constructor(collection: Sortable) {
		this.collection = collection;
	}

	public bubbleSort(): void {
		for (let i = 0; i < this.collection.length; i++) {
			let isSorted: boolean = true;
			for (let j = 0; j < this.collection.length - 1 - i; j++) {
				if (this.collection.compare(j, j + 1)) {
					isSorted = false;
					this.collection.swap(j, j + 1);
				}
			}
			if (isSorted) return;
		}
	}
}
