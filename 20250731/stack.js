// 栈（stack）是一种遵循先入后出逻辑的线性数据结构。

/* 初始化栈 */
// JavaScript 没有内置的栈类，可以把 Array 当作栈来使用
const stack = [];

// 压入元素
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


const peek = stack[stack.length - 1]; // 查看栈顶元素
console.log('peek:', peek);

const pop = stack.pop(); // 弹出栈顶元素
console.log('pop:', pop);

const size = stack.length; // 获取栈的大小
console.log('size:', size);

const isEmpty = stack.length === 0; // 检查栈是否为空
console.log('isEmpty:', isEmpty);

class StackNode {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的引用，初始为 null
  }
}

// 基于链表实现栈
class LinkedListStack {
  constructor() {
    this.head = null; // 栈顶元素
    this.size = 0; // 栈的大小
  }

  push(value) {
    const newNode = new StackNode(value);
    newNode.next = this.head; // 新节点指向当前栈顶
    this.head = newNode; // 更新栈顶为新节点
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const value = this.head.value; // 获取栈顶元素的值
    this.head = this.head.next; // 更新栈顶为下一个节点
    this.size--;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.head.value; // 返回栈顶元素的值
  }

  isEmpty() {
    return this.size === 0; // 检查栈是否为空
  }

  getSize() {
    return this.size; // 返回栈的大小
  }
}

// 基于数组实现栈
class ArrayStack {
  constructor() {
    this.stack = []; // 初始化栈
  }

  push(value) {
    this.stack.push(value); // 压入元素
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack.pop(); // 弹出栈顶元素
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack[this.stack.length - 1]; // 查看栈顶元素
  }

  isEmpty() {
    return this.stack.length === 0; // 检查栈是否为空
  }

  getSize() {
    return this.stack.length; // 返回栈的大小
  }
}