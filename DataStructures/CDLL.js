class Node {
    value;
    #next;
    #prev;
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

class CyclicDoublyLinkedList {
    #head;
    #tail;
    constructor(value) {
        this.#head = null;
        this.#tail = null;
        
        if (value !== undefined) {
            let newNode = new Node(value);
            newNode.next = newNode;
            newNode.prev = newNode;
            this.#head = newNode;
            this.#tail = newNode;
        } 
    }

    empty() {
        return this.#head === null;
    }

    size() {
        if (this.empty()) {
            return 0;
        }

        let size = 0;
        let current = this.#head;

        do {
            ++size;
            current = current.next;
        } while (current !== this.#head);

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
            throw new Error("Index Error: Out of Range");
        }

        let current = this.#head;

        while (index--) {
            current = current.next;
        }

        return current.value;
    }

    pushFront(value) {
        let newNode = new Node(value);

        if (this.empty()) {
            newNode.next = newNode;
            newNode.prev = newNode;
            
            this.#head = this.#tail = newNode;
            return;
        }

        newNode.next = this.#head;
        newNode.prev = this.#tail;
        
        this.#head.prev = newNode;
        this.#tail.next = newNode;
        
        this.#head = newNode;
    }

    pushBack(value) {
        let newNode = new Node(value);

        if (this.empty()) {
            newNode.next = newNode;
            newNode.prev = newNode;
            
            this.#head = this.#tail = newNode;
            return;
        }

        newNode.prev = this.#tail;
        newNode.next = this.#head;

        this.#tail.next = newNode;
        this.#head.prev = newNode;
        
        this.#tail = newNode;
    }

    popFront() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        let value = this.#head.value;

        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
            
            return value;
        }

        this.#tail.next = this.#head.next;
        this.#head.next.prev = this.#tail;
        this.#head = this.#head.next;

        return value;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        let value = this.#tail.value;

        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
            
            return value;
        }

        this.#head.prev = this.#tail.prev;
        this.#tail.prev.next = this.#head;
        this.#tail = this.#tail.prev;

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
        let newNode = new Node(value);

        while (index--) {
            current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
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

        if (index === this.size() - 1) {
            this.popBack();
            return;
        }

        let current = this.#head;

        while (index--) {
            current = current.next;
        }

        let value = current.value;

        current.prev.next = current.next;
        current.next.prev = current.prev;

        return value;
    }

    find(value) {
        if (this.empty()) {
            return -1;
        }

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

        let arr = new Array(this.size());
        let size = this.size();
        let current = this.#head;
    
        for (let i = 0; i < size; ++i) {
            arr[i] = current.value;
            current = current.next;
        }

        return arr;
    }

    reverse() {
        let current = this.#head;
        
        do {
        let next = current.next;
        
        [current.next, current.prev] = [current.prev, current.next];
        current = next;
        
        } while (current !== this.#head);

        [this.#head, this.#tail] = [this.#tail, this.#head];
        return this.#head;
    }

    *[Symbol.iterator]() {
        if (this.empty()) {
            return;
        }

        let current = this.#head;

        do {
            yield current.value;
            current = current.next;
        } while (current !== this.#head)
    }

    *reverseIterator() {
        if (this.empty()) {
            return;
        }

        let current = this.#tail;

        do {
            yield current.value;
            current = current.prev;
        } while (current !== this.#tail)
    }

    *entries() {
        if (this.empty()) {
            return;
        }

        let idx = 0;
        let current = this.#head;

        do {
            yield [idx++, current.value];
            current = current.next;
        } while (current !== this.#head);
    }
}

const list = new CyclicDoublyLinkedList();

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