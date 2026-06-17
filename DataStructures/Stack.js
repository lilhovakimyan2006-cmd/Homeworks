import { Deque } from "./deque.js"

class Stack {
    #data;
    #size;

    constructor(initialCapacity = 8) {
        if (!Number.isInteger(initialCapacity) || initialCapacity < 0) {
            throw new Error("Capacity must be an non-negative integer");
        }

        this.#data = new Deque(initialCapacity);
        this.#size = 0;
    }

    push(value) {
        this.#data.push_back(value);
        ++this.#size;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        --this.#size;
        return this.#data.pop_back();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }

        return this.#data.back();
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
        this.#data.clear();
        this.#size = 0;
    }

    toArray() {
        let arr = [];

        for (let item of this.#data) {
            arr.push(item);
        }

        return arr;
    }

    [Symbol.iterator]() {
        return this.#data[Symbol.iterator]();
    }
}

export { Stack };