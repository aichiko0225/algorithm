/* 初始化队列 */
// JavaScript 没有内置的队列，可以把 Array 当作队列来使用
const queue = [];

/* 入队 */
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);


/* 访问队首元素 */
const peek = queue[0];

/* 元素出队 */
// 底层是数组，因此 shift() 方法的时间复杂度为 O(n)
const pop = queue.shift();

/* 获取队列的长度 */
const size = queue.length;

/* 判断队列是否为空 */
const empty = queue.length === 0;

class LinkedListQueue {
  #front; // 头节点 #front
  #rear; // 尾节点 #rear
  #queSize = 0;

  constructor() {
    this.#front = null;
    this.#rear = null;
  }

  get size() {
    return this.#queSize;
  }

  get isEmpty() {
    return this.#queSize === 0;
  }

  push(value) {
    const node = {
      value,
      next: null
    };
    if (this.isEmpty) {
      this.#front = node;
    } else {
      this.#rear.next = node;
    }
    this.#rear = node;
    this.#queSize++;
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }
    const value = this.#front.value;
    this.#front = this.#front.next;
    this.#queSize--;
    if (this.isEmpty) {
      this.#rear = null;
    }
    return value;
  }

  peek() {
    return this.#front ? this.#front.value : null;
  }
}