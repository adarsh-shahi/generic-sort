class Node {
	value: number;
	next: Node | null = null;
	constructor(value: number) {
		this.value = value;
	}
}

export class LinkedList {
	private head: Node | null = null;
	private size: number = 0;

	add(data: number): void {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			let temp = this.head;
			while (temp.next) {
				temp = temp.next;
			}
			temp.next = node;
		}
		this.size++;
	}

	get length(): number {
		return this.size;
	}

	at(index: number): Node {
		if (index >= this.size || !this.head) throw new Error("Index out of bound");

		let temp: Node | null = this.head;
		let i = 0;
		while (temp) {
			if (i == index) return temp;
			i++;
			temp = temp.next;
		}
		throw new Error("Index out of bound");
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) throw new Error("list is empty");
		return this.at(leftIndex).value > this.at(rightIndex).value;
	}

	swap(leftIndex: number, rightIndex: number): void {
		const temp = this.at(leftIndex).value;
		this.at(leftIndex).value = this.at(rightIndex).value;
		this.at(rightIndex).value = temp;
	}

	print(): void {
		let temp = this.head;
		while (temp) {
			console.log(temp.value);
			temp = temp.next;
		}
	}
}
