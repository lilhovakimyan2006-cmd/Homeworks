class Node {
    constructor(value, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class BST {
    #root;
    #size;
    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
        this.#root = null;
        this.#size = 0;
    }

    insert_itr(value) {
        let node = new Node(value);

        if (!this.#root) {
            this.#root = node;
            ++this.#size;
            return;
        }

        let current = this.#root;

        while (true) {
            if (current.value === value) {
                throw new Error("Such a value already exists");
            }
            if (current.value > value) {
                if (!current.left) {
                    current.left = node;
                    ++this.#size;
                    return;
                }
                current = current.left;
            } else if (current.value < value) {
                if (!current.right) {
                    current.right = node;
                    ++this.#size;
                    return;
                }
                current = current.right;
            }
        }

        return;
    }

    insert_rec(value) {
        if (!this.#root) {
            this.#root = new Node(value);
            ++this.#size;
            return;
        }
        this.#insert(value, this.#root);
    }

    #insert(value, node) {
        if (node.value === value) {
            throw new Error("Such a value already exists");
        }
        if (node.value < value) {
            if (!node.right) {
                node.right = new Node(value);
                ++this.#size;
                return;
            }
            this.#insert(value, node.right);
        }
        if (node.value > value) {
            if (!node.left) {
                node.left = new Node(value);
                ++this.#size;
                return;
            }
            this.#insert(value, node.left);
        }
    }

    delete_itr(value) {
        if (!this.#root) return null;
        if (this.#root.value === value) return null;

        let current = this.#root;
        let parent = null;

        while (current) {
            if (current.value === value) break;
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        --this.#size;
    }

    delete_rec(value) {
        if (!this.#root) return null;
        if (this.#root.value === value) return null;
        this.#delete(value, this.#root);
        --this.#size;
    }

    #delete(value, node) {
        if (node === null) return;
        if (node.value > value) {
            node.left = this.#delete(value, node.left);
        } else if (node.value < value) {
            node.right = this.#delete(value, node.right);
        } else {
            if (!node.left && !node.right) return null;
            else if (!node.left) return node.right;
            else if (!node.right) return node.left;
            else {
                let succ = node.right;
                while (succ.left) {
                    succ = succ.left;
                }
                node.value = succ.value;
                node.right = this.#delete(succ.value, node.right);
            }
        }

        return node;
    }

    contains(value) {
        let current = this.#root;

        while (current) {
            if (current.value < value) {
                current = current.right
            } else if (current.value > value) {
                current = current.left;
            } else return true;
        }

        return false;
    }

    get_height() {
        return this.#get_height(this.#root);
    }  

    #get_height(node) {
        if (node === null) return -1;
        
        let left = this.#get_height(node.left);
        let right = this.#get_height(node.right);

        return 1 + Math.max(left, right);
    }

    get_depth(value) {
        if (!this.#root) return -1;

        let lvl = 0;
        let current = this.#root;
        
        while (current) {
            if (current.value === value) return lvl;
            else if (current.value < value) {
                current = current.right;
            } else {
                current = current.left;
            }
            ++lvl;
        }

        return -1;
    }

    find_min() {
        if (!this.#root) {
            throw new Error("Can't find minimum of an empty tree");
        }
        
        return this.#find_min(this.#root);
    }

    #find_min(node) {
        while (node.left) {
            node = node.left;
        }

        return node.value;
    }

    find_max() {
        if (!this.#root) {
            throw new Error("Can't find maximum of an empty tree");
        }

        return this.#find_max(this.#root);
    }

    #find_max(node) {
        while (node.right) {
            node = node.right;
        }

        return node.value;
    }

    level_order() {
        if (!this.#root) return [];

        let res = [];
        let queue = [this.#root];

        while (queue.length) {
            let current = queue.shift();

            res.push(current.value);

            if (current.left) {
                queue.push(current.left);
            } else if (current.right) {
                queue.push(current.right);
            }
        }
        
        return res;
    }

    inorder_rec() {
        let res = [];
        this.#inorder(this.#root, res);
        return res;
    }

    #inorder(node, result) {
        if (!node) return;

        this.#inorder(node.left, result);
        result.push(node.value);
        this.#inorder(node.right, result);
    }

    inorder_itr() {
        if (!this.#root) return [];
        
        let res = [];
        let stack = [];
        let current = this.#root;

        while (current || stack.length) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            res.push(current.value);
            current = current.right;
        }

        return res;
    }

    preorder_itr() {
        if (!this.#root) return [];

        let res = [];
        let stack = [this.#root];

        while (stack.length) {
            let currNode = stack.pop();

            res.push(currNode.value);
            
            if (currNode.right) stack.push(currNode.right);
            if (currNode.left) stack.push(currNode.left);
        }

        return res;
    }

    preorder_rec() {
        let res = [];
        this.#preorder(this.#root, res);
        return res;
    }

    #preorder(node, result) {
        if (!node) return;

        result.push(node.value);
        this.#preorder(node.left, result);
        this.#preorder(node.right, result);
    }

    postorder_itr() {
        if (!this.#root) return [];

        let res = [];
        let st1 = [this.#root];
        let st2 = [];

        while (st1.length) {
            let currNode = st1.pop();

            st2.push(currNode.value);

            if (currNode.left) st1.push(currNode.left);
            if (currNode.right) st1.push(currNode.right);
        }

        while (st2.length) {
            res.push(st2.pop());
        }

        return res;
    }

    postorder_rec() {
        let res = [];
        this.#postorder(this.#root, res);
        return res;
    }

    #postorder(node, result) {
        if (!node) return;

        this.#postorder(node.left, result);
        this.#postorder(node.right, result);
        result.push(node.value);
    }

    find_succesor(value) {
        let current = this.#root;
        let successor = null;

        while (current) {
            if (current.value < value) {
                current = current.right;
            } else {
                successor = current.value;
                current = current.left;
            }
        }

        return successor;
    }

    find_predecessor(value) {
        let current = this.#root;
        let predecessor = null;

        while (current) {
            if (current.value > value) {
                current = current.value;
            } else {
                predeessor = current.value;
                current = current.right;
            }
        }

        return predecessor;
    }

    is_balanced() {
        function check(node) {
            if (!node) return 0;

            let left = check(node.left);
            if (left === -1) return -1;

            let right = check(node.right);
            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) return -1;
        
            return Math.max(left, right) + 1;
        }

        return check(this.#root) !== -1;
    }

    validate_BST() {
        function validate(node, min, max) {
            if (!node) return true;

            if (node.value < min || node.value > max) {
                return false;
            }

            return (
                validate(node.left, min, node.value) &&
                validate(node.right, node.value, max)
            );
        }

        return validate(this.#root, -Infinity, Infinity);
    }

    toArray() {
        return this.inorder_rec();
    }

    clone() {
        function copy(node) {
            if (!node) return null;

            let newNode = new Node(node.value);
            newNode.left = copy(node.left);
            newNode.right = copy(node.right);

            return newNode;
        }
    }

    equals(otherTree) {
        function compare(node1, node2) {
            if (!node1 && !node2) return true;
            if (!node1 || !node2) return false;

            if (node1.value !== node2.value) return false;

            return (
                compare(node1.left, node2.left) &&
                compare(node1.right, node2.right)
            );
        }

        return compare(this.#root, otherTree.#root);
    }

    *[Symbol.iterator]() {
        yield* this.values();
    }

    *values() {
        yield* this.inorder_rec();
    }

    *entries() {
        let index = 0;

        for (let value of this) {
            yield [index++, value];
        }
    }

    print() {
        if (!this.#root) {
            console.log("(empty tree)");
            return;
        }

        this.#print(this.#root, "", true);
    }

    #print(node, prefix, isLeft) {
        if (!node) return;

        if (node.right) {
            this.#print(
                node.right,
                prefix + (isLeft ? "│   " : "    "),
                false
            );
        }

        console.log(
            prefix +
            (isLeft ? "└── " : "┌── ") +
            node.value
        );

        if (node.left) {
            this.#print(
                node.left,
                prefix + (isLeft ? "    " : "│   "),
                true
            );
        }
    }
}

let tree = new BST();

tree.insert_itr(10);
tree.insert_itr(5);
tree.insert_rec(15);
tree.insert_rec(3);
tree.insert_itr(7);
tree.insert_rec(13);
tree.insert_itr(20);

tree.print();