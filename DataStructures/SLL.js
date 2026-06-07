class Node {
    #next;
    value;
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

class SinglyLinkedList {
    #head;
    constructor(value) {
        this.#head = value !== undefined ? new Node(value) : null;
    }

    empty() {
        return this.#head === null;
    }

    size() {
        if (this.empty()) {
            return 0;
        }
        if (this.#head.next === null) {
            return 1;
        }
        
        let size = 0;
        let current = this.#head;
        
        while (current) {
            ++size;
            current = current.next;
        }
        
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

        while (current.next) {
            current = current.next;
        }

        return current.value;
    }

    at(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (index < 0 || index >= this.size()) {
            throw new Error("Invalid index");
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
            this.#head = new Node(value);
            return;
        }

        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
    }

    pushBack(value) {
        if (this.empty()) {
            this.#head = new Node(value);
            return;
        }

        if (this.#head.next === null) {
            this.#head.next = new Node(value);
            return;
        }

        let current = this.#head;

        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    popFront() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        let value = this.#head.value;
        this.#head = this.#head.next;
        
        return value;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (this.#head.next === null) {
            let val = this.#head.value;
            this.#head = null;
            return val;
        }

        let current = this.#head;
        
        while (current.next.next) {
            current = current.next;
        }
        
        let res = current.next.value;
        current.next = null;
        return res;
    }

    insert(index, value) {
        if (!Number.isInteger(index)) {
            throw new Error("Index is not integer");
        }
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (index >= this.size() || index < 0) {
            throw new Error("Invalid index");
    
        }

        if (index === 0) {
            this.pushBack(value);
            return;
        }

        let current = this.#head;
        while (index != 1 && current) {
            current = current.next;
            --index;
        }

        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
    }

    erase(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Index is not integer");
        }
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (index >= this.size() || index < 0) {
            throw new Error("Invalid index");
    
        }
        
        if (index === 0) {
            this.popFront();
            return;
        }

        let current = this.#head;
        while(index != 1 && current) {
            current = current.next;
            --index;
        } 

        current.next = current.next.next;
    }

    find(value) {
        let index = -1;
        let current = this.#head;

        while (current) {
            ++index;
            if (current.value === value) {
                return index;
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
        let idx = 0;

        while (current) {
            arr[idx++] = current.value;
            current = current.next;
        }

        return arr;
    }

    reverse() {
        if (!this.#head) return this.#head;

        let previous = null;
        let current = this.#head;
        
        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        } 

        return this.#head = previous;
    }

    [Symbol.iterator]() {
        let current = this.#head;

        return {
            next: () => {
                if (current) {
                    const result = { 
                        value: current.value, 
                        done: false 
                    };
                    current = current.next;
                    return result;
                }
                return { 
                    value: undefined, 
                    done: true 
                }
            }
        }
    }

    *entries() {
        let idx = -1;
        let current = this.#head;

        while (current) {
            yield [++idx, current.value];
            current = current.next;
        }
    }
}

const list = new SinglyLinkedList();

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
