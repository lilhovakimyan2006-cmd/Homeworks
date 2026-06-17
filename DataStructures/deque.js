class BucketedDeque {
    #everyBucketLength;
    #bucketSize;
    #buckets;
    #frontBucket;
    #backBucket;
    #frontIndex;
    #backIndex;
    #size;

    constructor(everyBucketLength = 8) {
        this.#everyBucketLength = everyBucketLength;
        this.#bucketSize = 4;
        this.#buckets = Array.from(
            { length: this.#bucketSize },
            () => new Array(this.#everyBucketLength)
        );
        this.#frontBucket = Math.floor((this.#bucketSize / 2) - 1);
        this.#backBucket = Math.floor(this.#bucketSize / 2);
        this.#frontIndex = this.#everyBucketLength - 1;
        this.#backIndex = 0;
        this.#size = 0;
    }

    push_front(value) {
        if (this.isEmpty()) {
            this.#buckets[this.#frontBucket][this.#frontIndex] = value;
            ++this.#size;
            return;
        }
        
        if (this.#frontIndex > 0) {
            --this.#frontIndex;
        } else {
            if (this.#frontBucket === 0) {
                this._ensureBucket(true);
            }
            --this.#frontBucket;
            this.#frontIndex = this.#everyBucketLength - 1;
        }

        this.#buckets[this.#frontBucket][this.#frontIndex] = value;
        ++this.#size;
    }

    push_back(value) {
        if (this.isEmpty()) {
            this.#buckets[this.#backBucket][this.#backIndex] = value;
            ++this.#size;
            return;
        }

        if (this.#backIndex < this.#everyBucketLength - 1) {
            ++this.#backIndex;
        } else {
            if (this.#backBucket === this.#buckets.length - 1) {
                this._ensureBucket(false);
            }
            ++this.#backBucket;
            this.#backIndex = 0;
        }

        this.#buckets[this.#backBucket][this.#backIndex] = value;
        ++this.#size;
    }

    pop_front() {
        if (this.isEmpty()) return undefined;

        let value = this.#buckets[this.#frontBucket][this.#frontIndex];

        this.#buckets[this.#frontBucket][this.#frontIndex] = undefined;

        if (this.#frontBucket === this.#backBucket && this.#frontIndex === this.#backIndex) {
            this.#size = 0;
            return value;
        }

        if (this.#frontIndex < this.#everyBucketLength - 1) {
            ++this.#frontIndex;
        } else {
            ++this.#frontBucket;
            this.#frontIndex = 0;
        }

        --this.#size;
        return value;
    }

    pop_back() {
        if (this.isEmpty()) return undefined;

        let value = this.#buckets[this.#backBucket][this.#backIndex];

        this.#buckets[this.#backBucket][this.#backIndex] = undefined;

        if (this.#frontBucket === this.#backBucket && this.#frontIndex === this.#backIndex) {
            this.#size = 0;
            return value;
        }

        if (this.#backIndex > 0) {
            --this.#backIndex;
        } else {
            --this.#backBucket
            this.#backIndex = this.#everyBucketLength - 1; 
        }

        --this.#size;
        return value;
    }

    front() {
        return this.#buckets[this.#frontBucket][this.#frontIndex];
    }

    back() {
        return this.#buckets[this.#backBucket][this.#backIndex];
    }

    clear() {
        for (let i = 0; i < this.#buckets.length; ++i) {
            this.#buckets[i].fill(undefined);
        }

        this.#frontBucket = Math.floor((this.#buckets.length / 2) - 1);
        this.#backBucket = Math.floor(this.#buckets.length / 2);
        this.#frontIndex = this.#everyBucketLength - 1;
        this.#backIndex = 0;
        this.#size = 0;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    toArray() {
        let arr = [];

        let i = this.#frontBucket;
        let j = this.#frontIndex;

        for (let count = 0; count < this.#size; ++count) {
            arr.push(this.#buckets[i][j]);

            if (j < this.#everyBucketLength - 1) {
                ++j;
            } else {
                ++i;
                j = 0;
            }
        }

        return arr;
    }

    at(globalIndex) {
        if (globalIndex < 0 || globalIndex >= this.#size) {
            return undefined;
        }

        let {row, column} = this._bucketIndex(globalIndex);
        return this.#buckets[row][column];
    }

    *[Symbol.iterator]() {
        let i = this.#frontBucket;
        let j = this.#frontIndex;

        for (let count = 0; count < this.#size; ++count) {
            yield this.#buckets[i][j];

            if (j < this.#everyBucketLength - 1) {
                ++j;
            } else {
                ++i;
                j = 0;
            }
        }
    }

    _ensureBucket(front = false) {
        let newBucket = new Array(this.#everyBucketLength);

        if (front) {
            this.#buckets.unshift(newBucket);
            ++this.#frontBucket;
            ++this.#backBucket;
        } else {
            this.#buckets.push(newBucket);
        }
    }

    _bucketIndex(globalIndex) {
        let total = this.#frontIndex + globalIndex;

        let row = this.#frontBucket + Math.floor(total / this.#everyBucketLength);
        let column = total % this.#everyBucketLength;

        return {
            "row": row,
            "column": column
        }
    }
}