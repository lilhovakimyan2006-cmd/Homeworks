import { Deque } from "./deque.js"

class Queue {
    #data;
    #size;

    constructor(initialCapacity = 8) {
        if (!Number.isInteger(initialCapacity) || initialCapacity < 0) {
            throw new Error("Capacity must be a non-negative integer");
        }

        this.#data = new Deque(initialCapacity);
        this.#size = 0;
    }

    enqueue(value) {
        this.#data.push_back(value);
        ++this.#size;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty! Can't dequeue");
        }

        --this.#size;
        return this.#data.pop_front();
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }

        return this.#data.fornt();
    }

    back() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
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
        return [...this.#data];
    }

    [Symbol.iterator]() {
        return this.#data[Symbol.iterator]();
    }
}

export { Queue };