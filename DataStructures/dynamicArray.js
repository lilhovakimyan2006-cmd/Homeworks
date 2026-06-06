class DArray {
    #size;
    #capacity;
    #arr;
    #CAR_EXPONENT;
    constructor(initialCapacity = 8) {
        if (!Number.isInteger(initialCapacity)) {
            throw new Error("Capacity must be an intereger");
        } 
        if (initialCapacity <= 0) {
            throw new Error("Capacity must be positive");
        }
        this.#capacity = initialCapacity;
        this.#CAR_EXPONENT = 2;
        this.#arr = new Int32Array(initialCapacity);
        this.#size = 0;
    }

    #resize(newCapacity, fill = 0) {
        if (!Number.isInteger(newCapacity)) {
            throw new Error("Capacity must be an intereger");
        } 
        if (newCapacity <= 0) {
            throw new Error("Capacity must be positive");
        }
        if (!Number.isInteger(fill)) {
            throw new Error("Fill number must be an integer");
        }
        if (newCapacity <= this.#size) this.#size = newCapacity;
        let newArr = new Int32Array(newCapacity).fill(fill);
        for (let i = 0; i < this.#size; ++i) {
            newArr[i] = this.#arr[i];
        }
        this.#capacity = newCapacity;
        this.#arr = newArr;
    }

    pushBack(elm) {
        if (!Number.isInteger(elm)) {
            throw new Error("New Value must be an integer");
        }
        if (this.#size === this.#capacity) {
            let newCap = this.#capacity * this.#CAR_EXPONENT;
            this.#resize(newCap);
        }
        this.#arr[this.#size++] = elm;
    }

    popBack() {
        if (this.empty()) {
            throw new Error("Empty array");
        }
        let res = this.#arr[--this.#size];
        return res;
    }

    erase(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (index < 0) {
            throw new Error("Index must be positive");
        }
        if (index >= this.#size) {
            throw new Error("Index Error: Out of range");
        }
        for (let i = index; i < this.#size - 1; ++i) {
            this.#arr[i] = this.#arr[i + 1];
        }  
        --this.#size;
    }
    

    at(index) {
        if (!Number.isInteger(index)) {
            throw new Error("Index must be an integer");
        }
        if (index < 0) {
            throw new Error("Index must be positive");
        }
        if (index >= this.#size) {
            throw new Error("Index Error: Out of range");
        }
        return this.#arr[index];
    }

    empty() {
        return this.#size === 0; 
    }

    clear() {
        this.#size = 0;
    }

    setValue(i, value) {
        if (!Number.isInteger(i)) {
            throw new Error("Index must be an integer");
        }
        if (i < 0) {
            throw new Error("Index must be positive");
        }
        if (i >= this.#size) {
            throw new Error("Index Error: Out of range");
        }
         if (!Number.isInteger(value)) {
            throw new Error("Value must be an integer");
        }
        this.#arr[i] = value;
    }

    front() {
        return this.#arr[0];
    }

    back() {
        return this.#arr[this.#size - 1];
    }

    capacity() {
        return this.#capacity;
    }

    [Symbol.iterator]() {
        if (this.empty()) {
            return {
                value: undefined,
                done: true
            }
        }
        let i = 0;
        return {
            next: () => {
                if (i < this.#size) {
                    value: this.#arr[i++]
                    done: false
                }
            }
        };
    }

    reserve(n) {
        if (n < 0) {
            throw new Error("Memory must be positive");
        }
        if (n <= this.#capacity) return;
        this.#resize(n);
    }

    shrinkToFit() {
        this.#resize(this.#size);
    }

    toArray() {
        let newArr = new Array(this.#size);
        for (let i = 0; i < this.#size; ++i) {
            newArr[i] = this.#arr[i];
        }
        return newArr;
    }

    insert(pos, value) {
        if (!Number.isInteger(pos)) {
            throw new Error("Index must be an interger.");
        }
        if (pos < 0 || pos >= this.#size) {
            throw new Error("Index Error: Out of range");
        }
        if (!Number.isInteger(value)) {
            throw new Error("Value must be an interger.");
        }
        if (this.#size === this.#capacity) {
            let newCap = this.#capacity * this.#CAR_EXPONENT;
            this.#resize(newCap);
        }
        for (let i = this.#size; i >= pos; --i) {
            this.#arr[i] = this.#arr[i - 1];
        }
        this.#arr[pos] = value;
        ++this.#size;
    }

    swap(i, j) {
        if (!Number.isInteger(i) || !Number.isInteger(j)) {
            throw new Error("Index must be an interger.");
        }
        if (i < 0 || i >= this.#size || j < 0 || j >= this.#size) {
            throw new Error("Index Error: Out of range");
        }
        [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
    }

    *values() {
        for (let i = 0; i < this.#size; ++i) {
            yield this.#arr[i];
        }
    }

    *keys() {
        for (let i = 0; i < this.#size; ++i) {
            yield i;
        }
    }

    *entries() {
        for (let i = 0; i < this.#size; ++i) {
            yield [i, this.#arr[i]];
        }
    }

    forEach(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        for (let i = 0; i < this.#size; ++i) {
            callback.call(thisArg, this.#arr[i], i, this);
        }
    }

    map(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        let newArr = new DArray();
        for (let i = 0; i < this.#size; ++i) {
            let res = callback.call(thisArg, this.#arr[i], i, this);
            newArr.pushBack(res);
        }
        return newArr;
    }

    filter(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        let newArr = new DArray();
        for(let i = 0; i < this.#size; ++i) {
            if (callback.call(thisArg, this.#arr[i], i, this)) {
                newArr.pushBack(this.#arr[i]);
            }
        }
        return newArr;
    }

    reduce(callback, initialValue) {
        if (!Number.isInteger(initialValue)) {
            throw new Error("Initial number must be an interger.");
        }
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        let acc = initialValue;
        for (let i = 0; i < this.#size; ++i) {
            acc = callback(acc, this.#arr[i], i, this);
        }
        return acc;
    }

    some(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        for (let i = 0; i < this.#size; ++i) {
            if (callback.call(thisArg, this.#arr[i], i, this)) {
                return true;
            }
        }
        return false;
    }

    every(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        for (let i = 0; i < this.#size; ++i) {
            if (!callback.call(thisArg, this.#arr[i], i, this)) {
                return false;
            }
        }
        return true;
    }

    find(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        for (let i = 0; i < this.#size; ++i) {
            if (callback.call(thisArg, this.#arr[i], i, this)) {
                return this.#arr[i];
            }
        }
        return undefined;
    }

    findIndex(callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }
        for (let i = 0; i < this.#size; ++i) {
            if (callback.call(thisArg, this.#arr[i], i, this)) {
                return i;
            }
        }
        return -1;
    }

    includes(value) {
        if (!Number.isInteger(value)) {
            throw new Error("Value must be an integer");
        }
        for (let i = 0; i < this.#size; ++i) {
            if (this.#arr[i] === value) return true;
        }
        return false;
    }
}