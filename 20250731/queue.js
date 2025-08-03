// 队列（queue）是一种遵循先入先出规则的线性数据结构。顾名思义，队列模拟了排队现象，即新来的人不断
// 加入队列尾部，而位于队列头部的人逐个离开。


/* 初始化队列 */
// JavaScript 没有内置的队列，可以把 Array 当作队列来使用
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

const peek = queue[0]; // 查看队列头部元素
console.log('peek:', peek);

const pop = queue.shift(); // 弹出队列头部元素
console.log('pop:', pop);

const size = queue.length; // 获取队列的大小
console.log('size:', size);
const isEmpty = queue.length === 0; // 检查队列是否为空
console.log('isEmpty:', isEmpty);


class QueueNode {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的引用，初始为 null
  }
}

// 基于链表的实现 queue

class LinkedListQueue {
  #front = null; // 队列头部
  #rear = null; // 队列尾部
  #queueSize = 0; // 队列的大小


  constructor() {    
    this.#front = null; // 初始化队列头部为空
    this.#rear = null; // 初始化队列尾部为空
    this.#queueSize = 0; // 初始化队列大小为 0
  }

  enqueue(value) {
    const newNode = new QueueNode(value); // 创建新节点
    if (this.#rear) {
      this.#rear.next = newNode; // 将新节点添加到队列尾部
    } else {
      this.#front = newNode; // 如果队列为空，设置头部为新节点
    }
    this.#rear = newNode; // 更新队列尾部为新节点
    this.#queueSize++; // 增加队列大小
  }

  dequeue() {
    if (!this.#front) return null; // 如果队列为空，返回 null
    const value = this.#front.value; // 获取队列头部元素的值
    this.#front = this.#front.next; // 将头部指针后移
    if (!this.#front) this.#rear = null; // 如果队列为空，更新尾部指针
    this.#queueSize--; // 减少队列大小
    return value;
  }

  peek() {
    return this.#front ? this.#front.value : null; // 返回队列头部元素的值
  }

  isEmpty() {
    return this.#queueSize === 0; // 检查队列是否为空
  }

  size() {
    return this.#queueSize; // 返回队列大小
  }

  toArray() {
    const result = [];
    let current = this.#front;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// 基于数组的实现 queue
class ArrayQueue {
  constructor() {
    this.queue = []; // 初始化队列
  }

  enqueue(value) {
    this.queue.push(value); // 将元素添加到队列尾部
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.queue.shift(); // 弹出队列头部元素
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.queue[0]; // 返回队列头部元素
  }

  isEmpty() {
    return this.queue.length === 0; // 检查队列是否为空
  }

  size() {
    return this.queue.length; // 返回队列大小
  }
}