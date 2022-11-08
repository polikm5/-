// 因为 数组 shift方法时间复杂度是O(n)  所以可以选择使用链表代替数据量大且频繁使用shift的数组

class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}

export default class Queue {
    // 代表私有变量  其他地方读取不到
    #head;  // 代表第一个节点
    #tail;  // 代表最后一个节点
    #size;
    constructor() {
        this.clear();
    }

    enqueue(value) {
        let node = new Node(value);
        if (this.#head) {
            this.#tail.next = node;
            this.#tail = node;
        } else {
            this.#head = node;
            this.#tail = node;
        }
        this.#size++;
        return this.#size;
    }

    dequeue() {
        let fistNode = this.#head;
        if (!fistNode) {
            return
        }
        this.#head = this.#head.next;
        this.#size--;
        return fistNode.value;
    }

    clear() {
        this.#head = undefined;
        this.#tail = undefined;
        this.#size = 0;
    }

    get size() {
        return this.#size;
    }
    // 为该对象定义迭代器
    *[Symbol.iterator]() {
        let current = this.#head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}

