// 链表（linked list）是一种线性数据结构，其中的每个元素都是一个节点对象，各个节点通过“引用”相连接。
// 引用记录了下一个节点的内存地址，通过它可以从当前节点访问到下一个节点。

// 常见的链表类型包括三种。
// 单向链表：即前面介绍的普通链表。单向链表的节点包含值和指向下一节点的引用两项数据。我们将首
// 个节点称为头节点，将最后一个节点称为尾节点，尾节点指向空 None 。
// 环形链表：如果我们令单向链表的尾节点指向头节点（首尾相接），则得到一个环形链表。在环形链表
// 中，任意节点都可以视作头节点。
// 双向链表：与单向链表相比，双向链表记录了两个方向的引用。双向链表的节点定义同时包含指向后继
// 节点（下一个节点）和前驱节点（上一个节点）的引用（指针）。相较于单向链表，双向链表更具灵活
// 性，可以朝两个方向遍历链表，但相应地也需要占用更多的内存空间。

class Node {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的引用，初始为 null
  }
}

/* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */

const n0 = new Node(1);
const n1 = new Node(3);
const n2 = new Node(2);
const n3 = new Node(5);
const n4 = new Node(4);
n0.next = n1; // 1 -> 3
n1.next = n2; // 3 -> 2
n2.next = n3; // 2 -> 5
n3.next = n4; // 5 -> 4

function insertNode(node, value) {
  const newNode = new Node(value);
  newNode.next = node.next; // 新节点指向当前节点的下一个节点
  node.next = newNode; // 当前节点指向新节点
  return newNode; // 返回新插入的节点
}

function removeNode(node) {
  if (node.next === null) {
    throw new Error('Cannot remove the last node');
  }
  node.value = node.next.value; // 将当前节点的值替换为下一个节点的值
  node.next = node.next.next; // 跳过下一个节点
}

function findNode(head, index) {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) {
      return current; // 返回找到的节点
    }
    current = current.next; // 移动到下一个节点
    count++;
  }
  throw new Error('Index out of bounds'); // 如果索引超出范围
}

function findTargetNode(head, value) {
  let current = head;
  while (current !== null) {
    if (current.value === value) {
      return current; // 返回找到的节点
    }
    current = current.next; // 移动到下一个节点
  }
  return null; // 如果未找到节点
}