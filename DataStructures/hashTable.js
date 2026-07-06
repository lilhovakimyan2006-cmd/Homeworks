import {Node, LinkedList} from "./sllForHT.js";

class HashTable {
    #table;
    #capacity;
    #size;
    #loadFactor;

    constructor(capacity = 7, loadFactor = 1.0) {
        if (!Number.isInteger(capacity)) {
            throw new Error("Capacity must be an intereger");
        } 
        if (capacity <= 0) {
            throw new Error("Capacity must be positive");
        }
        this.#table = [];
        this.#capacity = capacity;
        this.#size = 0;
        this.#loadFactor = loadFactor;

        for (let i = 0; i < this.#capacity; ++i) {
            this.#table.push(new LinkedList());
        }
    }

    /* ================= Basic State ================= */

    size() {
       return this.#size;
    }

    capacity() {
        return this.#capacity;
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
        let tmpTable = [];
        
        for (let i = 0; i < this.#capacity; ++i) {
            tmpTable.push(new LinkedList());
        }

        this.#size = 0;
        this.#table = tmpTable;
    }

    /* ================= Hashing ================= */

    #hash(key) {
        let hash = 0;

        if (typeof key === 'number') {
            key = Math.abs(key);

            if (key === 0) return 0;

            while (key) {
                let digit = key % 10;
                hash += digit;
                key = Math.floor(key / 10);
            }
        } else if (typeof key === 'string') {
            for (let i = 0; i < key.length; ++i) {
                hash += key.charCodeAt(i);
            }
        } else {
            throw new Error("Invalid Key!");
        }

        return hash % this.#capacity;
    }

    /* ================= Core Operations ================= */

    put(key, value) {
        if (this.loadFactor() >= this.#loadFactor) {
            this.#resize(this.#capacity * 2);
        }

        let index = this.#hash(key);
        let bucket = this.#table[index];
        
        let curr = bucket.head;

        while (curr) {
            if (curr.key === key) {
                curr.value = value;
                return;
            }

            curr = curr.next;
        }
        
        let newNode = new Node(key, value);

        newNode.next = bucket.head;
        bucket.head = newNode;

        ++this.#size;
        bucket.incrementSize();
    }

    get(key) {
        let index = this.#hash(key);
        let bucket = this.#table[index];

        let current = bucket.head;

        while (current) {
            if (current.key === key) {
                return current.value;
            }

            current = current.next;
        }

        return undefined;
    }

    remove(key) {
        if (this.isEmpty()) {
            throw new Error("Is empty!");
        }

        let index = this.#hash(key);
        let bucket = this.#table[index];
        
        let current = bucket.head;
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev === null) {
                    bucket.head = current.next;
                } else {
                    prev.next = current.next;
                }

                --this.#size;
                bucket.decrementSize();

                return current.value;
            }

            prev = current;
            current = current.next;
        }
        
        return undefined;
    }

    containsKey(key) {
        let index = this.#hash(key);
        let bucket = this.#table[index];

        let current = bucket.head;
        
        while (current) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    containsValue(value) {
        for (let bucket of this.#table) {
            if (!bucket.head) continue;

            let current = bucket.head;
            
            while (current) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
        }

        return false;
    }

    /* ================= Resize / Rehash ================= */

    #resize(newCapacity) {
        let oldTable = this.#table;

        this.#table = [];
        this.#capacity = newCapacity;
        this.#size = 0;

        for (let i = 0; i < this.#capacity; ++i) {
            this.#table.push(new LinkedList());
        }

        for (let bucket of oldTable) {
            let current = bucket.head;

            while (current) {
                let index = this.#hash(current.key);
                let newBucket = this.#table[index];

                let node = new Node(current.key, current.value);

                node.next = newBucket.head;
                newBucket.head = node;

                ++this.#size;
                newBucket.incrementSize();

                current = current.next;
            }
        }
    }

    loadFactor() {
        return this.#size / this.#capacity;
    }

    /* ================= Entry Views ================= */

    keys() {
        let result = [];

        for (const bucket of this.#table) {
            let current = bucket.head;

            while (current) {
                result.push(current.key);
                current = current.next;
            }
        }

        return result;
    }

    values() {
        let result = [];

        for (const bucket of this.#table) {
            let current = bucket.head;

            while (current) {
                result.push(current.value);
                current = current.next;
            }
        }

        return result;
    }

    entries() {
        let result = [];

        for (const bucket of this.#table) {
            let current = bucket.head;

            while (current) {
                result.push([current.key, current.value]);
                current = current.next;
            }
        }

        return result;
    }

    /* ================= Iteration ================= */

    *[Symbol.iterator]() {
        for (const bucket of this.#table) {
            let current = bucket.head;

            while (current) {
                yield [current.key, current.value];
                current = current.next;
            }
        }
    }

    /* ================= Debug ================= */

    bucketSizes() {
        const result = [];

        for (const bucket of this.#table) {
            result.push(bucket.size);
        }

        return result;
    }

    print() {
        for (let i = 0; i < this.#capacity; i++) {
            let result = `Bucket ${i}: `;
            let current = this.#table[i].head;

            while (current) {
                result += `(${current.key}: ${current.value}) -> `;
                current = current.next;
            }

            result += "null";

            console.log(result);
        }
    }
}