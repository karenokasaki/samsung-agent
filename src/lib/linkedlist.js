import { nanoid } from 'nanoid';

class Node {
	constructor(data) {
		this.data = { data, id: nanoid() };
		this.next = null;
	}
}

export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
		return this;
	}

	addNode(data) {
		const node = new Node(data);

		if (!this.head) {
			this.head = node;
			this.tail = node;
			this._updateSize();
			return this;
		}

		this.tail.next = node;
		this.tail = node;
		this._updateSize();
		return this;
	}

	setNewTail(nodeID) {
		if (!this.head) {
			return this;
		}

		if (!nodeID) {
			this.head = null;
			this.tail = null;
			this._updateSize();
			return this;
		}

		let current = this.head;
		while (current) {
			if (current.data.id === nodeID) {
				current.next = null;
				this.tail = current;
				this._updateSize();
				return this;
			}
			current = current.next;
		}

		this._updateSize();
		return this;
	}

	pop() {
		if (!this.head) {
			return this;
		}

		// If there's only one node, reset head and tail
		if (!this.head.next) {
			this.head = null;
			this.tail = null;
			this.size = 0;
			return this;
		}

		let current = this.head;
		let previous = null;

		// Traverse the list until you find the second-to-last node
		while (current.next) {
			previous = current;
			current = current.next;
		}

		// Set the next of the second-to-last node to null
		previous.next = null;
		// Update the tail to the second-to-last node
		this.tail = previous;
		// Update the size
		this._updateSize();

		return this;
	}

	_updateSize() {
		let count = 0;
		let current = this.head;
		while (current) {
			count++;
			current = current.next;
		}
		this.size = count;
	}

	[Symbol.iterator]() {
		let current = this.head;
		return {
			next: () => {
				if (current) {
					const value = current.data;
					current = current.next;
					return { value, done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
}
