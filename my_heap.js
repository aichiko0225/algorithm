class Heap {
  #maxHeap;
  
  constructor() {
    this.#maxHeap = [];
  }

  /* 获取左子节点的索引 */
  #left(i) {
    return 2 * i + 1;
  }

  /* 获取右子节点的索引 */
  #right(i) {
    return 2 * i + 2;
  }

  /* 获取父节点的索引 */
  #parent(i) {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  /* 访问堆顶元素 */
  peek() {
    return this.#maxHeap[0];
  }
}

export default Heap;