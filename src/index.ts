class Sorter {
	private collection: number[] | string;

	constructor(collection: number[] | string) {
		this.collection = collection;
	}

	public bubbleSort(): void {
		for (let i = 0; i < this.collection.length; i++) {
			let isSorted: boolean = true;
			for (let j = 0; j < this.collection.length - 1 - i; j++) {
				// If collection is an array of numbers
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						isSorted = false;
						const temp = this.collection[j];
						this.collection[j] = this.collection[j + 1];
						this.collection[j + 1] = temp;
					}
				}
				if (typeof this.collection === "string") {

				}
			}
			if (isSorted) return;
		}
	}
}

const nums: number[] = [5, 6, 3, 8, -1, 2];
const sorter = new Sorter(nums);
sorter.bubbleSort();
console.log(nums);
