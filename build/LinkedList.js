"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.size = 0;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }
    get length() {
        return this.size;
    }
    at(index) {
        if (index >= this.size || !this.head)
            throw new Error("Index out of bound");
        let temp = this.head;
        let i = 0;
        while (temp) {
            if (i == index)
                return temp;
            i++;
            temp = temp.next;
        }
        throw new Error("Index out of bound");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error("list is empty");
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const temp = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = temp;
    }
    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}
exports.LinkedList = LinkedList;
