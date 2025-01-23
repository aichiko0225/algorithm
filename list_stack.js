class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {

  #stackPeek;
  #stkSize = 0;

  constructor() {
    this.#stackPeek = null;
  }

  push(value) {
    const node = new ListNode(value);
    node.next = this.#stackPeek;
    this.#stackPeek = node;
    this.#stkSize++;
  }

  pop() {
    if (!this.#stackPeek) {
      return null;
    }
    const value = this.#stackPeek.value;
    this.#stackPeek = this.#stackPeek.next;
    this.#stkSize--;
    return value;
  }

  peek() {
    return this.#stackPeek ? this.#stackPeek.value : null;
  }

  toArray() {
    const arr = [];
    let current = this.#stackPeek;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  get size() {
    return this.#stkSize;
  }

  get isEmpty() {
    return this.#stkSize === 0;
  }

}

class ArrayStack {
  
  #stack;
  #stkSize = 0;

  constructor() {
    this.#stack = [];
  }

  push(value) {
    this.#stack.push(value);
    this.#stkSize++;
  }

  pop() {
    if (this.#stkSize === 0) {
      return null;
    }
    this.#stkSize--;
    return this.#stack.pop();
  }

  peek() {
    return this.#stkSize === 0 ? null : this.#stack[this.#stkSize - 1];
  }

  toArray() {
    return this.#stack;
  }

  get size() {
    return this.#stkSize;
  }

  get isEmpty() {
    return this.#stkSize === 0;
  }
}