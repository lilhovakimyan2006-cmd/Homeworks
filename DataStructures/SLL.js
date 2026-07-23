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
    #size;
    constructor(value) {
        this.#head = value !== undefined ? new Node(value) : null;
        this.#size = value !== undefined ? 1 : 0;
    }

    empty() {
        return this.#head === null;
    }

    size() {
        return this.#size;
    }

    clear() {
        this.#head = null;
        this.#size = 0;
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
        if (index < 0 || index >= this.#size) {
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
            ++this.#size;
            return;
        }

        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        ++this.#size
    }

    pushBack(value) {
        if (this.empty()) {
            this.#head = new Node(value);
            ++this.#size;
            return;
        }

        if (this.#head.next === null) {
            this.#head.next = new Node(value);
            ++this.#size;
            return;
        }

        let current = this.#head;

        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
        ++this.#size;
    }

    popFront() {
        if (this.empty()) {
            throw new Error("List is empty");
        }

        let value = this.#head.value;
        this.#head = this.#head.next;
        --this.#size;
        return value;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (this.#head.next === null) {
            let val = this.#head.value;
            this.#head = null;
            --this.#size;
            return val;
        }

        let current = this.#head;
        
        while (current.next.next) {
            current = current.next;
        }
        
        let res = current.next.value;
        current.next = null;
        --this.#size;
        return res;
    }

    insert(index, value) {
        if (!Number.isInteger(index)) {
            throw new Error("Index is not integer");
        }
        if (index > this.#size || index < 0) {
            throw new Error("Invalid index");
        }

        if (index === 0) {
            this.pushFront(value);
            return;
        }

        if (index === this.#size) {
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
        ++this.#size;
    }

    erase(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Index is not integer");
        }
        if (this.empty()) {
            throw new Error("List is empty");
        }
        if (index >= this.#size || index < 0) {
            throw new Error("Invalid index");
    
        }
        
        if (index === 0) {
            return this.popFront();
        }

        let current = this.#head;

        while(index > 1) {
            current = current.next;
            --index;
        } 

        const deleted = current.next;
        current.next = deleted.next;

        --this.#size;
        
        return deleted.value;
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
        let arr = new Array(this.#size);
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

        this.#head = previous;
    }

    *[Symbol.iterator]() {
        let current = this.#head;

        while (current) {
            yield current.value;
            current = current.next;
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

    sort() {
        this.#head = this.#mergeSort(this.#head);
    }

    #mergeSort(head) {
        if (!head || !head.next) {
            return head;
        }

        let mid = this.#getMiddle(head);
        let rightHead = mid.next;
        mid.next = null;
        head = this.#mergeSort(head);
        rightHead = this.#mergeSort(rightHead);
        return this.#merge(head, rightHead);
    }

    #merge(leftHead, rightHead) {
        let dummy = new Node(0);
        let tmp = dummy;

        while (leftHead && rightHead) {
            if (leftHead.value > rightHead.value) {
                tmp.next = rightHead;
                rightHead = rightHead.next;
            } else {
                tmp.next = leftHead;
                leftHead = leftHead.next;
            }
            tmp = tmp.next;
        }

        tmp.next = leftHead || rightHead;

        return dummy.next;
    }

    #getMiddle(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }
}

const list = new SinglyLinkedList();

list.pushBack(30);
list.pushBack(20);
list.pushBack(10);

list.insert(1, 15);

list.sort();

console.log(list.toArray());

list.erase(2);

console.log(list.toArray());

list.reverse();

console.log(list.toArray());