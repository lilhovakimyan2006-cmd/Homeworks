class Node {
    value;
    #next;
    constructor(value, next = null) {
        this.value = value;
        this.#next = next;
    }

    get next() {
        return this.#next;
    }

    set next(node) {
        this.#next = node;
    }
}

class CyclicSinglyLinkedList {
    #head;
    constructor(value) {
        if (value !== undefined) {
            let newNode = new Node(value);
            newNode.next = newNode;
            this.#head = newNode;
        } else {
            this.#head = null;
        }
    }

    empty() {
        return this.#head === null;
    }

    size() {
        if (!this.#head) return 0;

        let current = this.#head;
        let size = 0;

        do {
            ++size;
            current = current.next;
        } while (current !== this.#head);

        return size;
    }

    clear() {
        this.#head = null;
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

        let current = this.#head;

        while (current.next !== this.#head) {
            current = current.next;
        }

        return current.value;
    }

    at(index) {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (index < 0 || index >= this.size()) {
            throw new Error("Index Error: Out of Range");
        }

        let current = this.#head;
        
        while (index > 0) {
            --index;
            current = current.next;
        }

        return current.value;
    }

    pushFront(value) {
        let newNode = new Node(value);

        if (this.empty()) {
            this.#head = newNode;
            newNode.next = newNode;
            return;
        }

        newNode.next = this.#head;
        let current = this.#head;

        do {
            current = current.next;
        } while (current.next !== this.#head);

        current.next = newNode;
        newNode.next = this.#head;
        this.#head = newNode;
    }

    pushBack(value) {
        let newNode = new Node(value);

        if (this.empty()) {
            this.#head = newNode;
            newNode.next = newNode;
            return;
        }

        let current = this.#head;

        while (current.next !== this.#head) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.#head;
    }

    popFront() {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (this.#head.next === this.#head) {
            this.#head = null;
            return value;
        }

        let value = this.#head.value;
        let current = this.#head;

        while (current.next !== this.#head) {
            current = current.next;
        }
        this.#head = this.#head.next;
        current.next = this.#head;

        return value;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (this.#head.next === this.#head) {
            let value = this.#head.value;
            this.#head = null;
            return value;
        }

        let current =this.#head;

        while (current.next.next !== this.#head) {
            current = current.next;
        }

        let value = current.next.value;
        current.next = this.#head;

        return value;
    }

    insert(index, value) {
        if (!Number.isInteger(index)) {
            throw new Error("Index is not integer");
        }
        if (index > this.size() || index < 0) {
            throw new Error("Invalid index");
        }

        if (index === 0) {
            this.pushFront(value);
            return;
        }

        if (index === this.size()) {
            this.pushBack(value);
            return;
        }

        let current = this.#head;
        let node = new Node(value);

        while (index != 1 && current) {
            current = current.next;
            --index;
        }

        node.next = current.next;
        current.next = node;
    }

    erase(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Index is not integer");
        }
        if (index >= this.size() || index < 0) {
            throw new Error("Invalid index");
        }
        
        if (index === 0) {
            this.popFront();
            return;
        }

        let current = this.#head;

        while (index > 1 && current) {
            current = current.next;
            --index;
        }

        current.next = current.next.next;
    }

    find(value) {
        let current = this.#head;
        let idx = 0;

        do {
            if (current.value === value) {
                return idx;
            }
            ++idx;
            current = current.next;
        } while (current !== this.#head);

        return -1;
    }

    contains(value) {
        if (this.empty()) {
            return false;
        }

        let current = this.#head;

        do {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        } while (current !== this.#head);

        return false;
    }

    toArray() {
        if (this.empty()) {
            return [];
        }

        let i = 0;
        let arr = new Array(this.size());
        let current = this.#head;

        do {
            arr[i] = current.value;
            ++i;
            current = current.next;
        } while (current !== this.#head);

        return arr;
    }

    reverse() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        if (this.#head.next === this.#head) {
            return;
        }

        let oldHead = this.#head;
        let current = this.#head;
        let previous = null;

        do {
            let next = current.next;
            
            current.next = previous;
            previous = current;
            current = next;

        } while (current !== oldHead);

        oldHead.next = previous;
        this.#head = previous;
    }

    *[Symbol.iterator]() {
        let current = this.#head;
        
        do {
            yield current.value;
            current = current.next;
        } while (current !== this.#head);
    }

    *entries() {
        if (this.empty()) {
            return;
        }

        let current = this.#head;
        let idx = 0;

        do {
            yield [idx++, current.value];
            current = current.next
        } while (current !== this.#head);
    }
}

const list = new CyclicSinglyLinkedList();

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