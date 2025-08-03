// 列表（list）是一个抽象的数据结构概念，它表示元素的有序集合，支持元素访问、修改、添加、删除和遍历
// 等操作，无须使用者考虑容量限制的问题。列表可以基于链表或数组实现。
// 链表天然可以看作一个列表，其支持元素增删查改操作，并且可以灵活动态扩容。
// 数组也支持元素增删查改，但由于其长度不可变，因此只能看作一个具有长度限制的列表

const nums1 = []

const nums = [1, 2, 3, 4, 5]


nums.length = 0

nums.push(1)
nums.push(2)
nums.push(3)
nums.push(4)
nums.push(5)
console.log('nums:', nums);

nums.splice(3, 0, 6)

nums.splice(2, 1)
console.log('nums after splice:', nums);


class MyList {
  #arr = new Array()
  #capacity = 0
  #size = 0
  #extendFactor = 2

  constructor(capacity = 10) {
    this.#capacity = capacity;
    this.#arr = new Array(capacity);
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  get(index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of bounds');
    }
    return this.#arr[index];
  }

  set(index, value) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of bounds');
    }
    this.#arr[index] = value;
  }

  add(value) {
    if (this.#size >= this.#capacity) {
      this.extendCapacity();
    }
    this.#arr[this.#size] = value;
    this.#size++;
  }

  insert(index, value) {
    if (index < 0 || index > this.#size) {
      throw new Error('Index out of bounds');
    }
    if (this.#size >= this.#capacity) {
      this.extendCapacity();
    }
    for (let i = this.#size; i > index; i--) {
      this.#arr[i] = this.#arr[i - 1]; // 向后移动元素
    }
    this.#arr[index] = value; // 插入新元素
    this.#size++;
  }

  remove(index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of bounds');
    }
    for (let i = index; i < this.#size - 1; i++) {
      this.#arr[i] = this.#arr[i + 1]; // 向前移动元素
    }
    this.#arr[this.#size - 1] = undefined; // 清除最后一个元素
    this.#size--;
  }

  extendCapacity() {
    const newCapacity = this.#capacity * this.#extendFactor;
    const newArr = new Array(newCapacity);
    for (let i = 0; i < this.#size; i++) {
      newArr[i] = this.#arr[i];
    }
    this.#arr = newArr;
    this.#capacity = newCapacity;
  }

  toArray() {
    return this.#arr.slice(0, this.#size); // 返回当前有效元素的数组
  }
}