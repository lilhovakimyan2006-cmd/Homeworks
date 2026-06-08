class Node {
    value;
    #prev;
    #next;
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.#next = next;
        this.#prev = prev;
    }

    get next() {
        return this.#next;
    }

    set next(node) {
        this.#next = node;
    }

    get prev() {
        return this.#prev;
    }

    set prev(node) {
        this.#prev = node;
    }
}

class DoublyLinkedList {
    #head;
    #tail;
    constructor(value) {
        if (value !== undefined) {
            let node = new Node(value);
            this.#head = node;
            this.#tail = node;
        } else {
            this.#head = null;
            this.#tail = null;
        }
    }

    empty() {
        return this.#head === null;
    }

    size() {
        let size = 0;
        let current = this.#head;

        while(current) {
            ++size;
            current = current.next;
        }

        return size;
    }

    clear() {
        this.#head = null;
        this.#tail = null;
    }

    front() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        return this.#head.value;
    }

    back() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        return this.#tail.value;
    }

    at(index) {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (index < 0 || index >= this.size()) {
            throw new Error("Index Error: Out of range");
        }

        let current = this.#head;

        while (index) {
            --index;
            current = current.next;
        }

        return current.value;
    }

    pushFront(value) {
        if (this.empty()) {
            this.#head = this.#tail = new Node(value);
            return;
        }

        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head.prev = newNode;
        this.#head = newNode;
    }

    pushBack(value) {
        if (this.empty()) {
            this.#head = this.#tail = new Node(value);
            return;
        }

        let newNode = new Node(value);
        this.#tail.next = newNode;
        newNode.prev = this.#tail;
        this.#tail = newNode;
    }

    popFront() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        let value = this.#head.value;
        
        this.#head = this.#head.next;

        if (this.#head) {
            this.#head.prev = null;
        } else {
            this.#tail = null;
        }

        return value;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        let value = this.#tail.value;

        this.#tail = this.#tail.prev;

        if (this.#tail) {
            this.#tail.next = null;
        } else {
            this.#head = null;
        }

        return value;
    }

    insert(index, value) {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (index < 0 || index >= this.size()) {
            throw new Error("Index Error: Out of range");
        }

        if (index === 0) {
            this.pushFront(value);
            return;
        }

        if (index === this.size()) {
            this.pushBack(value);
            return;
        }

        let newNode = new Node(value);
        let current = this.#head;

        while (index) {
            --index;
            current = current.next;
        }
    
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
    }

    erase(index) {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (index < 0 || index >= this.size()) {
            throw new Error("Index Error: Out of range");
        }

        if (index === 0) {
            this.popFront();
            return;
        }

        if (index === this.size() - 1) {
            this.popBack();
            return;
        }

        let current = this.#head;

        while (index) {
            --index;
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

    find(value) {
        let current = this.#head;
        let idx = -1;

        while (current) {
            ++idx;
            if (current.value === value) {
                return idx;
            }
            current = current.next;
        }

        return -1;
    }

    contains(value) {
        let current = this.#head;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    toArray() {
        let arr = new Array(this.size());
        let current = this.#head;
        let size = this.size();

        for (let i = 0; i < size; ++i) {
            arr[i] = current.value;
            current = current.next;
        }

        return arr;
    }

    reverse() {
        let current = this.#head;

        while (current) {
            let next = current.next;

            [current.next, current.prev] = [current.prev, current.next];
            current = next;
        }

        [this.#head, this.#tail] = [this.#tail, this.#head];
        return this.#head;
    }

    [Symbol.iterator]() {
        let current = this.#head;

        return {
            next: () => {
                if (current) {
                    let result = {
                        value: current.value,
                        done: false
                    }
                    current = current.next;
                    return result;
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }

    reverseIterator() {
        let current = this.#tail;

        return {
            next: () => {
                if (current) {
                    let result = {
                        value: current.value,
                        done: false
                    }
                    current = current.prev;
                    return result;
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }

    *entries() {
        let current = this.#head;
        let idx = 0;

        while (current) {
            yield [idx++, current.value];
            current = current.next;
        }
    }
}

const list = new DoublyLinkedList();

list.pushBack(10);
list.pushBack(20);
list.pushBack(30);

list.insert(1, 15);

console.log(list.toArray());
// [10, 15, 20, 30]

list.erase(2);

console.log(list.toArray());
// [10, 15, 30]

list.reverse();

console.log(list.toArray());
// [30, 15, 10]

console.log(list.front());
// 30

console.log(list.back());
// 10